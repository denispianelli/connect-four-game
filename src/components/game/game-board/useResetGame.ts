import { useCallback } from 'react';

interface ResetGameProps {
  resetBoard: () => void;
  setWinner: (winner: number) => void;
}

const useResetGame = ({
  resetBoard,
  setWinner,
}: ResetGameProps): (() => void) => {
  const resetGame = useCallback(() => {
    resetBoard();
    setWinner(0);
  }, [resetBoard, setWinner]);

  return resetGame;
};

export { useResetGame };
