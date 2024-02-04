import Nav from 'components/Nav/Nav';
import {
  Logo,
  LogoTitle,
  LogoWrap,
  StyledHeader,
  StyledHomeLink,
} from './Header.styled';
import myGif from '../../images/icon-logo-gif.gif';

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrap>
        <StyledHomeLink to={'/'}>
          <Logo src={myGif} alt="Car" />

          <LogoTitle>Car Rental</LogoTitle>
        </StyledHomeLink>
      </LogoWrap>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
