import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDice } from "ui/buttons/button-dice";
import css from "./home.css"


export function Home() {
    const navigate = useNavigate()

    function handlePlayClick(){
        navigate("/play")
    }
    
    function handleRulesClick(){
        navigate("/rules")
    }
    
    return <section className={css["home-container"]} id="home-container">
        <div className={css.content}>
            <div className={css["buttons-container"]}>
                <ButtonDice className={css["button-play"]} onClick={handlePlayClick}>PLAY</ButtonDice>
                <ButtonDice className={css["button-rules"]}onClick={handleRulesClick}>RULES</ButtonDice>
            </div>
        </div>
    </section>
}