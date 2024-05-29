import Image from 'next/image';

const GameBoardFrontImage = () => {
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
