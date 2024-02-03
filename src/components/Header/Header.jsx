import Nav from 'components/Nav/Nav';
import { Logo, LogoTitle, LogoWrap, StyledHeader } from './Header.styled';
import myGif from '../../images/icon-logo-gif.gif';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrap>
        <Link to={'/'}>
          <Logo src={myGif} alt="Car" />
        </Link>

        <LogoTitle>Car Rental</LogoTitle>
      </LogoWrap>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
