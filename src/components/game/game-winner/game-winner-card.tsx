'use client';
import { useEffect, useRef } from 'react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';

interface WinnerCardProps {
  winner: number;
  resetGame: () => void;
}

const GameWinnerCard: React.FC<WinnerCardProps> = ({ winner, resetGame }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (winner !== 0 && audioRef.current) {
      audioRef.current.play();
    }
  }, [winner]);

  return (
    <Card className="w-[285px] h-[160px] mx-auto uppercase text-center text-headingXs py-[17px] absolute -bottom-[140px] md:-bottom-[120px] left-1/2 -translate-x-1/2">
      <p className="uppercase text-headingL leading-[65px]">draw</p>
      <Button variant={'secondary'} className="w-[130px]" onClick={resetGame}>
        play again
      </Button>
      <audio ref={audioRef} src="/sounds/victory.mp3" />
    </Card>
  );
};

export { GameWinnerCard };
