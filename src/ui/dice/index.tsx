import React, { useEffect, useState } from "react";
import uuid from 'react-uuid'
import css from "./index.css"

type props = {
    className?: string
    letterClassName?: string
    children: string
    onClick?: ()=> void
    position?:number
    diceKey?: ""
}

export function Dice(p:props) {
    const children = p.children
    const splittedChildren = children.split("")

    return <p key={`${splittedChildren + uuid()}`} className={css.letter + " " + `${p.className? p.className : ""}` + " " + `${splittedChildren[0] == "Q"? css["q-letter"] : ""}`}>
        {splittedChildren}
    </p>
}

