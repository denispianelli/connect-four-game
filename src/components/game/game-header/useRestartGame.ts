import { useCallback } from 'react';

interface RestartGameProps {
  resetBoard: () => void;
  setWinner: (winner: number) => void;
  resetCountdown: () => void;
  resetScores: () => void;
}

const useRestartGame = ({
  resetBoard,
  setWinner,
  resetCountdown,
  resetScores,
}: RestartGameProps): (() => void) => {
  const restartGame = useCallback(() => {
    resetBoard();
    setWinner(0);
    resetCountdown();
    resetScores();
  }, [resetBoard, setWinner, resetCountdown, resetScores]);

  return restartGame;
};

export { useRestartGame };
