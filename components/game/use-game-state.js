import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";


function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex % MOVE_ORDER.length];
}

export function useGamestate(){
    const [{ cells, currentMove }, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
      }))

      const nextMove = getNextMove(currentMove);
      const handleCellClick = (index) => {
        setGameState((lastGamestate) => {

          if(lastGamestate.cells[index]){
            return lastGamestate
          }

          return{
            ...lastGamestate,
            currentMove: getNextMove(lastGamestate.currentMove),
            cells: lastGamestate.cells.map((cell, i) =>
            i == index ? lastGamestate.currentMove : cell,
            ),
          }
        });
      }

      return{
        cells, currentMove, nextMove, handleCellClick
      }

}