import notFoundImg from '../../images/man-in-suit.png';
import { NoFavoriteText, NoFavoritesWrap } from './NotFound.styled';

const NotFound = ({ message }) => {
  return (
    <NoFavoritesWrap>
      <img src={notFoundImg} alt="Not found" />
      <NoFavoriteText>{message}</NoFavoriteText>
    </NoFavoritesWrap>
  );
};

export default NotFound;
