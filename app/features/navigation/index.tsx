import { Link, useLocation } from 'react-router';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/banking', label: 'Banking' },
  { path: '/client-list', label: 'Client List' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 p-4" data-testid="navigation">
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}>
            <span
              className={`${
                location.pathname === item.path
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-600 font-medium hover:text-blue-500'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
