import styled from 'styled-components';

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 8px 0;
  padding: 4px 8px;
  font-size: 16px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 0 8px;
  margin-bottom: 8px;
  height: 26px;
  font-weight: ${({ theme }) => theme.fontBold};
`;

const Styled = {
  Title,
  Input,
};

export default Styled;
