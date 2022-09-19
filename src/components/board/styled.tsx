import styled from "styled-components"

export const BoardContainer = styled.section`
`

export const BoardContent = styled.div`
`

export const DicesBox = styled.section`
    min-width: 235px;
    max-width: 400px;
    width: 100%;
    background-color: var(--grey);
    padding: 10px;
    border-radius: 30px;
    margin: 0 auto 30px auto;
    box-shadow: 0px 8px 8px 3px var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    row-gap: 20px;
    column-gap: 15px;
    flex-wrap: wrap;
    max-width: 250px;
    width: 100%;    
    max-height: 250px;

    @media (min-width: 450px) {
            max-width: 350px;
            max-height: none;
            column-gap: 20px;
    }
`