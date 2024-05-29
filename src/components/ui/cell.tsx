import Image from 'next/image';

export default function Cell({
  value,
  onClick,
}: {
  value: number;
  onClick: () => void;
}) {
  const getColor = () => {
    if (value === 1) return 'red';
    if (value === 2) return 'yellow';
    return null;
  };
  return (
    <button onClick={onClick} className="w-[39px] h-[36px] ">
      {getColor() !== null && (
        <Image
          src={`/assets/images/counter-${getColor()}-small.svg`}
          alt="cell"
          width={40}
          height={45}
          className="animate-drop absolute -translate-y-1/2 -z-20"
        />
      )}
    </button>
  );
}
