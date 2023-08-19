import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

import Context from "./Context";
import { clientApi, addClient, updateClient } from "../services/clientApi";

function Provider({children}){

    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState([]);
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [updatedClient, setUpdatedClient] = useState({});
    const navigate = useNavigate();


    console.log(clients);
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

    //provider = quem dá os dados
    //consumer = quem usa os dados

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
            updateClients
    }), [clients, loading, phone, setPhone, cpf, setCpf, updatedClient, setUpdatedClient]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}

export default Provider;