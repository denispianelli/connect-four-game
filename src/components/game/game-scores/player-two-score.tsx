import { Card } from '@/components/ui/card';
import Image from 'next/image';

const PlayerTwoScore: React.FC<{ playerTwoScore: number }> = ({
  playerTwoScore,
}) => {
  return (
    <Card className="hidden relative text-center text-headingXs uppercase py-[10px] xl:flex md:flex-row items-center flex-col justify-between xl:flex-col xl:w-[141px] xl:h-[160px] xl:justify-end">
      <p className="md:text-headingS md:mx-[44px] xl:mx-0">Player 2</p>
      <p className="text-[32px] md:mx-[20px] md:text-headingL">
        {playerTwoScore}
      </p>{' '}
      <Image
        src={'/assets/images/player-two.svg'}
        alt="player one"
        width={54}
        height={59}
        className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:top-0 xl:-translate-x-1/2 xl:left-1/2"
      />
    </Card>
  );
};

export { PlayerTwoScore };
