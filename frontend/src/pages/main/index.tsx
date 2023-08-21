import {
  Container,
  Title,
  Description,
  ContentArea,
  Content,
  ClientsNumber
} from "./styles";
import { useAddContext } from "../../contexts/UserContext";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { Header } from "../../components/header";
import { Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Cards } from "../../components/cards";

export function Main() {
  const [redirect, setRedirect ] = useState(false);
  const { lengthUser, setTypeRender } = useAddContext();
  const redirectRightScreen = (screen: number) => {
    setTypeRender(screen);
    setRedirect(true);
  }

  if(redirect) {
    return (
        <div>
            <Navigate to="/cadastrate" />
        </div>
    )
  } 
  else {
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
        <Description>
            <div>
            <h3>Listagem de usuários</h3>
            <p>Escolha um cliente para visualizar os detalhes</p>
            </div>
            <button onClick={() => redirectRightScreen(0)}>Novo cliente</button>
        </Description>
        <Cards />
      </Content>
        <ClientsNumber>

        Exibindo {lengthUser} clientes
        </ClientsNumber>
      </ContentArea>
      <ToastContainer />
    </Container>
  );
}
}