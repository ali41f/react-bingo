import React from 'react'

const Header = ({isBingo, bingoCount}) => {
    return (
        <h1>
        {
            !isBingo ? (<>BINGO BY <br /> ALI REHMAN</>) : (<>Bingooooo!<br /> {bingoCount} times</>)
        }
        </h1>
    )
}

export default Header
