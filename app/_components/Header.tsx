import Link from 'next/link';
import Button from '@/app/_components/Button';

function Header() {
  return (
    <div className="py-[31px] flex flex-col space-y-[22px] px-[74px] bg-[#BBC3D8]">
      <div className="flex items-center justify-between">
        {/*trademark*/}
        <div className="flex items-center">
          <div className="rounded-full bg-[#8B758A] w-[30px] h-[30px]"></div>
          <div className="font-trademark relative -left-[19px] uppercase text-[24px] tracking-widest">gulin.tech</div>
        </div>

        {/*menu*/}
        <div className="relative font-header-menu flex space-x-[70px] ml-[87px] text-[16px] z-10">
          <Link href="#scope">What we do</Link>
          <Link href="#team">Who we are</Link>
          {/*<Link href="#our-projects">Our projects</Link>*/}
        </div>

        {/*language, contacts*/}
        <div className="relative font-header-menu flex space-x-[70px] ml-[380px] text-[16px] items-center z-10">
          {/*<Link href="/de">DE</Link>*/}
          <Button href="#contacts" text="Contact us" />
          {/*<Link href="#contacts" className="rounded-full bg-[#BB2CC4] px-[22px] py-[9px]">Contact us</Link>*/}
        </div>
      </div>

      {/*horizontal line*/}
      <div className="border-[#F2E3FF] border-[0.5px]"></div>
    </div>
  );
}

export default Header;
