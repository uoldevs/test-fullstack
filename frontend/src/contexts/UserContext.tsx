import { createContext, useState, ReactNode, useContext } from "react";

type UserContextProps = {
  children: ReactNode,
};

interface User {
  id: number,
  username: string,
  cpf: string,
  phone: string,
  status: string,
  email: string,
}

type UserContextType = {
  userInformations: object,
  setUserInformations: (informations: User) => void,
  typeRender: number,
  setTypeRender: (newLength: number) => void,
  lengthUser: number,
  setLengthUser: (newLength: number) => void,
};

const initialValue = {
  userInformations: {},
  setUserInformations: () => {},
  typeRender: 0,
  setTypeRender: () => {},
  lengthUser: 0,
  setLengthUser: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userInformations, setUserInformations] = useState({});
  const [typeRender, setTypeRender] = useState(initialValue.lengthUser);
  const [lengthUser, setLengthUser] = useState(initialValue.lengthUser);


  return (
    <UserContext.Provider
      value={{ userInformations, setUserInformations, typeRender, setTypeRender, lengthUser, setLengthUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useAddContext() {
  const context = useContext(UserContext);
  const { userInformations, setUserInformations, typeRender, setTypeRender, lengthUser, setLengthUser } =
    context;
  return { userInformations, setUserInformations, typeRender, setTypeRender, lengthUser, setLengthUser };
}