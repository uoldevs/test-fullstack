import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Card = ({ users }) => {

    const navigate = useNavigate();

    const toRegister = (id) => {

        navigate(`/register/${id}`);
    }

    return (
        <div>
            {
                users.map((user) => (
                    <div className="card-container" key={user.id}>
                        <div className="card-column card-name-email">
                            <div className="highlighted-text">{user.name}</div>
                            <div className="simple-text">{user.email}</div>
                        </div>
                        <div className="card-column card-cpf-telefone">
                            <div className="highlighted-text">{user.cpf}</div>
                            <div className="simple-text">{user.telefone}</div>
                        </div>
                        <div className="card-status">
                            <div
                                className={
                                    `${user.status === "Ativo" && "status-ativo"} ` +
                                    `${user.status === "Inativo" && "status-inativo"} ` +
                                    `${user.status === "Aguardando ativação" && "status-aguardando-ativação"} ` +
                                    `${user.status === "Desativado" && "status-desativado"}`
                                }
                            >

                            </div>
                            <div>
                                {user.status}
                            </div>
                        </div>
                        <button
                            className="btn-edit"
                            onClick={() => toRegister(user.id)}
                        >
                            Editar
                        </button>
                    </div>
                ))
            }


        </div>
    )
}

export default Card;
