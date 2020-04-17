import React from 'react';
import styled from 'styled-components';
import LogoImg from './logo.svg';

type Props = { children: React.ReactNode };

const Main = styled.div`
  height: calc(100% - 64px);
`;

const Logo = styled.img`
  height: 25px;
`;

const TopBar = styled.div`
  height: 48px;
  padding: 12px 24px;
`;

const Layout = ({ children }: Props) => (
  <>
    <TopBar>
      <Logo src={LogoImg} />
    </TopBar>
    <Main>{children}</Main>
  </>
);

export default Layout;
