import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface IItemProps {
  readonly isDragging?: boolean | undefined;
  readonly theme: any;
}

const Wrapper = styled.div`
  padding-bottom: 8px;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000;
`;

const Item = styled.div<IItemProps>`
  background-color: ${({ theme }: any) => theme.cardItem.background};
  border: ${({ theme }: any) => theme.cardItem.border};
  font-weight: ${({ theme }: any) => theme.fontRegular};
  height: ${(props) => props.theme.cardItem.height};
  width: ${({ theme }: any) => theme.cardItem.width};
  line-height: 20px;
  display: block;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 2px;
  transition: transform 0.1s;
  display: flex;
  ${(props) =>
    props.isDragging &&
    `
      transform: rotate(5deg);
      background-color: ${props.theme.cardItem.hoverBackground};
    `}

  &:hover {
    background-color: ${({ theme }: any) => theme.cardItem.hoverBackground};
  }
`;

const Icon = styled.div`
  font-size: 18px;
  color: #aaa;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const Styled = {
  Item,
  Link,
  Wrapper,
  Title,
  Icon,
};

export default Styled;
