import styled from 'styled-components';

export const StyledButton = styled.button<{ outlined?: true }>`
  background-color: ${({ outlined }) => (outlined ? 'transparent' : '#e48900')};
  padding: 0.5rem 2rem;
  border: ${({ outlined }) => (outlined ? '1px solid #e48900' : 'none')};
  color: ${({ outlined }) => (outlined ? '#e48900' : '#fff')};
  transition: 150ms;
  border-radius: 0.3rem;
  font-size: 22px;
  max-height: 2.8125rem;

  &:hover {
    background-color: ${({ outlined }) => (outlined ? '#e48900' : '#ca7900')};
    color: #fff;
    cursor: pointer;
  }
`;
