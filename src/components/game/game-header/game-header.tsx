import Image from 'next/image';
import { MenuButton } from './menu-button';
import { Button } from '@/components/ui/button';

export default function GameHeader({
  restartGame,
}: {
  restartGame: () => void;
}) {
  return (
    <header className="w-[335px] h-[40px] md:w-[632px] md:h-[52px] flex justify-between items-center mx-auto mb-[50px] md:mb-[32px] xl:mb-[51px]">
      <MenuButton restartGame={restartGame} />
      <div className="w-[40px] h-[40px] md:h-[52px] md:w-[52px] relative">
        <Image src={'/assets/images/logo.svg'} alt="Logo" fill />
      </div>
      <Button onClick={restartGame} variant={'secondary'}>
        Restart
      </Button>
    </header>
  );
}
