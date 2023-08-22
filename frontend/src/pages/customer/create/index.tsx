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

const CreateCustomer: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cadastrar Cliente | Customers Manager</title>
      </Head>

      <PageHeader>
        <div>
          <StyledPageTitle>Novo usuário</StyledPageTitle>
          <StyledPageDescription>
            Informe os campos a seguir para criar um novo usuário
          </StyledPageDescription>
        </div>
      </PageHeader>

      <FormContainer />
    </Layout>
  );
};

export default CreateCustomer;
