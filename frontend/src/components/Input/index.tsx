import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import styles from './styles.module.scss';
import { ICustomInput } from '../../interfaces';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, ICustomInput> = (
  { placeholder, Icon, error, ...rest },
  ref
) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocus(true);
  }

  function handleInputBlur(event: ChangeEvent<HTMLInputElement>) {
    setIsFocus(false);
    setIsFilled(!!event.target.value);
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.content} ${isFilled && styles.filled} ${
          isFocus && styles.focus
        } ${error && styles.errorInput}`}
      >
        {Icon && <Icon size={24} />}
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={(event) => handleInputBlur(event)}
        />
      </div>

      {error && (
        <div className={styles.error}>
          <FiAlertCircle />
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export const CustomInput = forwardRef(InputBase);
