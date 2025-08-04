import { TokenStorage } from './token-storage';
import { AuthService } from '../../api/services/auth-service';
import { useAuthStore } from '../stores/auth-store';

export class SessionManager {
  private static refreshTimeout: NodeJS.Timeout | null = null;
  private static readonly REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 минут до истечения

  static async refreshTokens(): Promise<boolean> {
    try {
      const refreshToken = TokenStorage.getRefreshToken();
      if (!refreshToken) {
        return false;
      }

      const response = await AuthService.refreshToken(refreshToken);
      TokenStorage.setAccessToken(response.accessToken);
      return true;
    } catch (error) {
      console.error('Ошибка обновления токенов:', error);
      this.logout();
      return false;
    }
  }

  static scheduleTokenRefresh(): void {
    // Очищаем предыдущий таймер
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
    }

    // Планируем обновление через 25 минут (токены обычно живут 30 минут)
    this.refreshTimeout = setTimeout(() => {
      this.refreshTokens();
    }, 25 * 60 * 1000);
  }

  static logout(): void {
    // Очищаем таймер
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }

    // Очищаем токены
    TokenStorage.clearTokens();

    // Обновляем состояние в store
    const store = useAuthStore.getState();
    store.logout();
  }

  static handleAuthError(error: any): void {
    if (error?.status === 401 || error?.message?.includes('401')) {
      console.log('Обнаружена ошибка авторизации, выполняем выход');
      this.logout();
    }
  }

  static initialize(): void {
    // Проверяем наличие токенов при инициализации
    if (TokenStorage.hasTokens()) {
      this.scheduleTokenRefresh();
    }
  }
} 