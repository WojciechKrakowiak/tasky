import styled from 'styled-components';

const ItemsWrapper = styled.div`
  min-height: 1px;
`;

interface WrapperProps {
  isDragging: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  max-height: 100%;
  height: auto;
  flex-shrink: 0;
  background-color: ${({ theme }: any) => theme.card.background};

  border-radius: 3px;
  width: ${({ theme }: any) => theme.card.width};
  padding: 8px;
  margin-right: 24px;
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 1);
  transition: transform 0.1s;
  ${(props) => props.isDragging && 'transform: rotate(5deg)'}
`;

const Styled = {
  Wrapper,
  ItemsWrapper,
};

export default Styled;
