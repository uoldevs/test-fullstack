import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer component', () => {
  it('displays the correct message with the number of customers', () => {
    const numberOfCustomers = 10;
    const { getByTestId } = render(
      <Footer numberOfCustomers={numberOfCustomers} />
    );
    const footerElement = getByTestId('footer-message');
    expect(footerElement).toHaveTextContent(
      `Exibindo ${numberOfCustomers} clientes`
    );
  });

  it('displays the correct message when the number of customers is zero', () => {
    const numberOfCustomers = 0;
    const { getByTestId } = render(
      <Footer numberOfCustomers={numberOfCustomers} />
    );
    const footerElement = getByTestId('footer-message');
    expect(footerElement).toHaveTextContent(
      `Exibindo ${numberOfCustomers} clientes`
    );
  });
});
