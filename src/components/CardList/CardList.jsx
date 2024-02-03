import CardItem from 'components/CardItem/CardItem';
import { useSelector } from 'react-redux';
import {
  selectCatalog,
  selectIsLoading,
} from 'redux_/catalog/catalogSelectors';
import { StyledItem, StyledList } from './CardList.styled';
import Loader from 'components/Loader/Loader';

const CardList = ({}) => {

  const catalog = useSelector(selectCatalog);

  return (
    <>
      {catalog.length > 0 && (
        <StyledList>
          {catalog.map(item => (
            <StyledItem key={item.id}>
              <CardItem item={item} />
            </StyledItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default CardList;
