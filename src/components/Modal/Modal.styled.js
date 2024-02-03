import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

export const StyledModalCloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--main-text-color);

  transition: var(--transition);

  &:hover,
  &:focus {
    stroke: var(--accent-color);
    transform: rotate(90deg);
  }
`;

export const ModalContentWrap = styled.div`
  padding: 40px;
`;

export const ModalImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;

export const ModalTitle = styled.h2`
  color: var(--main-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  margin-top: 14px;
  margin-bottom: 8px;
`;

export const StyledCloseIcon = styled(CloseIcon)({
  width: '24px',
  height: '24px',
});

export const Item = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`;

export const Info = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: 'Montserrat';
  font-size: 12px;
  letter-spacing: -0.24px;
  margin-top: 8px;
  width: 425px;
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;

export const ConditionSpan = styled.span`
  color: var(--button-color);
  font-weight: 600;
`;

export const ModalButton = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--button-color);
  margin-top: 24px;
  color: var(--white-color);
  font-family: inherit;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;
