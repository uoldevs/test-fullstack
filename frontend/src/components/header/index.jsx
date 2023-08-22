import React from "react";
import LogoUOL from "../../images/logo-uol.png";
import "./styles.css";


const Header = () => {

    return (

        <div className="container-header">
            <div className="logo-img">
                <img src={LogoUOL} alt="Logo UOL" />
            </div>
        </div>
    )
}

export default Header;
