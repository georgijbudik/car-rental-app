import CardItem from 'components/CardItem/CardItem';
import { StyledItem, StyledList } from './CardList.styled';

const CardList = ({ cars }) => {
  return (
    <>
      <StyledList>
        {cars.map(car => (
          <StyledItem key={car.id}>
            <CardItem item={car} />
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

export default CardList;
