import { useState, useEffect } from 'react';

export interface WinnerState {
  winner: number;
  setWinner: React.Dispatch<React.SetStateAction<number>>;
}

const useWinner = (
  currentPlayer: number,
  timeLeft: number,
  resetCountdown: () => void,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>
): WinnerState => {
  const [winner, setWinner] = useState<number>(0);

  useEffect(() => {
    if (timeLeft === 0) {
      setWinner(currentPlayer === 1 ? 2 : 1);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  useEffect(() => {
    if (winner) resetCountdown();
  }, [winner, resetCountdown]);

  return { winner, setWinner };
};

export { useWinner };
