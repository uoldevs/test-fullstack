import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header';
import PanelHeader from '@/components/PanelHeader';
import PageHeader from '@/components/PageHeader';
import {
  StyledPageTitle,
  StyledPageDescription,
  StyledPageHeaderButton,
} from '@/components/PageHeader/styles';
import configureStore from 'redux-mock-store';
import { storeMock } from '../mocks/store';
import { Provider } from 'react-redux';
import CustomerCard from '@/components/CustomerCard';
import {
  StyledCardNameContainer,
  StyledCardTextBold,
  StyledCardText,
  StyledCardPhoneContainer,
  StyledCardStatusContainer,
  StyledStatusDot,
  CustomersCountWrapper,
} from '@/components/CustomerCard/styles';
import CustomButton from '@/components/CustomButton';
import Layout from '@/components/layout';

describe('Layout', () => {
  describe('Main Header', () => {
    it('should render the UOL logo correctly.', () => {
      render(<Header />);

      const logo = screen.getByAltText('UOL Logo');

      expect(logo).toBeVisible();
    });
  });

  describe('Panel Header', () => {
    it('should render PanelHeader elements correctly.', () => {
      const { container } = render(<PanelHeader />);

      const userIcon = container.querySelector('.lucide-user');
      const panelTitle = screen.getByText('Painel de clientes');

      expect(panelTitle).toBeVisible();
      expect(userIcon).toBeVisible();
    });
  });

  describe('Page Header', () => {
    it('should render PageHeader elements correctly.', () => {
      render(
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
      );

      const pageHeaderTitle = screen.getByText('Listagem de usuários');
      const pageHeaderDescription = screen.getByText(
        'Escolha um cliente para visualizar os detalhes'
      );
      const pageHeaderButton = screen.getByRole('link');

      expect(pageHeaderTitle).toBeVisible();
      expect(pageHeaderDescription).toBeVisible();
      expect(pageHeaderButton).toBeVisible();
    });
  });
});

const mockStore = configureStore([]);

describe('Customer Card', () => {
  const store = mockStore({
    customers: {
      data: storeMock,
    },
  });

  beforeEach(() =>
    render(
      <Provider store={store}>
        <CustomerCard>
          <StyledCardNameContainer>
            <StyledCardTextBold>{storeMock[0].name}</StyledCardTextBold>
            <StyledCardText>{storeMock[0].email}</StyledCardText>
          </StyledCardNameContainer>

          <StyledCardPhoneContainer>
            <StyledCardTextBold>{storeMock[0].taxId}</StyledCardTextBold>
            <StyledCardText>{storeMock[0].phone}</StyledCardText>
          </StyledCardPhoneContainer>

          <StyledCardStatusContainer>
            <StyledStatusDot bgColor="#00cc00" />
            {storeMock[0].status}
          </StyledCardStatusContainer>

          <CustomButton
            text="Editar"
            onClick={() => console.log('Click')}
            outlined
          />
        </CustomerCard>
      </Provider>
    )
  );

  it('should render the card information correctly.', () => {
    const name = screen.getByText(storeMock[0].name);
    const email = screen.getByText(storeMock[0].email);
    const taxId = screen.getByText(storeMock[0].taxId);
    const phone = screen.getByText(storeMock[0].phone);
    const status = screen.getByText(storeMock[0].status);

    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(taxId).toBeVisible();
    expect(phone).toBeVisible();
    expect(status).toBeVisible();
  });

  it('should render the edit button correctly.', () => {
    const editButton = screen.getByRole('button', { name: 'Editar' });

    expect(editButton).toBeVisible();
  });
});

describe('Customers count', () => {
  beforeEach(() =>
    render(
      <Layout>
        <CustomersCountWrapper>
          Exibindo {storeMock.length}{' '}
          {storeMock.length === 1 ? 'Cliente' : 'Clientes'}
        </CustomersCountWrapper>
      </Layout>
    )
  );

  it('should render the customers count correctly', () => {
    const customersCountText = screen.getByText('Exibindo 1 Cliente');

    expect(customersCountText).toBeVisible();
  });
});
