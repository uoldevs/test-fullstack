import React from 'react';
import { StyledButton } from './styles';

type Props = {
  text: string;
  outlined?: true;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({ text, outlined, onClick }) => {
  return (
    <>
      {outlined ? (
        <StyledButton outlined onClick={onClick}>
          {text}
        </StyledButton>
      ) : (
        <StyledButton type="submit">{text}</StyledButton>
      )}
    </>
  );
};

export default CustomButton;
