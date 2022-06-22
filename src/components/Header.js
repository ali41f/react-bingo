import React from 'react'

const Header = ({bingoCount}) => {

    const bingoText = () => {
        const text = bingoCount > 1 ? " Bingos" : " Bingo"
        return text;
    }

    return (
        <h1>
        <>BINGO GAME <br /> { !bingoCount ? "ALI REHMAN" : bingoCount + bingoText() }</>
        </h1>
    )
}

export default Header
