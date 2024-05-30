import clsx from 'clsx';

interface FooterBackgroundProps {
  winner: number;
}

const GameFooterBackground: React.FC<FooterBackgroundProps> = ({ winner }) => {
  return (
    <div
      className={clsx(`-z-50 w-full h-full rounded-t-[60px] md:-my-10`, {
        'bg-primary': winner === 0,
        'bg-colorRed': winner === 1,
        'bg-colorYellow': winner === 2,
      })}
    />
  );
};

export { GameFooterBackground };
