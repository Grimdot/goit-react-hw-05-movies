import { HeaderNav, HeaderNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderNav>
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/movies">Movies</HeaderNavLink>
    </HeaderNav>
  );
};

export default Header;
