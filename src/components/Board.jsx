import { useState } from "react";
import Square from "./Square";

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));

    const handleSquareClick = clickedPosition => {
        setSquare(currentSquares => {

            return currentSquares.map((squareValue, position)=>{
                if(clickedPosition === position){
                    return 'x';
                }
                return squareValue
            });
        });
    };

    const renderSquare = position => {
        return (

            <Square
                value={square[position]}
                onClick={() => handleSquareClick(position)}
            />

        )
    }

    return (
        <div className="board">

            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

        </div>
    )
}

export default Board;