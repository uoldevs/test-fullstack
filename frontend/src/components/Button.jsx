import './Button.css';

function Button(props) {
  const {
    children, type = 'button', onClick, disabled, isOrange, isLarge
  } = props;
  console.log(disabled);
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