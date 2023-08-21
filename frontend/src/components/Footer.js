const Footer = ({ numberOfCustomers }) => {
  return (
    <footer className="mt-4 text-center" data-testid="footer-message" >
      Exibindo {numberOfCustomers} clientes
    </footer>
  );
};

export default Footer;
