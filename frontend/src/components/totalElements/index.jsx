import React from "react";
import "./style.css";

const TotalElements = ({ users }) => {
    return (
        <div className="total-elements-container">
            <p className="simple-text">
                {`Exibindo ${users.length} clientes`}
            </p>
        </div>
    )
}

export default TotalElements;
