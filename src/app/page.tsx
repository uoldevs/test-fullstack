import Image from 'next/image';
import './page.css';
import { AppBar, Box, Button, Divider, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import '@fontsource/roboto/300.css';
import uolLogo from '../../public/logo-uol.png';
import ClientRow from '@/components/ClientRow';

const clients = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Ativo',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Ativo',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
];

export default function Home() {
    return (
        <Box>
            <AppBar className="appBar">
                <Image src={uolLogo} alt="Logo" height={50} />
            </AppBar>
            <Box className="mainContainer">
                <Box className="clientPanelHeader">
                    <PersonOutlineOutlinedIcon className="clientPanelIcon" />
                    <Typography variant="h4">Painel de clientes</Typography>
                </Box>

                <Divider />

                <Box className="userListHeader">
                    <Box sx={{}}>
                        <Typography variant="h5">Listagem de usuários</Typography>
                        <Typography variant="subtitle1">Escolha um cliente para visualizar os detalhes</Typography>
                    </Box>
                    <Button variant="contained" className="newClientButton">
                        Novo cliente
                    </Button>
                </Box>

                <Box>
                    {clients.map((client) => (
                        <ClientRow key={client.id} client={client} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
