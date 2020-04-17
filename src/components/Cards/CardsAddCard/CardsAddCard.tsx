import React, { FunctionComponent } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Styled from './CardsAddCard.styled';
import { IProps } from './types';

const CardsAddCard: FunctionComponent<IProps> = ({ addCard }) => (
  <Styled.Wrapper onClick={(e) => addCard()}>
    <IoIosAdd />
  </Styled.Wrapper>
);

export default CardsAddCard;
