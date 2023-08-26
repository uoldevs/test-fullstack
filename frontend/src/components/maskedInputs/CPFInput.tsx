import { ChangeEvent } from "react";
import InputMask from "react-input-mask";
import { MaskedInputProps } from "../../types";

const CPFInput: React.FC<MaskedInputProps> = ({ value, onChange, name }) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: event.target.value.replace(/[^0-9]/g, '')
      }
    });
  }

  return (
    <InputMask
      mask="999.999.999-99"
      value={value}
      onChange={handleChange}
      placeholder='CPF'
      name={name}
    />
  );
};

export default CPFInput;

// Reference:
// https://codesandbox.io/s/brava-react-masked-input-8xe2p?file=/src/MaskedInput.js:103-126