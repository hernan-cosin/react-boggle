import React, { useEffect } from "react";
import { Board } from "components/board";
import css from "./index.css"

export function Play() {

    return <section className={css["play-container"]} id="play-container">
        <div className={css.content}>
        <Board></Board>
        </div>
    </section>
}