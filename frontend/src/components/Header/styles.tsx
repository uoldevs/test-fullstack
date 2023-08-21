import styled from 'styled-components';
import Link from 'next/link';

export const MainHeader = styled.header`
  min-height: 5rem;
  width: 100vw;
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bebebe;
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
