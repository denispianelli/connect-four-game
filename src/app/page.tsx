import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-5 flex flex-col gap-7 justify-center items-center min-h-screen md:bg-primary md:m-0">
      <Card className="bg-transparent md:bg-secondary border-none md:border-[3px] md:border-solid shadow-none md:shadow-[0_10px_0px_0px_rgba(0,0,0,1)]">
        <CardContent>
          <Image
            src={'/assets/images/logo.svg'}
            alt="Logo"
            width={52}
            height={52}
            className="mx-auto mt-[70px] mb-[79px]"
          />
          <div className="grid gap-6">
            <Link href={'/game'}>
              <Button className="justify-between bg-colorYellow w-[335px] md:w-[400px]">
                Play vs player
                <Image
                  src={'/assets/images/player-vs-player.svg'}
                  alt="player vs player"
                  width={82}
                  height={46}
                />{' '}
              </Button>
            </Link>
            <Link href="/rules">
              {' '}
              <Button className="flex justify-start w-[335px] md:w-[400px]">
                game rules
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
