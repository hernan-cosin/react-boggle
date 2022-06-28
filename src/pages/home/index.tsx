import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDice } from "ui/buttons/button-dice";
import { useRecoilState } from "recoil";
import {timerFlag} from "atoms/atoms"
import css from "./home.css"


export function Home() {
    const navigate = useNavigate()
    const [playMenu, setPlayMenu] = useState(false)
    const [timerFlagVal, setTimerFlagVal] = useRecoilState(timerFlag)

    function handlePlayClick(){
        // setPlayMenu(!playMenu)
        navigate("/play")
    }
    
    function handleTimerClick(){
        setTimerFlagVal(true)
        navigate("/play")
    }
    
    function handleNoTimerClick(){
        setTimerFlagVal(false)
        navigate("/play")
    }
    
    function handleRulesClick(){
        navigate("/rules")
    }
    
    return <section className={css["home-container"]} id="home-container">
        <div className={css.content}>
            <div className={css["buttons-container"]}>
                <ButtonDice className={css["button-play"]} onClick={handlePlayClick}>PLAY</ButtonDice>
                {/* <ButtonDice className={css["button-timer"] + " " + `${playMenu? css["display"] : ""}` } onClick={handleTimerClick}>TIMER</ButtonDice>
                <ButtonDice className={css["button-no-timer"] + " " + `${playMenu? css["display"] : ""}` } onClick={handleNoTimerClick}>NO-TIMER</ButtonDice> */}
                <ButtonDice className={css["button-rules"]}onClick={handleRulesClick}>RULES</ButtonDice>
            </div>
        </div>
    </section>
}