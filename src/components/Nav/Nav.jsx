import { NavList, StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <NavList>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="catalog">Catalog</StyledLink>
      </li>
      <li>
        <StyledLink to="favorites">Favorites</StyledLink>
      </li>
    </NavList>
  );
};

export default Nav;
