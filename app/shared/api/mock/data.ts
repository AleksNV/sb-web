export interface MockUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface MockClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  balance: number;
  lastTransaction: string;
}

export interface MockTransaction {
  id: string;
  clientId: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  date: string;
  description: string;
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    email: 'admin@slot-buddy.com',
    name: 'Администратор',
    role: 'admin',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: '2',
    email: 'user@slot-buddy.com',
    name: 'Пользователь',
    role: 'user',
    avatar: 'https://via.placeholder.com/40'
  }
];

export const mockClients: MockClient[] = [
  {
    id: '1',
    name: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    status: 'active',
    balance: 15000,
    lastTransaction: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Мария Сидорова',
    email: 'maria@example.com',
    phone: '+7 (999) 234-56-78',
    status: 'active',
    balance: 8500,
    lastTransaction: '2024-01-14T15:45:00Z'
  },
  {
    id: '3',
    name: 'Алексей Козлов',
    email: 'alex@example.com',
    phone: '+7 (999) 345-67-89',
    status: 'inactive',
    balance: 0,
    lastTransaction: '2024-01-10T09:15:00Z'
  }
];

export const mockTransactions: MockTransaction[] = [
  {
    id: '1',
    clientId: '1',
    type: 'deposit',
    amount: 5000,
    date: '2024-01-15T10:30:00Z',
    description: 'Пополнение счета'
  },
  {
    id: '2',
    clientId: '1',
    type: 'withdrawal',
    amount: 2000,
    date: '2024-01-14T14:20:00Z',
    description: 'Вывод средств'
  },
  {
    id: '3',
    clientId: '2',
    type: 'deposit',
    amount: 3000,
    date: '2024-01-14T15:45:00Z',
    description: 'Пополнение счета'
  }
]; 