import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import ClientCard from '../components/mini/ClientCard';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Loading from 'react-loading-components';


function Home() {

    const SectionSpecInfo = {
        title: 'Listagem de usuários',
        subtitle: 'Escolha um cliente para visualizar os detalhes',
        button: true,
    }

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Listagem de usuários';
        fetchUsers();
    }, []);


const fetchUsers = () => {
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
        .then((data) => {
            setUserList(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
}


    return (
        <>
            <Header />
            <section className="mt-20 w-7/12 h-auto flex justify-center self-center flex-col pb-52">
                <PanelHeader />
                <SectionSpec title={SectionSpecInfo.title} subtitle={SectionSpecInfo.subtitle} button={SectionSpecInfo.button} />
                {loading ?
                    <div className="self-center mt-64">
                        <Loading type='spinning_circles' width={100} height={100} fill='#000000' />
                    </div> :

                    <div className='gap-6 flex flex-col'>
                        {
                            userList.map((user) => {
                                return (
                                    <ClientCard key={user.id} id={user.id} name={user.name} email={user.email} cpf={user.cpf} phone={user.phone} status={user.status.name} apiCall={fetchUsers} loading={setLoading}/>
                                )
                            }
                            )
                        }
                    </div>
                }

            </section>
        </>
    )
}

export default Home
