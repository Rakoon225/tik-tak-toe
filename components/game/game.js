import styles from './game.module.css'
import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import { useGameState } from './use-game-state'
import { SYMBOL_O, SYMBOL_X } from './constants'

export function Game() {
    const { cells,
        currentStep,
        winnerSequence,
        winnerSymbol,
        isDraw,
        handleCellClick,
        handleResetClick
    } = useGameState();


    const getSymbolClassName = (symbol) => {
        if (symbol == SYMBOL_X) return 'symbol--x';
        if (symbol == SYMBOL_O) return 'symbol--o';
        return '';
    }

    return (
        <div className={styles['game']}>

            <GameInfo
                isDraw={isDraw}
                currentStep={currentStep}
                winnerSymbol={winnerSymbol}
            />

            <div className={styles['game-field']}>
                {cells.map((symbol, index) => (
                    <GameCell
                        symbol={symbol}
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                        key={index}
                    />
                ))}

            </div>
            <button type="reset" className={styles['reset']} onClick={handleResetClick}>Сбросить</button>
        </div>

    )
}