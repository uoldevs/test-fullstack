import Link from 'next/link';
import styled from 'styled-components';

export const StyledPageHeader = styled.section`
  width: 100%;
  max-width: 64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 1.5rem 1.8rem 0;
`;

export const StyledPageTitle = styled.p`
  color: #585858;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const StyledPageDescription = styled.p`
  color: #8f8f8f;
  font-size: 1.125rem;
  font-weight: 500;
`;

export const StyledPageHeaderButton = styled(Link)<{ disable?: true }>`
  background-color: ${({ disable }) => (disable ? '#9c9c9c' : '#e48900')};
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 0.3rem;
  color: #fff;
  transition: 150ms;

  &:hover {
    background-color: ${({ disable }) => (disable ? '#bb0000' : '#ca7900')};
  }
`;
