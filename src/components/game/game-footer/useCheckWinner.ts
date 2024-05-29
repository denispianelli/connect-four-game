const useCheckWinner = () => {
  const checkWinner = (
    board: number[][],
    row: number,
    col: number,
    player: number
  ): boolean => {
    const directions: { x: number; y: number }[] = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ];

    for (const { x, y } of directions) {
      let count = 1;
      for (let i = 1; i < 4; i++) {
        const newRow = row + i * y;
        const newCol = col + i * x;
        if (
          newRow < 0 ||
          newRow >= 6 ||
          newCol < 0 ||
          newCol >= 7 ||
          board[newRow][newCol] !== player
        )
          break;
        count++;
      }
      for (let i = 1; i < 4; i++) {
        const newRow = row - i * y;
        const newCol = col - i * x;
        if (
          newRow < 0 ||
          newRow >= 6 ||
          newCol < 0 ||
          newCol >= 7 ||
          board[newRow][newCol] !== player
        )
          break;
        count++;
      }
      if (count >= 4) return true;
    }
    return false;
  };

  return checkWinner;
};

export { useCheckWinner };
