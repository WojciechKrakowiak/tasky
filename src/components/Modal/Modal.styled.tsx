import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(16, 16, 16, 0.7);
  backdrop-filter: blur(2px);
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  width: 600px;
  height: 400px;
  border-radius: 8px;
  background-color: #eee;
  transform: translateY(-50%);
  border-top: 4px solid #bbb;
`;

const CloseButton = styled.button`
  background: transparent;
  color: #444;
  border: none;
  font-size: 32px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Header = styled.div`
  padding-left: 80px;
  min-height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #bbb;
  color: #666;
  width: 64px;
  height: 64px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 8px 0;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #bbb;
    position: absolute;
    left: 64px;
    top: 0;
  }

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #eee;
    border-radius: 8px 0 0 0;
    position: absolute;
    left: 64px;
    top: 0;
  }
`;

const Title = styled.h2`
  margin: 0 0 0px 0;
  font-size: 20px;
`;

const Subtitle = styled.div``;

const Content = styled.div`
  padding: 24px;
`;

const EditorWrapper = styled.div`
  padding: 8px 12px 12px 12px;
  margin: -8px -12px 0 -12px;
  background-color: #ddd;
  border-radius: 4px;
`;

const Editor = styled.div`
  background-color: #fff;
  padding: 8px 12px;
  margin: -8px -12px 12px -12px;
  border-radius: 4px;
`;

const Styled = {
  Overlay,
  Wrapper,
  Header,
  HeaderIcon,
  Title,
  Subtitle,
  Content,
  EditorWrapper,
  Editor,
  CloseButton,
};

export default Styled;
