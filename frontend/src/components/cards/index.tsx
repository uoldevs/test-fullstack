import { useAddContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

import { Container, Content, EachCard, CardInformation } from "./styles";
import { getUsers } from "../../utils/requestUser";
import { GrStatusGoodSmall } from "react-icons/gr";

interface User {
  id: number,
  username: string,
  cpf: string,
  phone: string,
  status: string,
  email: string,
}

export function Cards() {
  const { setLengthUser } = useAddContext();
  const [redirect, setRedirect ] = useState(false);
  const { setTypeRender, setUserInformations } = useAddContext();
  const [users, setUsers] = useState([]);

  const redirectRightScreen = (screen: number, user: User) => {
    setTypeRender(screen);
    setRedirect(true);
    setUserInformations(user);
  }

  const getAllUsers = async () => {
    const allUsers: any = await getUsers();
    setUsers(allUsers);
    setLengthUser(allUsers.length);
  };
  const formatCPF = (cpf: String) => {
    cpf = cpf.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  const formatPhoneNumber = (phoneNumber: String) => {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    return phoneNumber.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }
  useEffect(() => {
    getAllUsers();
  }, []);
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
      <Content>
        {users &&
          users.map((user: User) => {
            const cpf = formatCPF(user.cpf);
            const phone = formatPhoneNumber(user.phone);
            return (
              <EachCard>
                <CardInformation>
                  <h4>{user.username}</h4>
                  <p>{user.email}</p>
                </CardInformation>
                <CardInformation>
                  <h4>{cpf}</h4>
                  <p>{phone}</p>
                </CardInformation>
                <h3><GrStatusGoodSmall color={user.status === "Ativo" ? "#4aad5b" : user.status === "Inativo" ? "#d6323f" :  user.status === "Aguardando ativação" ? "#d1a713" : "gray"} size={17}/>&nbsp;{user.status}</h3>
                <button onClick={() => redirectRightScreen(1, user)}>Editar</button>
              </EachCard>
            );
          })}
      </Content>
    </Container>
  );
}
}