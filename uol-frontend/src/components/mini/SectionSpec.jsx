import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function SectionSpec(props) {

    const navigate = useNavigate();

    return (
        <div className="w-full h-32 flex align-start justify-between gap-5 items-center">
            <div className="gap-2 flex flex-col">
                <h1 className="text-xl text-gray-500 font-semibold">{props.title}</h1>
                <p className="text-gray-500 font-light text-xl">{props.subtitle}</p>
            </div>
            {props.button && <div className='mr-6'><Button name="Novo Cliente" size="small" background="orange" active={() => navigate("/register")} /></div>}
        </div>
    )
}

SectionSpec.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired
};



export default SectionSpec
