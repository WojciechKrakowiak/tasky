import styled from 'styled-components';
import { darken } from 'polished';

interface IProps {
  primary?: boolean;
}

const Button = styled.button<IProps>`
  font-size: 16px;
  line-height: 1.2;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.1s;
  background-color: #bbb;

  ${(props) =>
    props.primary &&
    `background: linear-gradient(${darken(0.2, props.theme.primaryColor)}, ${darken(0.2, props.theme.secondaryColor)});
    color: #fff;
    &:hover {
      background: linear-gradient(${props.theme.primaryColor}, ${props.theme.secondaryColor});
    }
    `}
`;

const Styled = {
  Button,
};

export default Styled;
