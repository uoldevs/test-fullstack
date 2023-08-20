import PanelHeader from '../components/mini/PanelHeader';
import SectionSpec from '../components/mini/SectionSpec';
import Header from '../components/Header';

function Edit() {

    const SectionSpecInfo = {
        title: 'Novo usuário',
        subtitle: 'Informe os campos a seguir para criar novo usuário',
        button: false,
    }


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