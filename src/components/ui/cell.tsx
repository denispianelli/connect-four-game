'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Cell({
  value,
  onClick,
}: {
  value: number;
  onClick: () => void;
}) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getColor = () => {
    if (value === 1) return 'red';
    if (value === 2) return 'yellow';
    return null;
  };
  return (
    <button
      onClick={onClick}
      className="w-[39px] md:w-[64px] md:h-[70px] h-[36px] "
    >
      {getColor() !== null && (
        <Image
          src={`/assets/images/counter-${getColor()}-${
            isTablet ? 'large' : 'small'
          }.svg`}
          alt="cell"
          width={isTablet ? 67 : 40}
          height={isTablet ? 65 : 45}
          className="animate-drop absolute -translate-y-1/2 -z-20"
        />
      )}
    </button>
  );
}
