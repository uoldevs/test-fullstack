import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Input from '../components/mini/Input';
import DropdownSelect from '../components/mini/DropDownSelector';
import Button from '../components/mini/Button';
import MiniModal from '../components/mini/MiniModal';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from 'react-loading-components';


function Edit() {

    const navigate = useNavigate();


    const alertIcon = <AlertCircle size={20} color="#d93a3a" />
    const [clientInfo, setClientInfo] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        status: '',
    })

    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);

    const modalAlertPhrases = {
        name: 'Insira um nome válido!',
        email: 'Insira um e-mail válido!',
        cpf: 'Insira um CPF válido!',
        phone: 'Insira um Telefone válido!',
        status: 'Selecione uma das opções!',
    }

    const [inputAlert, setInputAlert] = useState({
        name: false,
        email: false,
        cpf: false,
        phone: false,
        status: false,
    })

    const SectionSpecInfo = {
        title: 'Editar usuário',
        subtitle: 'Informe os campos a seguir para editar o usuário',
        button: false,
    }

    const handleStatus = (status) => {
        if (status === 'Aguardando ativação') {
            return 'Aguardando'
        }

        return status
    }

    const registerUser = async () => {
        setButtonLoading(true);
        try {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: window.location.pathname.split('/')[2],
                    name: clientInfo.name,
                    email: clientInfo.email,
                    cpf: clientInfo.cpf.replace(/\D/g, ''),
                    phone: clientInfo.phone.replace(/\D/g, ''),
                    status: handleStatus(clientInfo.status),
                }),
            });

            const data = await response.json();


            if (response.status === 200) {
                toast.success('Informações alteradas', {
                    position: 'top-right',
                    autoClose: 7000,
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
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
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
            console.log(error, "este é o erro");
        }
        setButtonLoading(false);
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



    useEffect(() => {
        const getUserById = (id) => {
            console.log(import.meta.env.VITE_API_URL, id)
            fetch(`${import.meta.env.VITE_API_URL}/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    let user = {
                        name: data.name,
                        email: data.email,
                        cpf: data.cpf,
                        phone: data.phone,
                        status: data.status.name,
                    };
                    setClientInfo(user);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        document.title = 'Editar usuário';
        const id = window.location.pathname.split('/')[2];
        getUserById(id);
    }, []);

    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">

                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />
                <ToastContainer
                    position="top-right"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

                {
                    loading ?
                        <div className="self-center mt-64">
                            <Loading type='spinning_circles' width={100} height={100} fill='#000000' />
                        </div> :

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
                                <Button name="Salvar" size="big" background="orange" active={(e) => handleClick(e)} loading={buttonLoading} />
                                <Button name="Voltar" size="big" background="white" active={() => navigate("/")} />
                            </div>

                        </form>
                }
            </section>
        </>
    )
}

export default Edit