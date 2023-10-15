import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    /*     <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav> */
    <nav
      class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-start sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
          <NavLink
            to="/"
            className="font-medium text-white sm:py-6"
            aria-current="page"
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className="font-medium text-white/[.8] hover:text-white sm:py-6"
            >
              Contacts
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
