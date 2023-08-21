import Header from '@/components/Header';
import CustomerForm from '../../../components/CustomerForm';
import PageHeader from '@/components/PageHeader';

const EditCustomerPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="container mx-auto px-4 ">
        <Header />
        <h2 className="text-xl font-semibold mt-4">Editar usuário</h2>
        <div>
          <p className="text-gray-400">Informe os campos a seguir para Editar usuário:</p>
        </div>
        <CustomerForm />
      </div>
    </div>
  );
};

export default EditCustomerPage;