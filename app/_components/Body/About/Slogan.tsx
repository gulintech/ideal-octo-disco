import Image from 'next/image';

function Slogan() {
  return (
      <Image
        src="./slogan.svg"
        alt="Picture of the author"
        width="1"
        height="1"
        className="relative -top-[120px] -left-[195px] w-[966px]"
      />
  );
}

export default Slogan;
