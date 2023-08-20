import PropTypes from 'prop-types';

function Button(props) {


    const size = {
        small: "h-10 w-32",
        big: "h-12 w-36"
    }

    const background = {
        orange: "bg-orange-300 text-white hover:bg-white text-white border-orange-300 border-2 hover:text-gray-600",
        white: "text-orange-300 hover:bg-orange-300 border-orange-300 border-2 hover:text-gray-100"
    }

    return (
        <button
        onClick={props.active}
        className={`font-semibold shadow-2xl px-2 rounded-md transition duration-150 ease-in-out ${size[props.size]} ${background[props.background]}`}
        
        >

            {props.name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
};

export default Button
