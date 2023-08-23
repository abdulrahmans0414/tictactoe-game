
const StatusMessage = ({ winner, isXNext, square }) => {

    const noMoveLeft = square.every((squareValue) => squareValue !== null)

    const nextPlayer = isXNext ? 'X' : 'O';

    const renderStatusMessage = () => {
        if (winner) {
            return (
                <>
                    Winner is {''}
                    <span className={winner === 'X' ? "text-green" : "text-orange"}>
                        {winner}
                    </span>

                </>
            )
        }

        if (!winner && noMoveLeft) {
            return (
                <>
                    <span className="text-orange">O</span> and {''}
                    <span className="text-green">X</span> tied
                </>
            )

        }

        if (!winner && !noMoveLeft) {
            return (

                <>
                    Next Player is {''}
                    <span className={isXNext ? "text-green" : "text-orange"}>
                        {nextPlayer}
                    </span>
                </>
            )
        }

        return null;
    }


    return <h2 className="status-message"> {renderStatusMessage()} </h2>
}

export default StatusMessage;