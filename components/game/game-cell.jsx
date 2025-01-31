function GameCell({ isWinner, onClick, symbol }) {
    return <button
        className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
        onClick={onClick}>
        {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
}