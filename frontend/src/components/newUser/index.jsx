import React, { useState } from "react";
import { Typography } from '@mui/material';
import ButtonsRegister from "../buttonsRegister";
import { useNavigate, useParams  } from "react-router-dom";
import { postUser, putUser } from "../../services/user.service";
import { formatCPF, formatTelefone } from "../../utils/formatInputs";
import CustomizedSnackbar from "../snackBar";
import "./style.css";


const NewUser = () => {
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telefoneError, setTelefoneError] = useState("");
    const [cpfError, setCpfError] = useState("");
    const [statusError, setStatusError] = useState("");
    const [changes, setChanges] = useState({});
    const [open, setOpen] = useState(false);

    const selectedStatus = "";
    const { id } = useParams();

    const navigate = useNavigate();
    const toHome = () => {
        navigate('/');
    }

    const handleInputName = (value) => {
        if (value !== "") {
            setChanges((prevChanges) => ({ ...prevChanges, name: value }));
        }
    }
    const handleInputEmail = (value) => {
        if (value !== "") {
            setChanges((prevChanges) => ({ ...prevChanges, email: value }));
        }
    }

    const handleInputTelefone = (value) => {
        setTelefone(value);
        if (value !== "") {
            setChanges((prevChanges) => ({ ...prevChanges, telefone: value }));
        }
    }

    const handleInputCpf = (value) => {
        setCpf(value);
        if (value !== "") {
            setChanges((prevChanges) => ({ ...prevChanges, cpf: value }));
        }
    }

    const handleInputStatus = (value) => {
        if (value !== "") {
            setChanges((prevChanges) => ({ ...prevChanges, status: value }));
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const values = {
            name: formData.get("name"),
            email: formData.get("email"),
            cpf: formData.get("cpf"),
            telefone: formData.get("telefone"),
            status: formData.get("status"),
        };

        let isValid = true;

    if (changes.name && changes.name.length < 3 && values.name.length) {
        setNameError("Nome deve ter pelo menos 3 caracteres.");
        isValid = false;
    } else {
        setNameError("");
    }

    if (changes.email &&
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(changes.email) &&
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        setEmailError("Email inválido.");
        isValid = false;
    } else {
        setEmailError("");
    }

    if (changes.telefone &&
        !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(changes.telefone) &&
        !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(values.telefone)) {
        setTelefoneError("Telefone inválido. Use o formato (00) 0000-0000 ou (00) 00000-0000.");
        isValid = false;
    } else {
        setTelefoneError("");
    }

    if (changes.cpf &&
        !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(changes.cpf) &&
        !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(values.cpf)) {
        setCpfError("CPF inválido. Use o formato 999.999.999-99.");
        isValid = false;
    } else {
        setCpfError("");
    }

    if (!values.status || changes.status === "") {
        setStatusError("Selecione um status.");
        isValid = false;
    } else {
        setStatusError("");
    }

    if (id && isValid) {
        await putUser(id, changes);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            toHome();
        }, 2000);
    } else if (!id && isValid) {
        await postUser(values);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            toHome();
        }, 2000);
    }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="description-container">
                    <Typography
                        variant="h6"
                        fontFamily="Roboto, sans-serif"
                        style={{ color: "#747a82" }}
                    >
                        Novo usuário
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily="Roboto, sans-serif"
                        style={{ color: "#b0b0b0" }}
                    >
                        Informe os campos a seguir para criar novo usuário:
                    </Typography>
                </div>
                <div className="inputs-container">
                    <input
                        className="inputs-options"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        onChange={(e) => handleInputName(e.target.value)}
                    />
                    <input
                        className="inputs-options"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={(e) => handleInputEmail(e.target.value)}
                    />
                    <input
                        className="inputs-options"
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="CPF"
                        value={formatCPF(cpf)}
                        onChange={(e) => handleInputCpf(e.target.value)}
                    />
                    <input
                        className="inputs-options"
                        type="text"
                        name="telefone"
                        id="telefone"
                        placeholder="Telefone"
                        value={formatTelefone(telefone)}
                        onChange={(e) => handleInputTelefone(e.target.value)}
                    />
                    <select
                        className="inputs-options"
                        defaultValue={selectedStatus}
                        onChange={(e) => handleInputStatus(e.target.value)}
                        name="status"
                    >
                        <option value="" disabled>Status</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                        <option value="Aguardando ativação">Aguardando ativação</option>
                        <option value="Desativado">Desativado</option>
                    </select>
                    {nameError && <div className="error">{nameError}</div>}
                    {emailError && <div className="error">{emailError}</div>}
                    {cpfError && <div className="error">{cpfError}</div>}
                    {telefoneError && <div className="error">{telefoneError}</div>}
                    {statusError && <div className="error">{statusError}</div>}
                </div>
                <ButtonsRegister />
            </form>
            <CustomizedSnackbar open={open} setOpen={setOpen} />
        </div>
    )
}

export default NewUser;
