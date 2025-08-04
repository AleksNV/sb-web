import { Link, useLocation } from 'react-router';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/banking', label: 'Banking' },
  { path: '/client-list', label: 'Client List' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6" data-testid="navigation">
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
          className="text-center sm:text-left"
        >
          <span
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? 'text-blue-500 bg-blue-50'
                : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
