'use client';

import { GameBoard } from './game/game-board/game-board';
import { useGameBoard } from './game/game-board/useGameBoard';
import { useResetGame } from './game/game-board/useResetGame';
import { GameFooterBackground } from './game/game-footer/game-footer-background';
import useCountdown from './game/game-footer/useCountdown';
import { useWinner } from './game/game-footer/useWinner';
import GameHeader from './game/game-header/game-header';
import { useRestartGame } from './game/game-header/useRestartGame';
import GameScores from './game/game-scores/game-scores';
import { usePlayerScores } from './game/game-scores/usePlayerScore';

const Game: React.FC = () => {
  const { timeLeft, resetCountdown } = useCountdown(30);
  const { board, currentPlayer, setBoard, setCurrentPlayer, resetBoard } =
    useGameBoard();
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
  };

  const { playerOneScore, playerTwoScore, resetScores } =
    usePlayerScores(winner);

  const restartGame = useRestartGame({
    resetBoard,
    setWinner,
    resetCountdown,
    resetScores,
  });

  return (
    <>
      <GameHeader restartGame={restartGame} />
      <GameScores
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <GameBoard gameBoardProps={gameBoardProps} />
      <GameFooterBackground winner={winner} />
    </>
  );
};

export { Game };
