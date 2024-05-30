import { Game } from '@/components/game/game';

export default function Page() {
  return (
    <main className="h-screen flex flex-col pt-[50px] md:pt-[30px] overflow-hidden">
      <Game />
    </main>
  );
}
