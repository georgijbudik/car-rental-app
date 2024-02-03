import CardItem from 'components/CardItem/CardItem';
import { StyledItem, StyledList } from 'components/CardList/CardList.styled';
import Title from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux_/favorites/favoritesSelectors';
import notFoundImg from '../images/3d-flame-man-in-suit-shrugging-shoulders.png';
import { NoFavoriteText, NoFavoritesWrap } from './Favorites.styled';
const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Title>Your favorites</Title>
      </div>
      {favorites.length > 0 ? (
        <StyledList>
          {favorites.map(item => (
            <StyledItem key={item.id}>
              <CardItem item={item} />
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <NoFavoritesWrap>
          <img src={notFoundImg} alt="Lol" />
          <NoFavoriteText>Ooops, you have no favorites</NoFavoriteText>
        </NoFavoritesWrap>
      )}
    </div>
  );
};

export default Favorites;
