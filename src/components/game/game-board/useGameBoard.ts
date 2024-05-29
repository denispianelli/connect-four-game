import { useState } from 'react';

const useGameBoard = (initialPlayer = 1) => {
  const initialBoard = Array(6).fill(Array(7).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);

  const resetBoard = () => {
    setBoard(initialBoard);
  };

  return { board, currentPlayer, setBoard, setCurrentPlayer, resetBoard };
};

export { useGameBoard };
