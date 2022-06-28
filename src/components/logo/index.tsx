import React, { PureComponent } from "react";
import logo from "media/Boggle.svg"
import css from "./index.css"

type props = {
    className?: string
    onClick?: ()=> void
}

export function Logo(p:props) {

    return <p className={css.logo + " " + `${p.className? p.className : ""}`} onClick={p.onClick? p.onClick : null}>Boggle</p>
}