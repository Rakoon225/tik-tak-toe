import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";



export function useGamestate(playersCount){
    const [{ cells, currentMove }, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
      }))

      
      const winnerSequence = computeWinner(cells) 
      const nextMove = getNextMove(currentMove, playersCount);

      const handleCellClick = (index) => {
        setGameState((lastGamestate) => {

          if(lastGamestate.cells[index]){
            return lastGamestate
          }

          return{
            ...lastGamestate,
            currentMove: getNextMove(lastGamestate.currentMove, playersCount),
            cells: lastGamestate.cells.map((cell, i) =>
            i == index ? lastGamestate.currentMove : cell,
            ),
          }
        });
      }

      return{
        cells, currentMove, nextMove, handleCellClick, winnerSequence
      }

}