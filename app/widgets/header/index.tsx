import { AuthStatus } from '../../features/auth';
import { Navigation } from '../../features/navigation';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-600" data-testid="logo">
              Slot Buddy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <Navigation />
            <AuthStatus />
          </div>
        </div>
      </div>
    </header>
  );
}
