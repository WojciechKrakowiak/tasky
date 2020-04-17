import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ccc;
  padding: 8px;
  border-radius: 4px;
`;

const AddItem = styled.button`
  background-color: transparent;
  color: #888;
  border: 1px solid #999;
  display: block;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  padding: 2px 0;
  text-align: center;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const Textarea = styled.textarea`
  margin: -8px 0 0 -8px;
  background-color: #fff;
  height: 36px;
  width: ${(props) => props.theme.cardItem.width};
  line-height: 20px;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 2px;
  border: none;
  font-size: 16px;
`;

const CloseButton = styled.button`
  font-size: 32px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  line-height: 1;
  height: 36px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  color: #777;

  &:hover {
    color: #444;
  }
`;

const Styled = {
  Wrapper,
  AddItem,
  Textarea,
  CloseButton,
};

export default Styled;
