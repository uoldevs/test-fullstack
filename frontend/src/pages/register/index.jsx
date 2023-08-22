import React from "react";
import Header from "../../components/header";
import PanelTitle from "../../components/panelTitle";
import "./style.css";
import NewUser from "../../components/newUser";

const Panel = () => {

    return (
        <div>
            <Header />
            <div className="register-container">
                <PanelTitle />
                <NewUser />
            </div>
        </div>
    )
}

export default Panel;
