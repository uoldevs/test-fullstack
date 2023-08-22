import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return (

        <header className="bg-stone-700 w-screen flex justify-center">
            <img onClick={() => navigate('/')} src="headerlogo.svg" className="h-20 w-20 cursor-pointer" alt="Logo UOL" />
        </header>
    )
}

export default Header
