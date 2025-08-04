import { AuthStatus } from '../../features/auth';
import { Navigation } from '../../features/navigation';
import { ThemeToggle } from '../../shared/ui/components/theme-toggle';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400" data-testid="logo">
              Slot Buddy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <Navigation />
            <ThemeToggle />
            <AuthStatus />
          </div>
        </div>
      </div>
    </header>
  );
}
