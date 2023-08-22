import React from 'react';
import { StyledCustomerCard } from './styles';

type Props = {
  children: React.ReactNode;
};

const CustomerCard: React.FC<Props> = ({ children }) => {
  return <StyledCustomerCard>{children}</StyledCustomerCard>;
};

export default CustomerCard;
