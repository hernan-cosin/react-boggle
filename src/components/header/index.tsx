import { Logo } from "components/logo";
import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./header.css";


export function Header(){
    let navigate = useNavigate();

    
    function handleLogoClick() {
        navigate("/")
    }

    return <div className={css["header-container"]} id="header-container">
        <div className={css["border-bottom-1"]} id={"border-bottom"}></div>
        <div className={css["border-bottom-2"]} id={"border-bottom"}></div>
        <div className={css["header-content"]} id="header-content">
            <div onClick={handleLogoClick} className={css["logo-content"]} id="logo-content">
                <Logo className={css.logo} onClick={handleLogoClick}></Logo>
            </div>
        </div>
    </div>
}