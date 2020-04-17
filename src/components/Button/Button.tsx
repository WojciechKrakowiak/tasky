import React, { FunctionComponent } from 'react';
import Styled from './Button.styled';
import { IProps } from './types';

const Button: FunctionComponent<IProps> = ({ children, primary, onClick }) => (
  <Styled.Button primary={primary} onClick={onClick}>
    {children}
  </Styled.Button>
);

export default Button;
