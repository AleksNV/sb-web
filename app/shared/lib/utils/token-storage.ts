const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export class TokenStorage {
  static getAccessToken(): string | null {
    try {
      return localStorage.getItem(ACCESS_TOKEN_KEY);
    } catch {
      return null;
    }
  }

  static getRefreshToken(): string | null {
    try {
      return localStorage.getItem(REFRESH_TOKEN_KEY);
    } catch {
      return null;
    }
  }

  static setTokens(accessToken: string, refreshToken: string): void {
    try {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    } catch (error) {
      console.error('Ошибка сохранения токенов:', error);
    }
  }

  static setAccessToken(accessToken: string): void {
    try {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    } catch (error) {
      console.error('Ошибка сохранения access token:', error);
    }
  }

  static clearTokens(): void {
    try {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch (error) {
      console.error('Ошибка очистки токенов:', error);
    }
  }

  static hasTokens(): boolean {
    return !!(this.getAccessToken() && this.getRefreshToken());
  }
} 