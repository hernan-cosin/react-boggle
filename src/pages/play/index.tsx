import React from "react";
import { ButtonDice } from "ui/buttons/button-dice";
import css from "./index.css"

export function Play() {
    function handleSuffleClick() {

    }

    return <section className={css["play-container"]} id="play-container">
        <div className={css.content}>
        <ButtonDice  className={css["button-shuffle"]} letterClassName={css.shuffle} onClick={handleSuffleClick}>SHUFFLE</ButtonDice>

        </div>
    </section>
}