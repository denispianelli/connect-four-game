import { useEffect, useState } from 'react';

const useGameBoard = (initialPlayer = 1) => {
  const initialBoard = Array(6).fill(Array(7).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [isDraw, setIsDraw] = useState(false);

  const checkDraw = (board: Array<Array<number | null>>): boolean => {
    return board.every((row) => row.every((cell) => cell !== null));
  };

  useEffect(() => {
    if (checkDraw(board)) {
      setIsDraw(true);
    }
  }, [board]);

  const resetBoard = () => {
    setBoard(initialBoard);
    setIsDraw(false);
  };

  return {
    board,
    currentPlayer,
    setBoard,
    setCurrentPlayer,
    resetBoard,
    isDraw,
  };
};

export { useGameBoard };
