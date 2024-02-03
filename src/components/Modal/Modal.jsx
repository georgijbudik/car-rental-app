import { useEffect } from 'react';
import {
  ConditionItem,
  ConditionList,
  ConditionSpan,
  Description,
  Info,
  Item,
  List,
  ModalButton,
  ModalContentWrap,
  ModalImg,
  ModalTitle,
  ModalWrap,
  StyledCloseIcon,
  StyledModalCloseButton,
  StyledOverlay,
} from './Modal.styled';
import { CardDescriptionSpan } from 'components/CardItem/CardItem.styled';

const Modal = ({ item, onClose, isModalOpen }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <StyledOverlay onClick={onClose}>
      <ModalWrap onClick={e => e.stopPropagation()}>
        <StyledModalCloseButton type="button" onClick={onClose}>
          <StyledCloseIcon />
        </StyledModalCloseButton>
        <ModalContentWrap>
          <ModalImg src={item.img} alt={`Picture of ${item.make}`} />
          <ModalTitle>
            {item.make}{' '}
            <CardDescriptionSpan>{item.model}, </CardDescriptionSpan>
            {item.year}
          </ModalTitle>
          <List>
            <Item>{item.address.split(',')[1]}</Item>
            <Item>{item.address.split(',')[2]}</Item>
            <Item>Id: </Item>
            <Item>Year: {item.year}</Item>
            <Item>Type: {item.type}</Item>
          </List>
          <List>
            <Item>Fuel Consumption: {item.fuelConsumption}</Item>
            <Item>Engine Size: {item.engineSize}</Item>
          </List>
          <Description>{item.description}</Description>
          <Info>Accessories and functionalities:</Info>
          <List>
            {item.accessories.map(i => (
              <Item key={i}>{i}</Item>
            ))}
          </List>
          <List>
            {item.functionalities.map(i => (
              <Item key={i}>{i}</Item>
            ))}
          </List>
          <Info>Rental Conditions:</Info>
          <ConditionList>
            <ConditionItem>
              Minimum age:{' '}
              <ConditionSpan>
                {new Date().getFullYear() - item.year}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>
              {item.rentalConditions.split('\n')[1]}
            </ConditionItem>
            <ConditionItem>
              {item.rentalConditions.split('\n')[2]}
            </ConditionItem>
            <ConditionItem>
              Mileage:{' '}
              <ConditionSpan>
                {item.mileage.toLocaleString('en-US')}
              </ConditionSpan>
            </ConditionItem>
            <ConditionItem>
              Price: <ConditionSpan>{item.rentalPrice}</ConditionSpan>
            </ConditionItem>
          </ConditionList>
          <ModalButton
            type="button"
            onClick={() => {
              window.location.href = 'tel:+380730000000';
            }}
          >
            Rental car
          </ModalButton>
        </ModalContentWrap>
      </ModalWrap>
    </StyledOverlay>
  );
};

export default Modal;
