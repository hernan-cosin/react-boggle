import React, { useEffect, useState } from "react";
import uuid from 'react-uuid'
import css from "./index.css"

type props = {
    className?: string
    letterClassName?: string
    children: string
    onClick?: ()=> void
    disabled?: boolean
}

export function ButtonDice(p:props) {
    const children = p.children
    const splittedArray = children.split("")
    const [randomArray, setRandomArray] = useState("")
    const [mouseEnter, setMouseEnter] = useState(false)
    const [intId, setIntId] = useState(null)

    const randomString = ()=> {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1 ).toUpperCase()
    };

    const handleMouseEnter = (e)=> {
        setMouseEnter(true)
    }
    
    const handleMouseLeave = (e)=> {
        setMouseEnter(false)
    }
    
    useEffect(()=>{
        if (mouseEnter) {
            const myIntId = setInterval(() => {
                const ramdomString = randomString()
                setRandomArray(ramdomString)
            }, 350)

            setIntId(myIntId)
        } 
        if (!mouseEnter) {
            clearInterval(intId)
        }
    }, [mouseEnter])
    
    return <button className={css.button + " " + `${p.className? p.className : ""}` + " " + `${p.disabled? css["disabled"] : ""}`} onClick={p.onClick? p.onClick : null} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {splittedArray.map((l)=><p key={`${l+uuid()}`} className={css["letter"] + " " + `${p.letterClassName? p.letterClassName : ""}` + " " + `${p.disabled? css["disabled"] : ""}`}>{mouseEnter? randomString() : l }</p>)}
    </button>
}

