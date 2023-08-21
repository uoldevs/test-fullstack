import React from 'react';
import { User } from 'lucide-react';

import { StyledPanelHeader, PanelHeaderTitle } from './styles';

const PanelHeader: React.FC = () => {
  return (
    <StyledPanelHeader>
      <User width={36} height={36} color="#2b2b2b" />
      <PanelHeaderTitle>Painel de clientes</PanelHeaderTitle>
    </StyledPanelHeader>
  );
};

export default PanelHeader;
