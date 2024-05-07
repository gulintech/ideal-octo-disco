import Image from 'next/image';

function Experience() {
  return (
      <div className="absolute flex items-start top-[60px] -rotate-90 -left-[10px]">
        <Image
          src="./stars.svg"
          alt="Picture of the author"
          width="22"
          height="22"
          className="rotate-90 relative -top-2"
        ></Image>
        <div
          className="rounded-full p-[7px] bg-[#FFFFFF99] shadow-[-2px_-2px_2px_0px_rgba(38,36,57,0.6)_inset] max-h-[38px]">
          Experience since 2012
        </div>
      </div>
  );
}

// box-shadow: 2px -2px 6px 0px rgba(255, 255, 255, 0.6) inset;
// box-shadow: -2px 2px 2px 0px rgba(38, 36, 57, 0.6) inset;

export default Experience;
