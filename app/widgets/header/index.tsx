import { AuthStatus } from '../../features/auth';
import { Navigation } from '../../features/navigation';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200" data-testid="header">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-xl font-bold text-blue-600" data-testid="logo">
            Slot Buddy
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <Navigation />
          <AuthStatus />
        </div>
      </div>
    </header>
  );
}
