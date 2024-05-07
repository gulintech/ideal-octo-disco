import Image from 'next/image';
import ScopeItem from '@/app/_components/Body/Scope/ScopeItem';

function Index() {
  return (
    <div className="relative bg-[#BBC3D8]">

      <div
           className="absolute rotate-12 w-[102%] border-t-2 rounded-3xl border-b-0 h-[200px] -left-[35px]"></div>

      <div className="pl-[146px] flex flex-col border-b-2 rounded-3xl border-[#262439] pb-[30px]">

        <Image id="scope"
          src="./scope-text.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-[313px]"
        />

        <div className="flex">
          <div className="flex flex-col">
            <ScopeItem idx={1} title="Web design"
                       text="Creating captivating websites that amplify your brand's impact and delight users." />
            <ScopeItem idx={2} title="Front-end development"
                       text="Empowering your online vision with seamless and responsive front-end development expertise." />
            <ScopeItem idx={3} title="Back-end development"
                       text="Behind the scenes, our back-end development fuels your digital success with efficiency and security." />
            <ScopeItem idx={4} title="Technical support"
                       text="Unlock hassle-free technology usage with our reliable and responsive technical support service." />
          </div>

          <Image
            src="./scope-man.svg"
            alt="Picture of the author"
            width="1"
            height="1"
            className="ml-[46px] w-[656px]"
          />

        </div>
      </div>

      <Image
        src="./scope-circle.svg"
        alt="Picture of the author"
        width="1"
        height="1"
        className="absolute ml-[830px] w-[167px] -bottom-[75px]"
      />
    </div>
  );
}

export default Index;
