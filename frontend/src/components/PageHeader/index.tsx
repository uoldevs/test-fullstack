import React, { ReactNode } from 'react';
import { StyledPageHeader } from './styles';

type Props = {
  children: ReactNode;
};

const PageHeader: React.FC<Props> = ({ children }) => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

export default PageHeader;
