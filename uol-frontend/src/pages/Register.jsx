import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import Header from '../components/Header';
import Input from '../components/mini/Input';
import { useEffect, useState } from 'react';
import DropdownSelect from '../components/mini/DropDownSelector';
import Button from '../components/mini/Button';
import { useNavigate } from 'react-router-dom';
import MiniModal from '../components/mini/MiniModal';
import { AlertCircle } from 'lucide-react';

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

    // useEffect(() => {
    //     const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    //     if (clientInfo.cpf.length === 11 && !cpfPattern.test(clientInfo.cpf)) {
    //         setInputAlert({ ...inputAlert, cpf: false });
    //     }
    //   }, [clientInfo.cpf]);


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
                    <Button name="Criar" size="big" background="orange" active={() => alert('tchama')} />
                    <Button name="Voltar" size="big" background="white" active={() => navigate("/")} />
                </div>

            </section>
        </>
    )
}

export default Register
