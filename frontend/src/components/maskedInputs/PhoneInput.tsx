import { ChangeEvent } from "react";
import InputMask from "react-input-mask";
import { MaskedInputProps } from "../../types";

const PhoneInput: React.FC<MaskedInputProps> = ({ value, onChange, name }) => {
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
      mask="(99) 99685-2236"
      value={value}
      onChange={handleChange}
      placeholder='Telefone'
      name={name}
    />
  );
};

export default PhoneInput;