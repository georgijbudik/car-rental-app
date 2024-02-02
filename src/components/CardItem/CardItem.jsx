import {
  CardButton,
  CardWrapper,
  DescriptionWrap,
  CardImg,
  CardTitle,
  CardDescriptionSpan,
} from './CardItem.styled';

const CardItem = ({ item }) => {
  return (
    <CardWrapper>
      <CardImg src={item.img} alt={`Picture of ${item.make}`} />
      <DescriptionWrap>
        <CardTitle>
          {item.make} <CardDescriptionSpan>{item.model}</CardDescriptionSpan>,{' '}
          {item.year}
        </CardTitle>
        <span></span>
        <p></p>
      </DescriptionWrap>
      <CardButton type="button">Learn more</CardButton>
    </CardWrapper>
  );
};

export default CardItem;
