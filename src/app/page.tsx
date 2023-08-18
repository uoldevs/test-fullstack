import Image from 'next/image';
import styles from './page.module.css';
import { AppBar, Box, Button, Divider, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import '@fontsource/roboto/300.css';
import uolLogo from '../../public/logo-uol.png';

export default function Home() {
    return (
        <Box>
            <AppBar
                position="static"
                sx={{ height: 60, display: 'flex', alignItems: 'center', backgroundColor: 'black' }}
            >
                <Image src={uolLogo} alt="Logo" height={50} />
            </AppBar>
            <Box
                sx={{
                    width: '60%',
                    margin: 'auto',
                    marginTop: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                    <PersonOutlineOutlinedIcon sx={{ fontSize: 40 }} />
                    <Typography sx={{ fontSize: 30 }}>Painel de clientes</Typography>
                </Box>

                <Divider />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{}}>
                        <Typography sx={{ fontSize: 20 }}>Listagem de usuários</Typography>
                        <Typography sx={{ fontSize: 20 }}>Escolha um cliente para visualizar os detalhes</Typography>
                    </Box>
                    <Button variant="contained" sx={{ fontSize: 10, backgroundColor: '#E29933' }}>
                        Novo cliente
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
