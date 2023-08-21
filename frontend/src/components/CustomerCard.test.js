import { render } from '@testing-library/react';
import CustomerCard from './CustomerCard';

const mockCustomer = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  cpf: '123.456.789-00',
  phoneNumber: '(12) 3456-7890',
  status: 'Ativo',
};

describe('CustomerCard Component', () => {
  it('renders without crashing', () => {
    render(<CustomerCard customer={mockCustomer} />);
  });

  it('displays customer name and email', () => {
    const { getByText } = render(<CustomerCard customer={mockCustomer} />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('john@example.com')).toBeInTheDocument();
  });

  it('displays customer cpf and phone number', () => {
    const { getByText } = render(<CustomerCard customer={mockCustomer} />);
    expect(getByText('123.456.789-00')).toBeInTheDocument();
    expect(getByText('(12) 3456-7890')).toBeInTheDocument();
  });

  it('displays correct status icon and text', () => {
    const { getByAltText, getByText } = render(<CustomerCard customer={mockCustomer} />);
    const iconElement = getByAltText('status icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', './greenIcon.svg');
    expect(getByText('Ativo')).toBeInTheDocument();
  });

  it('displays "Editar" link with correct href', () => {
    const { getByText } = render(<CustomerCard customer={mockCustomer} />);
    const linkElement = getByText('Editar');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/customer/${mockCustomer.id}`);
  });

  it('displays correct status icon and text for inactive status', () => {
    const inactiveCustomer = { ...mockCustomer, status: 'Inativo' };

    const { getByAltText, getByText } = render(<CustomerCard customer={inactiveCustomer} />);
    const inactiveIcon = getByAltText('status icon');
    expect(inactiveIcon).toBeInTheDocument();
    expect(inactiveIcon).toHaveAttribute('src', './redIcon.svg');
    expect(getByText('Inativo')).toBeInTheDocument();
  });

  it('displays correct status icon and text for waiting activaction status', () => {
    const waitingActivationCustomer = { ...mockCustomer, status: 'Aguardando ativação' };

    const { getByAltText, getByText: getByTextWaiting } = render(
      <CustomerCard customer={waitingActivationCustomer} />
    );
    const waitingActivationIcon = getByAltText('status icon');
    expect(waitingActivationIcon).toBeInTheDocument();
    expect(waitingActivationIcon).toHaveAttribute('src', './yellowIcon.svg');
    expect(getByTextWaiting('Aguardando ativação')).toBeInTheDocument();

  });

  it('displays correct status icon and text for desactivated status', () => {
    const otherStatusCustomer = { ...mockCustomer, status: 'Desativado' };

    const { getByAltText, getByText: getByTextOther } = render(
      <CustomerCard customer={otherStatusCustomer} />
    );
    const otherStatusIcon = getByAltText('status icon');
    expect(otherStatusIcon).toBeInTheDocument();
    expect(otherStatusIcon).toHaveAttribute('src', './greyIcon.svg');
    expect(getByTextOther('Desativado')).toBeInTheDocument();
  });
});
