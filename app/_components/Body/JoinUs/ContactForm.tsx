function ContactForm() {
  return (
    <div className="flex flex-col w-[443px]">
      <input type="text" placeholder="Your name" className="bg-[#BBC3D8] focus:outline-none font-placeholder" />
      <div className="border-[#262439] border-[0.5px]" />
      <input type="email" placeholder="Your email"
             className="bg-[#BBC3D8] focus:outline-none mt-[30px] font-placeholder" />
      <div className="border-[#262439] border-[0.5px]" />

      <textarea className="bg-[#BBC3D8] mt-[93px] focus:outline-none font-placeholder"
                placeholder="About your project"></textarea>
      <div className="border-[#262439] border-[0.5px]" />

      <div className="mt-[45px] font-card-text">
        By sending this form I confirm that I have read and accept the Privacy Policy
      </div>

      <button className="rounded-full bg-[#BB2CC4] px-[22px] py-[9px] text-[#F2E3FF] w-fit mt-[31px]">
        Send Request
      </button>
    </div>
  );
}

export default ContactForm;
