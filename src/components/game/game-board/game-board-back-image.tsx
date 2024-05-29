import Image from 'next/image';

const GameBoardBackImage = () => {
  return (
    <Image
      src={'/assets/images/board-layer-black-small.svg'}
      alt="board"
      width={335}
      height={310}
      className="-z-30 absolute top-0 left-1/2 transform -translate-x-1/2"
    />
  );
};

export { GameBoardBackImage };
