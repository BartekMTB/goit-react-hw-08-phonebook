import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth(); //user widzi tylko wtedy kiedy jest zalogowany

  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
