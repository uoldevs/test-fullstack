import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  padding: 0.8rem;
  color: #8f8f8f;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid #b1b1b1;
  font-size: 18px;

  &::placeholder {
    color: #8f8f8f99;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.8rem;
  outline: none;
  border: 1px solid #b1b1b1;
  border-radius: 0.3rem;
  background-color: transparent;
  cursor: pointer;
  color: #8f8f8f;
  font-size: 18px;
`;
