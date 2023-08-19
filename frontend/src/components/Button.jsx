import './Button.css';

function Button(props) {
  const {
    children, type = 'button', onClick, disabled = false, isOrange, isLarge
  } = props;
  const buttonClass = `button${isOrange ? '-orange' : ''} ${isLarge ? 'large-button' : ''}`;
  return (
    <button
      onClick={ onClick }
      className={ buttonClass }
      type={ type}
      disabled={ disabled }
    >
      {children}
    </button>
  )
}

export default Button;