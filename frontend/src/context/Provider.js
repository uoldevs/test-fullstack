import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

import Context from "./Context";
import { clientApi, addClient, updateClient } from "../services/clientApi";

function Provider({children}){

    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState([]);
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [cpf, setCpf] = useState('');
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [updatedClient, setUpdatedClient] = useState({});
    const navigate = useNavigate();


    const getClients = async ()=> {
        setLoading(true);
        const result = await clientApi();
        setClients(result);
        setLoading(false);
    }

    const addNewClient = async (task)=>{
        const result = await addClient(task);
        setClients((prevState)=>[...prevState, result]);
        navigate('/');
    }

  const updateClients = async (updatedData) => {
    const updatedClient = await updateClient(updatedData);
    setClients((prevState) => {
      return prevState.map((client) =>
        client.id === updatedData.id ? updatedClient : client
      );
    });
    navigate('/');
  };

    const value = useMemo(()=>({  
            loading,
            clients,
            getClients,
            addNewClient,
            phone,
            setPhone,
            cpf, 
            setCpf,
            updatedClient,
            setUpdatedClient,
            updateClients,
            isCpfValid,
            setIsCpfValid,
            isPhoneValid, 
            setIsPhoneValid
    }), [clients, loading, phone, cpf, updatedClient, isCpfValid, isPhoneValid]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}

export default Provider;