import Link from 'next/link';

function Footer() {
  return (
    <div className="flex flex-col px-[74px] pt-[71px] bg-[#9DA3B8] border-t-2">
      <div className="flex items-start">
        <div className="flex items-center">
          <div className="rounded-full bg-[#8B758A] w-[30px] h-[30px]"></div>
          <div className="font-trademark relative -left-[19px] uppercase text-[24px] tracking-widest">gulin.tech</div>
        </div>

        <div className="flex ml-[412px] space-x-[282px] ">

          <div className="flex flex-col">
            <div className="font-footer-title font-bold ">Sitemap</div>
            <Link href="#scope" className="mt-[20px] font-footer-title ">What we do</Link>
            <Link href="#team" className="font-footer-title">Who we are</Link>
            <div>Imprint</div>
          </div>

          <div className="flex flex-col">
            <div className="font-footer-title font-bold mb-[20px]">Contacts</div>
            <div className="font-footer-title ">Zimmerstr. 94, 10117 Berlin</div>
          </div>
        </div>

      </div>
      <div className="border-[#262439] border-[0.5px] mt-[60px]" />
      <div className="flex justify-between my-[30px] font-footer-title">
        <div>Privacy Policy</div>
        <div>© 2024 GulinTech UG. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
