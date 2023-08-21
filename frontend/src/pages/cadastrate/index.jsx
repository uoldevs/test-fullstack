import {
  Container,
  Title,
  Forms,
  ContentArea,
  Content,
  NewUsersDescription,
} from "./styles";
import InputMask from 'react-input-mask';
import { useAddContext } from "../../contexts/UserContext";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateCPF, validatePhoneNumber, validateEmail } from "../../utils/validations";
import { createUser, updateUser } from "../../utils/requestUser";

export function Cadastrate() {
  const [redirect, setRedirect] = useState(false);
  const { typeRender, userInformations } = useAddContext();
  const [updatedInformations, setUpdatedInformations] = useState({
    id: userInformations.id ? userInformations.id : 0,
    username: userInformations.username ? userInformations.username : "",
    email: userInformations.email ? userInformations.email : "",
    cpf: userInformations.cpf ? userInformations.cpf : "",
    phone: userInformations.phone ? userInformations.phone : "",
    status: userInformations.status ? userInformations.status : "",
  });

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(updatedInformations);
    if (!validateEmail(updatedInformations.email)) {
      toast.error("Email inválido!");
      return;
    }
    if (updatedInformations.status === "Status") {
      toast.error("Deve informar um status válido!");
      return;
    }
    if (!validateCPF(updatedInformations.cpf)) {
      toast.error("CPF inválido!");
      return;
    }
    if (!validatePhoneNumber(updatedInformations.phone)) {
      toast.error("Telefone inválido!");
      return;
    }
    const response = await updateUser(updatedInformations);
    if (response.status === 200) {
      toast.success("Usuário atualizado com sucesso!");
      setRedirect(true);
    }
    if (response.status === 400) {
      toast.error("O usuário já existe");
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    if (!validateEmail(updatedInformations.email)) {
      toast.error("Email inválido!");
      return;
    }
    if (updatedInformations.status === "Status") {
      toast.error("Deve informar um status válido!");
      return;
    }
    if (!validateCPF(updatedInformations.cpf)) {
      toast.error("CPF inválido!");
      return;
    }
    if (!validatePhoneNumber(updatedInformations.phone)) {
      toast.error("Telefone inválido!");
      return;
    }
    const response = await createUser(updatedInformations);
    if (response.status === 200) {
      toast.success("Usuário atualizado com sucesso!");
      setRedirect(true);
    }
    if (response.status === 400) {
      toast.error("O usuário já existe");
    }
  };

  if (redirect) {
    return (
      <div>
        <Navigate to="/" />
      </div>
    );
  }
  if (typeRender === 1) {
    return (
      <Container>
        <Header />
        <ContentArea>
          <Content>
            <Title>
              <FiUser className="user-icon" />
              <h1>Painel de clientes</h1>
            </Title>
            <div className="line"></div>
            <NewUsersDescription>
              <h4>Editar usuário</h4>
              <p>Informe os campos a seguir para editar usuário</p>
            </NewUsersDescription>
            <Forms onSubmit={(e) => handleSubmitEdit(e)}>
              <input
                type="text"
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    username: e.target.value,
                  });
                }}
                defaultValue={userInformations.username}
              ></input>
              <input
                type="text"
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    email: e.target.value,
                  });
                }}
                defaultValue={userInformations.email}
              ></input>
              <InputMask
                mask='999.999.999-99'
                type="text"
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    cpf: e.target.value,
                  });
                }}
                defaultValue={userInformations.cpf}
              ></InputMask>
              <InputMask
                mask='(99)-99999-9999'
                type="text"
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    phone: e.target.value,
                  });
                }}
                defaultValue={userInformations.phone}
              ></InputMask>
              <select
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    status: e.target.value,
                  });
                }}
                defaultValue={userInformations.status}
              >
                <option value="0">Status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Aguardando ativação">Aguardando ativação</option>
                <option value="Desativado">Desativado</option>
              </select>
              <div>
                <button className="create">Editar</button>
                <button className="back" onClick={() => setRedirect(true)}>
                  Voltar
                </button>
              </div>
            </Forms>
          </Content>
        </ContentArea>
        <ToastContainer />
      </Container>
    );
  } else {
    return (
      <Container>
        <Header />
        <ContentArea>
          <Content>
            <Title>
              <FiUser className="user-icon" />
              <h1>Painel de clientes</h1>
            </Title>
            <div className="line"></div>
            <NewUsersDescription>
              <h4>Novo usuário</h4>
              <p>Informe os campos a seguir para criar novo usuário</p>
            </NewUsersDescription>
            <Forms onSubmit={(e) => handleSubmitCreate(e)}>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    username: e.target.value,
                  });
                }}
                placeholder="Nome"
              ></input>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    email: e.target.value,
                  });
                }}
                placeholder="E-mail"
              ></input>
              <InputMask
                mask='999.999.999-99'
                type="text"
                required
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    cpf: e.target.value,
                  });
                }}
                placeholder="CPF"
              ></InputMask>
              <InputMask
                mask='(99)-99999-9999'
                type="text"
                required
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    phone: e.target.value,
                  });
                }}
                placeholder="Telefone"
              ></InputMask>
              <select
                required
                onChange={(e) => {
                  setUpdatedInformations({
                    ...updatedInformations,
                    status: e.target.value,
                  });
                }}
              >
                <option value="0">Status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Aguardando ativação">Aguardando ativação</option>
                <option value="Desativado">Desativado</option>
              </select>
              <div>
                <button className="create" type="submit">
                  Criar
                </button>
                <button className="back" onClick={() => setRedirect(true)}>
                  Voltar
                </button>
              </div>
            </Forms>
            <ToastContainer />
          </Content>
        </ContentArea>
      </Container>
    );
  }
}
