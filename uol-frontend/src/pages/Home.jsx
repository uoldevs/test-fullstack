import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import ClientCard from '../components/mini/ClientCard';
import Header from '../components/Header';


function Home() {

    const SectionSpecInfo = {
        title: 'Listagem de usuários',
        subtitle: 'Escolha um cliente para visualizar os detalhes',
        button: true,
    }

    const userList = [
        {
            id: 1,
            name: 'John Doe1',
            email: 'john_doe@test.com',
            cpf: '12345678900',
            phone: '1199988745',
            status: 'inactive',
        },
        {
            id: 2,
            name: 'John Doe2',
            email: 'johndoe2@test.com',
            cpf: '12345678900',
            phone: '1199988745',
            status: 'active',
        },
        {
            id: 3,
            name: 'John Doe3',
            email: 'fefdsfs@gmail.com',
            cpf: '12345678900',
            phone: '1199988745',
            status: 'waiting',
        },
        {
            id: 4,
            name: 'John Doe4',
            email: 'fefd53453sfs@gmail.com',
            cpf: '12345678900',
            phone: '1199988745',
            status: 'disabled',
        }
    ]

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
                                <ClientCard key={user.id} id={user.id} name={user.name} email={user.email} cpf={user.cpf} phone={user.phone} status={user.status} />
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
