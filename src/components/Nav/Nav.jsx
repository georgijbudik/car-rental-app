import { StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="catalog">Catalog</StyledLink>
      <StyledLink to="favorites">Favorites</StyledLink>
    </>
  );
};

export default Nav;
