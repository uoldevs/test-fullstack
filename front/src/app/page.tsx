import './page.style.scss';
import Image from 'next/image';
import { AppBar, Box, Divider, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import '@fontsource/roboto/300.css';
import uolLogo from '../../public/logo-uol.png';
import ClientTable from '@/components/ClientTable';

export default function Home() {
    return (
        <Box>
            <AppBar className="appBar" sx={{ backgroundColor: 'black' }}>
                <Image src={uolLogo} alt="Logo" height={50} />
            </AppBar>
            <Box className="mainContainer">
                <Box className="clientPanelHeader">
                    <PersonOutlineOutlinedIcon className="clientPanelIcon" />
                    <Typography variant="h4">Painel de clientes</Typography>
                </Box>

                <Divider />

                <ClientTable />
            </Box>
        </Box>
    );
}
