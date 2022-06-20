import React from 'react'

const Header = ({isBingo}) => {
    return (
        <h1>
        {
            !isBingo ? (<>BINGO BY <br /> ALI REHMAN</>) : (<>Bingooooo!<br /> You won</>)
        }
        </h1>
    )
}

export default Header
