import styled from '@emotion/styled';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';

export const StyledFavorite = styled(Favorite)({
  fill: 'var(--button-color)',
});

export const StyledFavoriteBorder = styled(FavoriteBorder)({
  fill: '#FFFFFFCC',
});

export const StyledCheckbox = styled(Checkbox)({
  width: '18px',
  height: '18px',
});
