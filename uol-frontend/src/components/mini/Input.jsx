/* eslint-disable react/prop-types */
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

const Input = ({ mode, props }) => {

    const { clientInfo, setClientInfo, setInputAlert, inputAlert } = props;

    let placeholder = '';
    let mask = '';
    let onChange = null;
    let onBlur = null;
    let value = '';

    switch (mode) {
        case 'name':
            placeholder = 'Nome';
            mask = '';
            value = clientInfo.name;
            onChange = (event) => {
                const inputValue = event.target.value;
                const onlyLetters = inputValue.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
                event.target.value = onlyLetters;
                setClientInfo({ ...clientInfo, name: event.target.value });
            };
            onBlur = () => {
                if (clientInfo.name.length < 3 || clientInfo.name === '') {
                    setInputAlert({ ...inputAlert, name: true });
                } else {
                    setInputAlert({ ...inputAlert, name: false });
                }
            }
            break;
        case 'email':
            placeholder = 'E-mail';
            mask = '';
            value = clientInfo.email
            onChange = (event) => {
                setClientInfo({ ...clientInfo, email: event.target.value });
            }
             onBlur = () => {
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientInfo.email);
                
                if (!isValidEmail || clientInfo.email === '') {
                  setInputAlert({ ...inputAlert, email: true });
                } else {
                  setInputAlert({ ...inputAlert, email: false });
                }
              };
            break;
        case 'cpf':
            placeholder = 'CPF';
            mask = '999.999.999-99';
            value = clientInfo.cpf
            onChange = (event) => {
                setClientInfo({ ...clientInfo, cpf: event.target.value });
            }
            onBlur = () => {
                const isValidCPF = /^\d{11}$/;
                if (!isValidCPF.test(clientInfo.cpf.replace(/\D/g, '')) || clientInfo.cpf === '' || clientInfo.cpf === '___.___.___-__') {
                    setInputAlert({ ...inputAlert, cpf: true });
                } else {
                    setInputAlert({ ...inputAlert, cpf: false });
                }
            }
            break;
        case 'phone':
            placeholder = 'Telefone';
            mask = '(99) 99999-9999';
            value = clientInfo.phone
            onChange = (event) => {
                setClientInfo({ ...clientInfo, phone: event.target.value });
            };
            onBlur = () => {
                const isValidPhoneNumber = /^\d{10,11}$/;
                if (!isValidPhoneNumber.test(clientInfo.phone.replace(/\D/g, '')) || clientInfo.phone === '' || clientInfo.phone === '(__) _____-____') {
                    return setInputAlert({ ...inputAlert, phone: true });
                } else {
                    return setInputAlert({ ...inputAlert, phone: false });
                }
            }
            break;
        default:
            placeholder = 'Input';
            mask = '';
    }

    return (
        
            <InputMask
                value={value}
                mask={mask}
                placeholder={placeholder}
                className="px-4 w-72 border rounded-md border-[#9a9a9a]'} text-[#000000] text-lg px-5 rounded-md w-[250px] h-[50px] flex items-center relative focus:outline-none focus:ring ring-stone-400"
                onChange={onChange}
                onBlur={onBlur}
                onFocus={() => setInputAlert({ ...inputAlert, [mode]: false })}
            />
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['Texto', 'CPF', 'Telefone', "Name"]).isRequired,
    props: PropTypes.object.isRequired,
};



export default Input;