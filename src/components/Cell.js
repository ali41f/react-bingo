import React from 'react'

const Cell = ({i, clickHandler, selectedCells, text}) => {
    return (
        <div 
            onClick={() => clickHandler(i)} 
            style={{backgroundColor: selectedCells.some((cellData) => cellData.cellIndex === i) ? '#555' : '#333' }}> 
                {text}
        </div>
    )
}

export default Cell
