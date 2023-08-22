import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import PageHeader from '@/components/PageHeader';
import {
  StyledPageTitle,
  StyledPageDescription,
} from '@/components/PageHeader/styles';
import Layout from '@/components/layout';
import FormContainer from '@/components/FormContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const EditCustomer: NextPage = () => {
  const { customerToUpdate } = useSelector(
    (state: RootState) => state.customers
  );

  return (
    <Layout>
      <Head>
        <title>Editar Cliente | Customers Manager</title>
      </Head>

      <PageHeader>
        <div>
          <StyledPageTitle>Atualizar informações do cliente</StyledPageTitle>
          <StyledPageDescription>
            Modifique as informações do cliente no formulário abaixo
          </StyledPageDescription>
        </div>
      </PageHeader>

      <FormContainer customerToUpdate={customerToUpdate} />
    </Layout>
  );
};

export default EditCustomer;
