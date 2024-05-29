import { Button } from '../../ui/button';
import { Card } from '../../ui/card';

interface WinnerCardProps {
  winner: number;
  resetGame: () => void;
}

const GameWinnerCard: React.FC<WinnerCardProps> = ({ winner, resetGame }) => {
  return (
    <Card className="w-[285px] h-[160px] mx-auto uppercase text-center text-headingXs py-[17px]">
      <p className="leading-none">Player {winner}</p>
      <p className="uppercase text-headingL leading-[65px]">wins</p>
      <Button variant={'secondary'} className="w-[130px]" onClick={resetGame}>
        play again
      </Button>
    </Card>
  );
};

export { GameWinnerCard };
