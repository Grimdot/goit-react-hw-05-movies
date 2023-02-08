import { Outlet } from 'react-router-dom';

import { HeaderNav, HeaderNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderNav>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/movies">Movies</HeaderNavLink>
      </HeaderNav>

      <Outlet />
    </>
  );
};

export default Header;
