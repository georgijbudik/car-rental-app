import CardItem from 'components/CardItem/CardItem';
import { StyledItem, StyledList } from 'components/CardList/CardList.styled';
import NotFound from 'components/NotFound/NotFound';
import Title from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux_/favorites/favoritesSelectors';
const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
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
        <NotFound message={'Ooops, you have no favorites'} />
      )}
    </>
  );
};

export default Favorites;
