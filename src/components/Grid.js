import React, { useState, useEffect } from 'react'
import { GridText } from '../data'
import Cell from './Cell'
import "./grid.css"

const Grid = ({isBingo, setIsBingo}) => {

    const [gridData, setGridData] = useState([]);
    const [selectedCells, setSelectedCells] = useState([
        {
            cellIndex: 12,
            row: 2,
            column: 2
        }
    ]);

    useEffect(() => {
        setGridData(GridText.sort(() => 0.5 - Math.random()))
    },[]);

    useEffect(() => {
        checkForBingo()
    },[selectedCells])

    const checkForBingo = () => {
        let bingoCheck = false;
        selectedCells.forEach((cellData) => {
            if(occuranceRowColVal(cellData.row, true) >=5 || occuranceRowColVal(cellData.column, false) >=5){
                bingo()
                bingoCheck = true;
            }
        })
        if(checkDiagonals()){
            bingo()
            bingoCheck = true;
        }
        if(!bingoCheck) setIsBingo(false)
    }

    
    const checkDiagonals = () => {
        if(isIndexPresent(0) && isIndexPresent(6) && isIndexPresent(18) && isIndexPresent(24)){
            return true;
        }
        if(isIndexPresent(4) && isIndexPresent(8) && isIndexPresent(16) && isIndexPresent(20)){
            return true;
        }
        return false;
    }
    
    const isIndexPresent = (i) => {
        return selectedCells.some((cellData) => cellData.cellIndex === i)
    }

    const occuranceRowColVal = (value, isRow) => {
        let counter = 0;
        selectedCells.forEach((cellData) => {
            if(isRow){
                if(cellData.row === value) counter++
            }else{
                if(cellData.column === value) counter++
            }
        })
        return counter;
    }

    const bingo = () => {
        setIsBingo(true)
    }

    const clickHandler = (index) => {
        const rowNum = Math.floor(index/5);
        const columnNum = index % 5;
        if(index !== 12){
            if(selectedCells.some((cellData) => cellData.cellIndex === index)){
                setSelectedCells(selectedCells.filter((i) => {
                    return i.cellIndex !== index;
                }))
            }else{
                setSelectedCells([...selectedCells, 
                    {
                        cellIndex: index,
                        row: rowNum,
                        column: columnNum
                    }
                ])
            }
        }
    }

    return (
        <div className="bingoGrid">
            {
                gridData.length && gridData.map((text,i) => {
                    return(
                        <Cell 
                            key={i} 
                            i={i}
                            clickHandler={clickHandler} 
                            selectedCells={selectedCells}
                            text={text}
                        />
                    );
                })
            }
            {
                isBingo && (
                    <>
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                    </>
                )
            }
            
        </div>
    )
}

export default Grid
