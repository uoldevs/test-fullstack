import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import ClientCard from '../components/mini/ClientCard';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Home() {

    const SectionSpecInfo = {
        title: 'Listagem de usuários',
        subtitle: 'Escolha um cliente para visualizar os detalhes',
        button: true,
    }

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        document.title = 'Listagem de usuários'
        axios.get('https://uol-api.onrender.com/')
            .then((response) => {
                setUserList(response.data)
            })
    }
        , [])






    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">
                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />

                <div className='gap-6 flex flex-col'>
                    {
                        userList.map((user) => {
                            return (
                                <ClientCard key={user.id} id={user.id} name={user.name} email={user.email} cpf={user.cpf} phone={user.phone} status={user.status.name} />
                            )
                        }
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Home
