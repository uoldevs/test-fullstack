import React, { ReactNode } from 'react';

import Header from '../Header';
import PanelHeader from '../PanelHeader';

import { LayoutContainer } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <PanelHeader />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
