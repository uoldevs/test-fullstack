import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import Header from '../components/Header';
import Input from '../components/mini/Input';
import { useState } from 'react';
import DropdownSelect from '../components/mini/DropDownSelector';
import Button from '../components/mini/Button';
import { useNavigate } from 'react-router-dom';
import MiniModal from '../components/mini/MiniModal';
import { AlertCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Register() {

    const navigate = useNavigate();

    const alertIcon = <AlertCircle size={20} color="#d93a3a" />
    const [isLoading, setIsLoading] = useState(false);

    const SectionSpecInfo = {
        title: 'Novo usuário',
        subtitle: 'Informe os campos a seguir para criar novo usuário',
        button: false,
    }

    const modalAlertPhrases = {
        name: 'Insira um nome válido!',
        email: 'Insira um e-mail válido!',
        cpf: 'Insira um CPF válido!',
        phone: 'Insira um Telefone válido!',
        status: 'Selecione uma das opções!',
    }

    const [clientInfo, setClientInfo] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        status: '',
    })

    const [inputAlert, setInputAlert] = useState({
        name: false,
        email: false,
        cpf: false,
        phone: false,
        status: false,
    })

    const handleStatus = (status) => {
        if (status === 'Aguardando ativação') {
            return 'Aguardando'
        }

        return status
    }

    useEffect(() => {
        document.title = 'Novo usuário'
    }
    )



    const registerUser = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: clientInfo.name,
              email: clientInfo.email,
              cpf: clientInfo.cpf.replace(/\D/g, ''),
              phone: clientInfo.phone.replace(/\D/g, ''),
              status: handleStatus(clientInfo.status),
            }),
          });
      
          const data = await response.json();
      
          if (response.status === 201) {
            toast.success('Cliente cadastrado', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          } else {
            toast.error(data.message, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }

          if (response.status === 201) {
            setClientInfo({
                name: '',
                email: '',
                cpf: '',
                phone: '',
                status: '',
              });
          }

          if (data.message.includes('CPF')) {
            setInputAlert({ ...inputAlert, cpf: true });
            setClientInfo({ ...clientInfo, cpf: '' });
          } else if (data.message.includes('Email')) {
            setInputAlert({ ...inputAlert, email: true });
            setClientInfo({ ...clientInfo, email: '' });
          }
      

        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };

    const CheckClientInfo = () => {

        let inputStatus = {
            name: false,
            email: false,
            cpf: false,
            phone: false,
            status: false,
        }
        if (clientInfo.name === '' || clientInfo.name.length < 3) {
            inputStatus.name = true;
        }

        if (clientInfo.email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientInfo.email) === false) {
            inputStatus.email = true;
        }

        if (clientInfo.cpf === '' || /^\d{11}$/.test(clientInfo.cpf.replace(/\D/g, '')) === false) {
            inputStatus.cpf = true;
        }

        if (clientInfo.phone === '' || /^\d{10,11}$/.test(clientInfo.phone.replace(/\D/g, '')) === false) {
            inputStatus.phone = true;
        }

        if (clientInfo.status === '') {
            inputStatus.status = true;
        }

        setInputAlert(inputStatus);
        return inputStatus;
    }

    const handleClick = (e) => {
        e.preventDefault()

        const permitRegister = CheckClientInfo()

        if (Object.values(permitRegister).includes(true)) {
            console.log('There are invalid inputs');
          } else {
            console.log('All inputs are valid');
            registerUser();
          }
    }


    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">
                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <form className='flex flex-col gap-4'>
                    {
                        Object.keys(clientInfo).map((key, i) => {
                            if (key !== 'status') {
                                return (
                                    <div key={i} className='flex flex-row gap-4'>
                                        <Input key={i} mode={key} props={{ clientInfo, setClientInfo, setInputAlert, inputAlert }}
                                        />
                                        {inputAlert[key] && <MiniModal icon={alertIcon} content={modalAlertPhrases[key]} />}
                                    </div>

                                )
                            }
                            return (
                                <div key={i} className='flex flex-row gap-4'>
                                    <DropdownSelect key={i} props={{ clientInfo, setClientInfo, setInputAlert, inputAlert }} />
                                    {inputAlert[key] && <MiniModal icon={alertIcon} content={modalAlertPhrases[key]} />}
                                </div>)
                        })
                    }

                    <div className='flex flex-row gap-4 justify-start mt-10'>
                        <Button name="Criar" size="big" background="orange" active={(e) => handleClick(e)} loading={isLoading}/>
                        <Button name="Voltar" size="big" background="white" active={() => navigate("/")} />
                    </div>

                </form>


            </section>
        </>
    )
}

export default Register
