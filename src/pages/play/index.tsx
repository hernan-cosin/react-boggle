import React, { useEffect } from "react";
import { Board } from "components/board";
import { useRecoilValue } from "recoil";
import { timerFlag } from "atoms/atoms"
import css from "./index.css"

export function Play() {
    const timerFlagVal =  useRecoilValue(timerFlag)

    return <section className={css["play-container"]} id="play-container">
        <div className={css.content}>
        <Board></Board>
        </div>
    </section>
}