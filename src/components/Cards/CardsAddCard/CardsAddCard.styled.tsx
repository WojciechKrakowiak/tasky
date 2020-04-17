import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #666;
  width: ${(props) => props.theme.card.width};
  height: ${(props) => props.theme.cardItem.height};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 32px;
  text-align: center;
  color: #666;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

const Styled = {
  Wrapper,
};

export default Styled;
