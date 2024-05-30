'use client';

import { useEffect } from 'react';
import { GameBoard } from './game-board/game-board';
import { useGameBoard } from './game-board/useGameBoard';
import { useResetGame } from './game-board/useResetGame';
import { GameFooterBackground } from './game-footer/game-footer-background';
import useCountdown from './game-footer/useCountdown';
import { useWinner } from './game-footer/useWinner';
import GameHeader from './game-header/game-header';
import { useRestartGame } from './game-header/useRestartGame';
import { GameScores } from './game-scores/game-scores';
import { PlayerTwoScore } from './game-scores/player-two-score';
import { usePlayerScores } from './game-scores/usePlayerScore';

const Game: React.FC = () => {
  const { timeLeft, resetCountdown } = useCountdown(30);
  const {
    board,
    currentPlayer,
    setBoard,
    setCurrentPlayer,
    resetBoard,
    isDraw,
  } = useGameBoard();
  const { winner, setWinner } = useWinner(
    currentPlayer,
    timeLeft,
    resetCountdown,
    setCurrentPlayer
  );
  const resetGame = useResetGame({ resetBoard, setWinner });

  const gameBoardProps = {
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    setWinner,
    winner,
    resetCountdown,
    timeLeft,
    resetGame,
    isDraw,
  };

  const { playerOneScore, playerTwoScore, resetScores } =
    usePlayerScores(winner);

  const restartGame = useRestartGame({
    resetBoard,
    setWinner,
    resetCountdown,
    resetScores,
  });

  useEffect(() => {
    if (isDraw) resetCountdown();
  });

  return (
    <>
      <GameHeader restartGame={restartGame} />
      <div className="grid xl:grid xl:grid-cols-[auto,752px,auto] items-center">
        <GameScores
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
        />
        <GameBoard gameBoardProps={gameBoardProps} />
        <PlayerTwoScore playerTwoScore={playerTwoScore} />
      </div>
      <GameFooterBackground winner={winner} />
    </>
  );
};

export { Game };
