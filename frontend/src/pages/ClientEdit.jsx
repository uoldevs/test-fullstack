import React from 'react';
import Navbar from '../components/Navbar';
import FormCreateClient from '../components/FormCreateClient';
import { MainStyle, UserIcon } from '../styles/MainStyle';
import { Typography, Box } from "@mui/material";
import userIcon from '../images/userIcon.png'


function ClientEdit() {
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
                    </Box>
                    <div 
                        className="client-form"
                        style={{ 
                            borderTop: '1px solid #E0E0E0',
                            width: '80%', 
                            marginTop: '10px',
                            paddingTop: '20px' 
                        }}
                    >
                        <Typography variant="body1">Novo usuário</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Informe os campos a seguir para criar novo usuário
                        </Typography>
                    </div>
                <FormCreateClient />
                </MainStyle>
            </main>
        </>
    );
    }

export default ClientEdit;