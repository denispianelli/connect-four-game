'use client';

import Image from 'next/image';
import { Card } from '../../ui/card';

export default function GameScores({
  playerOneScore,
  playerTwoScore,
}: {
  playerOneScore: number;
  playerTwoScore: number;
}) {
  return (
    <div className="flex justify-center gap-[21px] mb-[50px]">
      <Card className="relative w-[142px] h-[81px] text-center text-headingXs uppercase py-[10px] flex flex-col justify-between">
        <p>Player 1</p>
        <p className="text-[32px]">{playerOneScore}</p>
        <Image
          src={'/assets/images/player-one.svg'}
          alt="player one"
          width={54}
          height={59}
          className="absolute left-0 -translate-x-1/2"
        />
      </Card>
      <Card className="relative w-[142px] h-[81px] text-center text-headingXs uppercase py-[10px] flex flex-col justify-between">
        <p>Player 2</p>
        <p className="text-[32px]">{playerTwoScore}</p>
        <Image
          src={'/assets/images/player-two.svg'}
          alt="player one"
          width={54}
          height={59}
          className="absolute right-0 translate-x-1/2"
        />
      </Card>
    </div>
  );
}
