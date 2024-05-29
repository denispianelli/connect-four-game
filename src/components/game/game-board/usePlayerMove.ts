import { useCallback } from 'react';
import { useCheckWinner } from '../game-footer/useCheckWinner';

const usePlayerMove = ({
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
  setWinner,
  winner,
  resetCountdown,
  audioRef,
}: {
  board: number[][];
  setBoard: React.Dispatch<React.SetStateAction<number[][]>>;
  currentPlayer: number;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>;
  setWinner: React.Dispatch<React.SetStateAction<number | null>>;
  winner: number | null;
  resetCountdown: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}) => {
  const checkWinner = useCheckWinner();

  const handleClick = useCallback(
    (col: number): void => {
      if (winner) return;

      resetCountdown();
      const newBoard: number[][] = board.map((row: number[]) => row.slice());

      for (let row = 5; row >= 0; row--) {
        if (newBoard[row][col] === null) {
          newBoard[row][col] = currentPlayer;
          if (checkWinner(newBoard, row, col, currentPlayer)) {
            setWinner(currentPlayer);
          }
          break;
        }
      }

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }, 300);

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    },
    [
      board,
      currentPlayer,
      winner,
      resetCountdown,
      checkWinner,
      setBoard,
      setCurrentPlayer,
      setWinner,
      audioRef,
    ]
  );

  return handleClick;
};

export { usePlayerMove };
