interface User {
  id: string;
  email: string;
  name: string;
}

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-4 bg-white rounded-md border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-600">{user.email}</div>
        </div>
      </div>
    </div>
  );
}
