import { Welcome } from '../../welcome/welcome';

export function meta() {
  return [{ title: 'Slot Buddy - Home' }, { name: 'description', content: 'Welcome to Slot Buddy!' }];
}

export default function HomePage() {
  return <Welcome />;
}
