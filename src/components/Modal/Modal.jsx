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
  StyledCloseIcon,
  StyledModalCloseButton,
} from './Modal.styled';
import { CardDescriptionSpan } from 'components/CardItem/CardItem.styled';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  width: '541px',
  maxHeight: '90vh',
  overflowY: 'auto',
  outline: 'none',
};

const BasicModal = ({ item, isModalOpen, onClose }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
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
      </Box>
    </Modal>
  );
};

export default BasicModal;
