import React from "react";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./styles.css";
import PanelTitle from "../panelTitle";

const PresentationPanel = () => {

    const navigate = useNavigate();

    const toPanel = () => {
        navigate('/register');
    }
    return (
        <div className="presentation-panel">
            <PanelTitle />
            <div>
                <div className="info-home">
                    <div>
                        <Typography
                            variant="h6"
                            fontFamily="Roboto, sans-serif"
                            style={{ color: "#747a82" }}
                        >
                            Listagem de usuários
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily="Roboto, sans-serif"
                            style={{ color: "#b0b0b0" }}
                        >
                            Escolha um cliente para visualizar os detalhes
                        </Typography>
                    </div>

                    <div>
                        <button
                            className="btn-new-client"
                            onClick={toPanel}
                        >
                            Novo cliente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentationPanel;
