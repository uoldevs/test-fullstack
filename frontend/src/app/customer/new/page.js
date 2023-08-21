import Header from '@/components/Header';
import CustomerForm from '../../../components/CustomerForm';

const NewCustomerPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <h2 className="text-xl font-semibold mt-4">Novo usuário</h2>
      <div>
        <p className="text-gray-400">Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <CustomerForm />
    </div>
  );
};

export default NewCustomerPage;