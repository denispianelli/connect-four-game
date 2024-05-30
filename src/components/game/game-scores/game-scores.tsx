'use client';

import Image from 'next/image';
import { Card } from '../../ui/card';

const GameScorePlayer: React.FC<{
  player: number;
  score: number;
}> = ({ player, score }) => {
  return (
    <>
      <p className="md:text-headingS md:mx-[44px] xl:mx-0">Player {player}</p>
      <p className="text-[32px] md:mx-[20px] md:text-headingL">{score}</p>
    </>
  );
};

const GameScores: React.FC<{
  playerOneScore: number;
  playerTwoScore: number;
}> = ({ playerOneScore, playerTwoScore }) => {
  return (
    <div className="flex justify-center mx-auto gap-[21px] md:gap-[41px] mb-[50px] md:mb-[32px] md:w-[633px] md:h-[100px] xl:w-fit xl:mx-0 xl:justify-self-end">
      <Card className="relative w-[142px] md:w-[272px] h-[81px] md:h-[100px] text-center text-headingXs uppercase py-[10px] flex md:flex-row items-center flex-col justify-between xl:flex-col xl:w-[141px] xl:h-[160px] xl:justify-end">
        <GameScorePlayer player={1} score={playerOneScore} />
        <Image
          src={'/assets/images/player-one.svg'}
          alt="player one"
          width={54}
          height={59}
          className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:top-0 xl:-translate-x-1/2 xl:left-1/2"
        />
      </Card>
      <Card className="relative w-[142px] md:w-[272px] h-[81px] md:h-[100px] text-center text-headingXs uppercase py-[10px] flex md:flex-row-reverse items-center flex-col justify-between xl:hidden">
        <GameScorePlayer player={2} score={playerTwoScore} />
        <Image
          src={'/assets/images/player-two.svg'}
          alt="player one"
          width={54}
          height={59}
          className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2"
        />
      </Card>
    </div>
  );
};

export { GameScores };
