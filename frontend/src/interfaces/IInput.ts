import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface IInput {
  name: string;
  labelText?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  className?: string;
  value: string;
}

export default IInput;
