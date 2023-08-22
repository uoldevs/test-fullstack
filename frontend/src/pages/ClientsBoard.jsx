import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getClients } from '../services/requests';
import ClientCard from '../components/ClientCard';
import Navbar from '../components/Navbar';
import { MainStyle, UserIcon } from '../styles/MainStyle';
import { InfoBoardStyle, TextWrapper, ButtonStyle } from '../styles/InfoBoardStyle';
import { Typography, Box } from '@mui/material';
import userIcon from '../images/userIcon.png'

function ClientsBoard() {
    const { clients, setClients } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => { 
        const fetchClients = async () => {
            const clientsList = await getClients();
            setClients(clientsList);
        };
        fetchClients();
        }, []);

    const clientListHtml = clients.map((client) => (
        <ClientCard 
            key={client.id}
            id={client.id}
            name={client.name}
            email={client.email}
            cpf={client.cpf}
            phone={client.phone}
            status={client.status}
        />
    ));

    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <MainStyle>
                    <Box display='flex' flexDirection='row' alignItems='start'>
                        <UserIcon src={userIcon} alt="Logo" />
                        <Typography 
                            variant="h5" 
                            fontFamily="UOLTextBold"
                            fontWeight={500}
                            style={{ marginLeft: '10px' }} 
                        > 
                            Painel de clientes 
                        </Typography>
                    </Box >
                    <div style={{ borderTop: '1px solid #E0E0E0', width: '80%', marginTop: '10px' }}></div>
                    <InfoBoardStyle >
                        <TextWrapper>
                        <Typography variant="body1">Listadem de usuários </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Escolha um cliente para visualizar os detalhes
                        </Typography>
                        </TextWrapper>
                        <ButtonStyle
                            className="button-create-client"
                            onClick={() => navigate('/client/edit')}
                        >
                            Novo Cliente 
                        </ButtonStyle>
                    </InfoBoardStyle>
                    { clientListHtml }
                    <Typography variant="body2" color="text.secondary" >
                        {clients.length === 1 ? (
                            <span>Exibindo 1 cliente</span>
                            ) : (
                            <span>Exibindo {clients.length} clientes</span>
                        )}
                    </Typography>
                </MainStyle>
            </main>
        </>
    );
    }

export default ClientsBoard;