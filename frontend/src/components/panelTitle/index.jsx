import React from "react";
import { Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./style.css";


const PanelTitle = () => {

    return (
        <div>
            <div className="panel-clients">
                <PersonOutlineOutlinedIcon style={{ fontSize: 40, color: "#373737", marginRight: 20 }} />
                <Typography
                    variant="h5"
                    fontFamily="Roboto, sans-serif"
                    style={{ color: "#373737", fontWeight: 500 }}
                >
                    Painel de clientes
                </Typography>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default PanelTitle;
