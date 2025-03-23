import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { SYMBOL_O, SYMBOL_X } from "./constants";
import { ResetButton } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  } = useGameState();

  const getSymbolClassName = (symbol) => {
    if (symbol == SYMBOL_X) return "symbol--x";
    if (symbol == SYMBOL_O) return "symbol--o";
    return "";
  };

  return (
    <div className="flex flex-col items-center w-40 mt-auto mx-auto my-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />

      <div className="grid pt-px pl-px grid-cols-game-field grid-rows-game-field">
        {cells.map((symbol, index) => (
          <GameCell
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
            key={index}
          />
        ))}
      </div>
      <ResetButton onClick={handleResetClick} />
    </div>
  );
}
