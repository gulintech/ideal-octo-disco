import Image from 'next/image';

function Index() {
  return (
    <div className="bg-[#9DA3B8] flex flex-col pt-[90px] px-[56px] border-t-2 shadow-[2px_-2px_5px_0px_rgba(38,36,57,0.6)_inset]">
      <div className="flex justify-between">

        <Image
          src="./aws.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./gcp.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./kafka.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./graphql.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./figma.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./openai.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />

        <Image
          src="./kubernetes.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-fit"
        />
      </div>
      <div className="mt-[32px] text-center font-declaration-text mb-[55px]">We use the best technologies</div>
    </div>
  );
}

export default Index;
