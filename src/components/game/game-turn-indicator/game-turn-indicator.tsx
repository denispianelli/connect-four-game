import Image from 'next/image';
import { PlayerTurnDisplay } from './player-turn-display';
import { TurnTimer } from './turn-timer';

interface GameTurnIndicatorProps {
  currentPlayer: number;
  timeLeft: number;
}

const GameTurnIndicator: React.FC<GameTurnIndicatorProps> = ({
  currentPlayer,
  timeLeft,
}) => {
  return (
    <div className="absolute flex flex-col items-center justify-center md:bottom-5 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] w-[191px] h-[150px]">
      <Image
        src={`/assets/images/turn-background-${
          currentPlayer === 1 ? 'red' : 'yellow'
        }.svg`}
        alt="turn background"
        width={191}
        height={150}
        className="absolute top-0 left-0"
      />
      <PlayerTurnDisplay currentPlayer={currentPlayer} />
      <TurnTimer currentPlayer={currentPlayer} timeLeft={timeLeft} />
    </div>
  );
};

export { GameTurnIndicator };
