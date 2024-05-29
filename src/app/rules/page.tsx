import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import IconCheck from '@/components/ui/icon-check';

export default function Page() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Card className="w-[335px] h-[618px] md:w-[480px] md:h-[569px]">
        <CardHeader>
          <CardTitle>rules</CardTitle>
        </CardHeader>
        <CardContent className="font-medium">
          <h4 className="uppercase text-[20px] leading-[26px] font-bold text-secondary mb-4">
            objective
          </h4>
          <p className="leading-[21px] text-black/65 mb-[33px]">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
          <h4 className="uppercase text-[20px] leading-[26px] font-bold text-secondary mb-4">
            how to play
          </h4>
          <ol className="leading-[21px] text-black/65 mb-[33px] [&>li>span]:text-black [&>li>span]:mr-[19px] space-y-[10px]">
            <li className="flex">
              <span>1</span>Red goes first in the first game.
            </li>
            <li className="flex">
              <span>2</span>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li className="flex">
              <span>3</span>The game ends when there is a 4-in-a-row or a
              stalemate.
            </li>
            <li className="flex">
              <span>4</span>
              The strater of the previous game goes second on the next game.
            </li>
          </ol>
        </CardContent>
        <Link href={'/'}>
          <IconCheck />
        </Link>
      </Card>
    </main>
  );
}
