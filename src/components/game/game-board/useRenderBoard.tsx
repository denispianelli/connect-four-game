import Cell from '@/components/ui/cell';
import React from 'react';

export interface RenderBoard {
  renderRow: (row: (string | null)[], rowIndex: number) => JSX.Element;
}

const useRenderBoard = (
  board: any[],
  handleClick: (col: number) => void
): RenderBoard => {
  const renderCell = (row: number, col: number): JSX.Element => {
    return (
      <Cell
        key={col}
        value={board[row][col]}
        onClick={() => handleClick(col)}
      />
    );
  };

  const renderRow = (row: (string | null)[], rowIndex: number): JSX.Element => {
    return (
      <div key={rowIndex} className="h-[39px] m-2 flex gap-2 z-50">
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </div>
    );
  };

  return { renderRow };
};

export { useRenderBoard };
