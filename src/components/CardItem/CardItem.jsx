import { useState } from 'react';
import {
  CardButton,
  CardWrapper,
  DescriptionWrap,
  CardImg,
  CardTitle,
  CardDescriptionSpan,
  CardDescriptionList,
  CardDesctiptionText,
  CardPrice,
  CardHertIconWrap,
  CardTitleWrap,
} from './CardItem.styled';
import Modal from 'components/Modal/Modal';
import CardHeartIcon from 'components/CardHeartIcon/CardHeartIcon';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux_/catalog/catalogSelectors';

const CardItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const address = item.address.split(',');
  const functionality = item.functionalities[0]
    .split(',')
    .splice(0, 10)
    .join('')
    .slice(0, 11);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardWrapper>
        <CardImg src={item.img} alt={`Picture of ${item.make}`} />
        <CardHertIconWrap>
          <CardHeartIcon item={item} />
        </CardHertIconWrap>
        <DescriptionWrap>
          <CardTitleWrap>
            <CardTitle>
              {item.make}{' '}
              <CardDescriptionSpan>{item.model}, </CardDescriptionSpan>
              {item.year}
            </CardTitle>
            <CardPrice>{item.rentalPrice}</CardPrice>
          </CardTitleWrap>
          <CardDescriptionList>
            <li>
              <CardDesctiptionText>{address[1]}</CardDesctiptionText>
            </li>
            <li>
              <CardDesctiptionText>{address[2]}</CardDesctiptionText>
            </li>
            <li>
              <CardDesctiptionText>{item.rentalCompany}</CardDesctiptionText>
            </li>

            <li>
              <CardDesctiptionText>{item.type}</CardDesctiptionText>
            </li>
            <li>
              <CardDesctiptionText>{item.model}</CardDesctiptionText>
            </li>
            <li>
              <CardDesctiptionText>{item.mileage}</CardDesctiptionText>
            </li>
            <li>
              <CardDesctiptionText>{functionality}</CardDesctiptionText>
            </li>
          </CardDescriptionList>
        </DescriptionWrap>
      </CardWrapper>
      <CardButton type="button" onClick={onOpenModal}>
        Learn more
      </CardButton>
      {isModalOpen && (
        <Modal onClose={onCloseModal} item={item} isModalOpen={isModalOpen} />
      )}
    </>
  );
};

export default CardItem;
