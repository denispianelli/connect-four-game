'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type MenuButtonProps = {
  restartGame: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ restartGame }) => {
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'secondary'}>Menu</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[335px] h-[437px] md:w-[480px] md:h-[491px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Pause</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="space-y-[30px]">
          <AlertDialogAction>Continue Game</AlertDialogAction>
          <AlertDialogAction onClick={restartGame}>Restart</AlertDialogAction>
          <AlertDialogCancel onClick={() => router.push('/')}>
            Quit Game
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { MenuButton };
