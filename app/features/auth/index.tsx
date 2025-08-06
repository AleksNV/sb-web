import { useAuthStore } from '../../shared/lib/stores';
import { Button } from '../../shared/ui/components';

export function AuthStatus() {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="p-4 bg-gray-50 rounded-md" data-testid="auth-status">
        <p>Not authenticated</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-50 rounded-md" data-testid="auth-status">
      <h3 className="text-lg font-semibold mb-2">Welcome, {user?.name}!</h3>
      <Button size="sm" color="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
