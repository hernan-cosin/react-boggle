import React, { PureComponent } from "react";
import logo from "media/Boggle.svg"
import css from "./index.css"

type props = {
    className?: string
}

export function Logo(p:props) {

    return <p className={css.logo + " " + `${p.className? p.className : ""}`}>Boggle</p>
}