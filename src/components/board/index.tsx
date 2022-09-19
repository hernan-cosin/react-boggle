import React, { useEffect, useState } from "react";
import uuid from "react-uuid"
import { ButtonDice } from "ui/buttons/button-dice";
import { Dice } from "ui/dice";
import { BoardContainer, BoardContent, DicesBox, RowContainer } from "./styled";
import css from "./index.css";

export function Board() {
    const [buttonShuffleDisabled, setButtonShuffleDisabled] = useState(true)
    const [initialState, setInitialState] = useState(true)
    const [shuffleCounter, setShuffleCounter] = useState(0)

    const [ordered, setOrdered] = useState(null)

    const [positions, setPositions] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    let [positionIndex, setPositionIndex] = useState(15);

    const [position1, setPosition1] = useState(0)
    const [position2, setPosition2] = useState(0)
    const [position3, setPosition3] = useState(0)
    const [position4, setPosition4] = useState(0)
    const [position5, setPosition5] = useState(0)
    const [position6, setPosition6] = useState(0)
    const [position7, setPosition7] = useState(0)
    const [position8, setPosition8] = useState(0)
    const [position9, setPosition9] = useState(0)
    const [position10, setPosition10] = useState(0)
    const [position11, setPosition11] = useState(0)
    const [position12, setPosition12] = useState(0)
    const [position13, setPosition13] = useState(0)
    const [position14, setPosition14] = useState(0)
    const [position15, setPosition15] = useState(0)
    const [position16, setPosition16] = useState(0)
    
    function handleStartClick() {
        setButtonShuffleDisabled(false)
        setInitialState(false)
        handleShuffleClick()
    }

    function handleRestarClick() {
        setButtonShuffleDisabled(true)
        setInitialState(true)
        resetBoard()
    }

    function getRandomPosition () {
        let rNumber = getRandomNumberMax(positionIndex)
        
        const position = positions[rNumber]
        const reducedPositions = positions.splice(rNumber, 1)
        setPositions(reducedPositions)
        setPositionIndex(positionIndex--)

        return position
    }

    function getRandomDiceLetter() {
        const rollDice1 = getRandomNumberMax(5)
        const rollDice2 = getRandomNumberMax(5)
        const rollDice3 = getRandomNumberMax(5)
        const rollDice4 = getRandomNumberMax(5)
        const rollDice5 = getRandomNumberMax(5)
        const rollDice6 = getRandomNumberMax(5)
        const rollDice7 = getRandomNumberMax(5)
        const rollDice8 = getRandomNumberMax(5)
        const rollDice9 = getRandomNumberMax(5)
        const rollDice10 = getRandomNumberMax(5)
        const rollDice11= getRandomNumberMax(5)
        const rollDice12 = getRandomNumberMax(5)
        const rollDice13 = getRandomNumberMax(5)
        const rollDice14 = getRandomNumberMax(5)
        const rollDice15 = getRandomNumberMax(5)
        const rollDice16 = getRandomNumberMax(5)

        setIndex1(rollDice1)
        setIndex2(rollDice2)
        setIndex3(rollDice3)
        setIndex4(rollDice4)
        setIndex5(rollDice5)
        setIndex6(rollDice6)
        setIndex7(rollDice7)
        setIndex8(rollDice8)
        setIndex9(rollDice9)
        setIndex10(rollDice10)
        setIndex11(rollDice11)
        setIndex12(rollDice12)
        setIndex13(rollDice13)
        setIndex14(rollDice14)
        setIndex15(rollDice15)
        setIndex16(rollDice16)

        // RANDOM POSITION

        const positionDice1 = getRandomPosition()
        const positionDice2 = getRandomPosition()
        const positionDice3 = getRandomPosition()
        const positionDice4 = getRandomPosition()
        const positionDice5 = getRandomPosition()
        const positionDice6 = getRandomPosition()
        const positionDice7 = getRandomPosition()
        const positionDice8 = getRandomPosition()
        const positionDice9 = getRandomPosition()
        const positionDice10 = getRandomPosition()
        const positionDice11= getRandomPosition()
        const positionDice12 = getRandomPosition()
        const positionDice13 = getRandomPosition()
        const positionDice14 = getRandomPosition()
        const positionDice15 = getRandomPosition()
        const positionDice16 = getRandomPosition()

        setPosition1(positionDice1)
        setPosition2(positionDice2)
        setPosition3(positionDice3)
        setPosition4(positionDice4)
        setPosition5(positionDice5)
        setPosition6(positionDice6)
        setPosition7(positionDice7)
        setPosition8(positionDice8)
        setPosition9(positionDice9)
        setPosition10(positionDice10)
        setPosition11(positionDice11)
        setPosition12(positionDice12)
        setPosition13(positionDice13)
        setPosition14(positionDice14)
        setPosition15(positionDice15)
        setPosition16(positionDice16)
    }

    useEffect(()=>{
        dices.sort(function (a, b) {
            return a.position -b.position
        })

        setOrdered(dices)
    }, [positions])


    function handleShuffleClick() {
        let sum = shuffleCounter
        const Int = setInterval(()=>{
            setShuffleCounter(sum++)
            
            getRandomDiceLetter()

            if (sum === 3) {
                setShuffleCounter(0)
                clearInterval(Int)
            }
        }, 250)
    }

    function getRandomNumberMax(max) {
        return Math.floor(Math.random() * max)
    }

        const dice1 =  ["R", "I", "F", "O", "B", "X", ""]
        const dice2 =  ["I", "F", "E", "H", "E", "Y", ""]
        const dice3 =  ["D", "E", "N", "O", "W", "S", ""]
        const dice4 =  ["U", "T", "O", "K", "N", "D", ""]
        const dice5 =  ["H", "M", "S", "R", "A", "O", ""]
        const dice6 =  ["L", "U", "P", "E", "T", "S", ""]
        const dice7 =  ["A", "C", "I", "T", "O", "A", ""]
        const dice8 =  ["Y", "L", "G", "K", "U", "E", ""]
        const dice9 =  ["Qu", "B", "M", "J", "O", "A", ""]
        const dice10 =  ["E", "H", "I", "S", "P", "N", ""]
        const dice11 =  ["V", "E", "T", "I", "G", "N", ""]
        const dice12 =  ["B", "A", "L", "I", "Y", "T", ""]
        const dice13 =  ["E", "Z", "A", "V", "N", "D", ""]
        const dice14 =  ["R", "A", "L", "E", "S", "C", ""]
        const dice15 =  ["U", "W", "I", "L", "R", "G", ""]
        const dice16 =  ["P", "A", "C", "E", "M", "D", ""]

        const [index1, setIndex1] = useState(6)
        const [index2, setIndex2] = useState(6)
        const [index3, setIndex3] = useState(6)
        const [index4, setIndex4] = useState(6)
        const [index5, setIndex5] = useState(6)
        const [index6, setIndex6] = useState(6)
        const [index7, setIndex7] = useState(6)
        const [index8, setIndex8] = useState(6)
        const [index9, setIndex9] = useState(6)
        const [index10, setIndex10] = useState(6)
        const [index11, setIndex11] = useState(6)
        const [index12, setIndex12] = useState(6)
        const [index13, setIndex13] = useState(6)
        const [index14, setIndex14] = useState(6)
        const [index15, setIndex15] = useState(6)
        const [index16, setIndex16] = useState(6)

        function resetBoard() {
            setIndex1(6)
            setIndex2(6)
            setIndex3(6)
            setIndex4(6)
            setIndex5(6)
            setIndex6(6)
            setIndex7(6)
            setIndex8(6)
            setIndex9(6)
            setIndex10(6)
            setIndex11(6)
            setIndex12(6)
            setIndex13(6)
            setIndex14(6)
            setIndex15(6)
            setIndex16(6)
            setPositions([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
            setPositionIndex(15)
        }

        const dices = [
            {
                dice1:  ["R", "I", "F", "O", "B", "X", ""],
                position: position1,
                side: dice1[index1]
            },
            {
                dice2:  ["I", "F", "E", "H", "E", "Y", ""],
                position: position2,
                side: dice2[index2]
            },
            {
                dice3:  ["D", "E", "N", "O", "W", "S", ""],
                position: position3,
                side: dice3[index3]
            },
            {
                dice4:  ["U", "T", "O", "K", "N", "D", ""],
                position: position4,
                side: dice4[index4]
            },
            {
                dice5:  ["H", "M", "S", "R", "A", "O", ""],
                position: position5,
                side: dice5[index5]
            },
            {
                dice6:  ["L", "U", "P", "E", "T", "S", ""],
                position: position6,
                side: dice6[index6]
            },
            {
                dice7:  ["A", "C", "I", "T", "O", "A", ""],
                position: position7,
                side: dice7[index7]
            },
            {
                dice8:  ["Y", "L", "G", "K", "U", "E", ""],
                position: position8,
                side: dice8[index8]
            },
            {
                dice9:  ["Qu", "B", "M", "J", "O", "A", ""],
                position: position9,
                side: dice9[index9]
            },
            {
                dice10:  ["E", "H", "I", "S", "P", "N", ""],
                position: position10,
                side: dice10[index10]
            },
            {
                dice11:  ["V", "E", "T", "I", "G", "N", ""],
                position: position11,
                side: dice11[index11]
            },
            {
                dice12:  ["B", "A", "L", "I", "Y", "T", ""],
                position: position12,
                side: dice12[index12]
            },
            {
                dice13:  ["E", "Z", "A", "V", "N", "D", ""],
                position: position13,
                side: dice13[index13]
            },
            {
                dice14:  ["R", "A", "L", "E", "S", "C", ""],
                position: position14,
                side: dice14[index14]
            },
            {
                dice15:  ["U", "W", "I", "L", "R", "G", ""],
                position: position15,
                side: dice15[index15]
            },
            {
                dice16:  ["P", "A", "C", "E", "M", "D", ""],
                position: position16,
                side: dice16[index16]
            },
        ]

    return <BoardContainer>
        <BoardContent>
            <DicesBox>
                <RowContainer>
                    {ordered?.map((d)=>{
                        return <Dice key={`${d.side + uuid()}`}>{d.side}</Dice>
                        })}
                </RowContainer>
            </DicesBox>
        </BoardContent>
        <ButtonDice className={css["button-start"] + " " + `${!initialState? css["no-display"] : ""}`} letterClassName={css.start} onClick={handleStartClick}>START</ButtonDice> 
        <ButtonDice className={css["button-restart"] + " " + `${initialState? css["no-display"] : ""}`} letterClassName={css["restart"]} onClick={handleRestarClick}>RESTART</ButtonDice>
        <ButtonDice className={css["button-shuffle"]} letterClassName={css.shuffle} onClick={handleShuffleClick} disabled={buttonShuffleDisabled}>SHUFFLE</ButtonDice>
    </BoardContainer>
}