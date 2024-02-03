import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux_/favorites/favoritesSelectors';
import {
  setAddFavorite,
  setRemoveFavorite,
} from 'redux_/favorites/favoritesSlice';
import {
  StyledCheckbox,
  StyledFavorite,
  StyledFavoriteBorder,
} from './CardHeartIcon.styled';

const CardHeartIcon = ({ item }) => {
  const dispatch = useDispatch();

  const cars = useSelector(selectFavorites);

  const isFavorite = cars.some(({ id }) => id === item.id);

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      dispatch(setAddFavorite(item));
    } else {
      dispatch(setRemoveFavorite(item));
    }
  };
  return (
    <StyledCheckbox
      icon={<StyledFavoriteBorder />}
      checkedIcon={<StyledFavorite />}
      checked={isFavorite}
      onChange={handleToggleFavorite}
    />
  );
};

export default CardHeartIcon;
