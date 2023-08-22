import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ButtonsRegister = () => {

    const navigate = useNavigate();
    const toHome = () => {
        navigate('/');
    }

    return (
        <div className="btn-container">
            <button
                type="submit"
                className="btn-criar"
            >
                Criar
            </button>
            <button
                type="button"
                className="btn-voltar"
                onClick={toHome}
            >
                Voltar
            </button>

        </div>
    )
}

export default ButtonsRegister;
