'use client';

import { Button } from '../../ui/button';
import { Card } from '../../ui/card';

interface DrawCardProps {
  resetGame: () => void;
}

const GameDrawCard: React.FC<DrawCardProps> = ({ resetGame }) => {
  return (
    <Card className="w-[285px] h-[160px] mx-auto uppercase text-center text-headingXs py-[17px] absolute -bottom-[140px] md:-bottom-[120px] left-1/2 -translate-x-1/2">
      <p className="uppercase text-headingL leading-[65px]">draw</p>
      <Button variant={'secondary'} className="w-[130px]" onClick={resetGame}>
        play again
      </Button>
    </Card>
  );
};

export { GameDrawCard };
