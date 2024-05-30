'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const GameBoardFrontImage = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isTablet) {
    return (
      <Image
        src={'/assets/images/board-layer-white-large.svg'}
        alt="board"
        width={632}
        height={584}
        className="-z-10 absolute top-0 left-1/2 transform -translate-x-1/2 "
      />
    );
  }

  return (
    <Image
      src={'/assets/images/board-layer-white-small.svg'}
      alt="board"
      width={335}
      height={310}
      className="-z-10 absolute top-0 left-1/2 transform -translate-x-1/2"
    />
  );
};

export { GameBoardFrontImage };
