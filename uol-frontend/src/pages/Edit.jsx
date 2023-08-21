import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import Header from '../components/Header';
import { useEffect, useState } from 'react';



function Edit() {

    const [clientInfo, setClientInfo] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        status: '',
    })

    const SectionSpecInfo = {
        title: 'Novo usuário',
        subtitle: 'Informe os campos a seguir para criar novo usuário',
        button: false,
    }

    useEffect(() => {
        document.title = 'Editar usuário'
        const id = window.location.pathname.split('/')[2]
        const userData = getUserById(id)
        console.log(userData)

    }
    )

    const getUserById = async (id) => {
        try {
            const response = await fetch(`https://uol-api.onrender.com/${id}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };





    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">
                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />
            </section>
        </>
    )
}

export default Edit