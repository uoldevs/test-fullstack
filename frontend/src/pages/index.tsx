import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { AppDispatch, RootState } from '@/store';
import {
  fetchCustomerById,
  fetchCustomers,
  successCreate,
  successUpdate,
} from '@/store/customers';
import Layout from '@/components/layout';
import PageHeader from '@/components/PageHeader';
import {
  StyledPageDescription,
  StyledPageHeaderButton,
  StyledPageTitle,
} from '@/components/PageHeader/styles';
import CustomerCard from '@/components/CustomerCard';
import {
  CardsContainer,
  CustomersCountWrapper,
  NoCustomersContainer,
  StyledCardNameContainer,
  StyledCardPhoneContainer,
  StyledCardStatusContainer,
  StyledCardText,
  StyledCardTextBold,
  StyledStatusDot,
} from '@/components/CustomerCard/styles';
import { useRouter } from 'next/router';
import CustomButton from '@/components/CustomButton';
import { StatusColors } from '@/enum';
import { mobileMask } from '@/utils/mobileMask';
import { taxIdMask } from '@/utils/taxIdMask';

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { data: customers } = useSelector(
    (state: RootState) => state.customers
  );

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(successCreate(false));
    dispatch(successUpdate(false));
  }, [dispatch]);

  const handleEdit = (id: number) => {
    dispatch(fetchCustomerById(id));
    router.push(`/customer/edit/${id}`);
  };

  return (
    <Layout>
      <Head>
        <title>Clientes | Customers Manager</title>
      </Head>

      <PageHeader>
        <div>
          <StyledPageTitle>Listagem de usuários</StyledPageTitle>
          <StyledPageDescription>
            Escolha um cliente para visualizar os detalhes
          </StyledPageDescription>
        </div>

        <StyledPageHeaderButton href="/customer/create">
          Novo cliente
        </StyledPageHeaderButton>
      </PageHeader>

      <CardsContainer>
        {customers.length === 0 ? (
          <NoCustomersContainer>
            <h3>Não há clientes cadastrados</h3>
          </NoCustomersContainer>
        ) : (
          customers.map(({ id, name, email, taxId, phone, status }) => (
            <CustomerCard key={id}>
              <StyledCardNameContainer>
                <StyledCardTextBold>{name}</StyledCardTextBold>
                <StyledCardText>{email}</StyledCardText>
              </StyledCardNameContainer>

              <StyledCardPhoneContainer>
                <StyledCardTextBold>{taxIdMask(taxId)}</StyledCardTextBold>
                <StyledCardText>{mobileMask(phone)}</StyledCardText>
              </StyledCardPhoneContainer>

              <StyledCardStatusContainer>
                <StyledStatusDot bgColor={StatusColors[status!]} />
                {status}
              </StyledCardStatusContainer>

              <CustomButton
                text="Editar"
                onClick={() => handleEdit(id)}
                outlined
              />
            </CustomerCard>
          ))
        )}
      </CardsContainer>

      <CustomersCountWrapper>
        Exibindo {customers.length}{' '}
        {customers.length === 1 ? 'Cliente' : 'Clientes'}
      </CustomersCountWrapper>
    </Layout>
  );
};

export default Home;
