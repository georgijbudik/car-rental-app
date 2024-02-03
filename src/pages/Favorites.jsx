import CardItem from 'components/CardItem/CardItem';
import CardList from 'components/CardList/CardList';
import { StyledItem, StyledList } from 'components/CardList/CardList.styled';
import Title from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux_/favorites/favoritesSelectors';

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
        <div>No favorites</div>
      )}
    </div>
  );
};

export default Favorites;
