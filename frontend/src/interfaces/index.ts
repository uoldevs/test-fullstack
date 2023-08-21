import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  Icon?: IconType;
}

export interface IDataForm {
  name: string;
  email: string;
  cpf: string;
  phonenumber: string;
  status: string;
}
