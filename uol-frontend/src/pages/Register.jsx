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
import axios from 'axios';

function Register() {

    const navigate = useNavigate();

    const alertIcon = <AlertCircle size={20} color="#d93a3a" />

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


    const registerUser = () => {
        console.log(clientInfo)
        axios.post('https://uol-api.onrender.com/', {
            name: clientInfo.name,
            email: clientInfo.email,
            cpf: clientInfo.cpf.replace(/\D/g, ''),
            phone: clientInfo.phone.replace(/\D/g, ''),
            status: handleStatus(clientInfo.status),
        })
            .then((response) => {
                console.log(response.data)
                setClientInfo({
                    name: '',
                    email: '',
                    cpf: '',
                    phone: '',
                    status: '',
                })
            })
    }

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

        if (clientInfo.cpf === '' || /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(clientInfo.cpf) === false) {
            inputStatus.cpf = true;
        }

        if (clientInfo.phone === '' || /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(clientInfo.phone) === false) {
            inputStatus.phone = true;
        }

        if (clientInfo.status === '') {
            inputStatus.status = true;
        }

        setInputAlert(inputStatus);
    }

    const handleClick = () => {
        CheckClientInfo()
        if (Object.values(inputAlert).includes(true)) {
            return;
        }
        registerUser()
    }


    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">
                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />
                <div className='flex flex-col gap-4'>
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

                </div>
                <div className='flex flex-row gap-4 justify-start mt-14'>
                    <Button name="Criar" size="big" background="orange" active={() => handleClick()} />
                    <Button name="Voltar" size="big" background="white" active={() => navigate("/")} />
                </div>

            </section>
        </>
    )
}

export default Register
