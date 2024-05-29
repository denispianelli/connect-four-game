import clsx from 'clsx';

interface GamePlayerTurnProps {
  currentPlayer: number;
}

const PlayerTurnDisplay: React.FC<GamePlayerTurnProps> = ({
  currentPlayer,
}) => {
  return (
    <p
      className={clsx('text-headingXs mt-[30px] uppercase z-40', {
        'text-white': currentPlayer === 1,
        'text-black': currentPlayer === 2,
      })}
    >
      Player {currentPlayer === 1 ? '1' : '2'}&apos;s turn
    </p>
  );
};

export { PlayerTurnDisplay };
