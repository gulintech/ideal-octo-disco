import Image from 'next/image';
import ContactForm from '@/app/_components/Body/JoinUs/ContactForm';

function Index() {
  return (
    <div id="contacts" className="flex flex-col bg-[#BBC3D8] pt-[70px] pb-[152px]">
      <div className="font-header text-center">
        Ready to start your new project?
        <br />
        Contact us!
      </div>
      <div className="flex mt-[80px] ml-[146px] items-center space-x-[129px]">
        <Image
          src="./contact.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-[576px]"
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default Index;
