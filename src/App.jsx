import { useState } from "react";
import "./styles.scss";
import Board from "./components/Board";
import { calculateWinner } from "./winner";


function App() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  
  const nextPlayer = isXNext ? 'X' : 'O';
  const winner = calculateWinner(square);
  const statusMessage = winner ? `Winner is ${winner}`: `Next Player is ${nextPlayer}`;
 

  const handleSquareClick = clickedPosition => {
    // null, x , 0
    if (square[clickedPosition] || winner){
        return;
    }

    setSquare(currentSquares => {

        return currentSquares.map((squareValue, position)=>{
            if(clickedPosition === position){
                return isXNext ? 'x' : 'o';
            }
            return squareValue
        });
    });

    setIsXNext((currentIsXNext)=>!currentIsXNext)
};

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board square={square} handleSquareClick={handleSquareClick}/>
    
    </div>
  );
}

export default App;
