import React from "react"
import { useNavigate  } from "react-router-dom";
import { Logo } from "components/logo";
// import {Logo} from "ui/logo"
// import {MenuButton} from "components/menu-button"
// import { LogoText } from "ui/texts/logo";
import {useSetRecoilState, useRecoilValue} from "recoil"
// import {openMenu} from "atoms/atoms"
import css from "./header.css"


export function Header(){
    let navigate = useNavigate();
    // const setOpenMenuAtom = useSetRecoilState(openMenu)
    // const openMenuAtomValue = useRecoilValue(openMenu)
    
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