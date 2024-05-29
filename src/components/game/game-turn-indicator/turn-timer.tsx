import clsx from 'clsx';

interface TurnTimerProps {
  currentPlayer: number;
  timeLeft: number;
}

const TurnTimer: React.FC<TurnTimerProps> = ({ currentPlayer, timeLeft }) => {
  return (
    <p
      className={clsx('text-headingL z-40', {
        'text-white': currentPlayer === 1,
        'text-black': currentPlayer === 2,
      })}
    >
      {timeLeft}s
    </p>
  );
};

export { TurnTimer };
