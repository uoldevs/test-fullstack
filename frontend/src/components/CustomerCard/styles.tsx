import styled from 'styled-components';

export const StyledCustomerCard = styled.div`
  width: 99%;
  min-height: 4.375rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const StyledCardNameContainer = styled.div`
  min-width: 30%;
`;

export const StyledCardPhoneContainer = styled.div`
  min-width: 15%;
`;

export const StyledCardStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8f8f8f;
  min-width: 21%;
`;

export const StyledCardText = styled.p`
  color: #8f8f8f;
`;

export const StyledCardTextBold = styled.p`
  color: #585858;
`;

export const StyledStatusDot = styled.div<{ bgColor: string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
`;

export const CardsContainer = styled.section`
  width: 100%;
  max-width: 64rem;
  height: calc(100vh - 26rem);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CustomersCountWrapper = styled.section`
  width: 64rem;
  padding: 1.5rem 0;
  color: #8f8f8f;
`;

export const NoCustomersContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  text-align: center;
  padding: 4rem;
  color: #585858;
`;
