'use client';

import { useRef } from 'react';
import { usePlayerMove } from './usePlayerMove';
import { useRenderBoard } from './useRenderBoard';
import { useResetGame } from './useResetGame';
import { GameTurnIndicator } from '../game-turn-indicator/game-turn-indicator';
import { GameWinnerCard } from '../game-winner/game-winner-card';
import { GameBoardBackImage } from './game-board-back-image';
import { GameBoardFrontImage } from './game-board-front-image';

const GameBoard = ({ gameBoardProps }: { gameBoardProps: any }) => {
  const {
    board,
    currentPlayer,
    setBoard,
    setCurrentPlayer,
    setWinner,
    winner,
    timeLeft,
    resetCountdown,
    resetGame,
  } = gameBoardProps;

  const audioRef = useRef(null);

  const playerMove = usePlayerMove({
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    setWinner: setWinner as React.Dispatch<React.SetStateAction<number | null>>,
    winner,
    resetCountdown,
    audioRef,
  });

  const { renderRow } = useRenderBoard(board, playerMove);
  // const resetGame = useResetGame({ resetBoard, setWinner });

  return (
    <div className="relative w-[335px] min-h-[310px] mx-auto">
      {board.map((row: string[], rowIndex: number) => renderRow(row, rowIndex))}
      <GameBoardBackImage />
      <GameBoardFrontImage />
      {!winner && (
        <GameTurnIndicator currentPlayer={currentPlayer} timeLeft={timeLeft} />
      )}
      {winner && <GameWinnerCard winner={winner} resetGame={resetGame} />}
      <audio ref={audioRef} src="/sounds/sliding.mp3" preload="auto" />
    </div>
  );
};

export { GameBoard };
