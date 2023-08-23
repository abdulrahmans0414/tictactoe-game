import { useState } from "react";
import "./styles.scss";
import Board from "./components/Board";
import { calculateWinner } from "./winner";
import StatusMessage from "./components/StatusMessage";


function App() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  

  const winner = calculateWinner(square);


  const handleSquareClick = clickedPosition => {
    // null, x , 0
    if (square[clickedPosition] || winner){
        return;
    }

    setSquare(currentSquares => {

        return currentSquares.map((squareValue, position)=>{
            if(clickedPosition === position){
                return isXNext ? 'X' : 'O';
            }
            return squareValue
        });
    });

    setIsXNext((currentIsXNext)=>!currentIsXNext)
};

  return (
    <div className="app">
      <StatusMessage  winner={winner} isXNext={isXNext} square={square}/>
      <Board square={square} handleSquareClick={handleSquareClick}/>
    
    </div>
  );
}

export default App;
