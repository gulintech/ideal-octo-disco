import Button from '@/app/_components/Button';

function About() {
  return (
    <div className="flex flex-col">
      <div
        className="font-header-menu pt-[146px] text-[#8B758A] text-[90px] font-bold leading-[101.7px]">Software <br /> Development
      </div>
      <div className="pt-[30px] font-description text-[16px]">
        Transform your ideas into reality with our cutting-edge software
        <br /> development services. With our team of experienced developers, we
        <br /> deliver exceptional software that drives growth, efficiency, and success.
      </div>
      <div className="pt-[41px]"><Button href="#contacts" text="Start now" /></div>

    </div>
  );
}

export default About;
