import { Button } from '~/shared/ui/components';
import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Страница не найдена
        </h2>
        <p className="text-gray-500 max-w-md">
          Запрашиваемая страница не существует или была перемещена
        </p>
        <Link to="/">
          <Button size="lg" color="primary">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
}; 