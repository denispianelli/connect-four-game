import Image from 'next/image';
import { MenuButton } from './menu-button';
import { Button } from '@/components/ui/button';

export default function GameHeader({
  restartGame,
}: {
  restartGame: () => void;
}) {
  return (
    <header className="w-[335px] h-[40px] flex justify-between mx-auto mb-[50px]">
      <MenuButton restartGame={restartGame} />
      <Image
        src={'/assets/images/logo.svg'}
        alt="Logo"
        width={40}
        height={40}
      />
      <Button onClick={restartGame} variant={'secondary'}>
        Restart
      </Button>
    </header>
  );
}
