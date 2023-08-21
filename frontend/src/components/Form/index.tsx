import React, { ReactNode } from 'react';
import { StyledForm } from './styles';

type Props = {
  children: ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
