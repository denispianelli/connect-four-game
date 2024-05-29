import { useCallback, useEffect, useState } from 'react';

const usePlayerScores = (winner: number) => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  useEffect(() => {
    if (winner === 1) {
      setPlayerOneScore((prev) => prev + 1);
    }
    if (winner === 2) {
      setPlayerTwoScore((prev) => prev + 1);
    }
  }, [winner]);

  const resetScores = useCallback(() => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }, []);

  return { playerOneScore, playerTwoScore, resetScores };
};

export { usePlayerScores };
