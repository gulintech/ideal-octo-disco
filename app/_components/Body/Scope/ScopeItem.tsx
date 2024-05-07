function ScopeItem({ idx, title, text }: { idx: number, title: string, text: string }) {
  return (
    <div className="relative -left-[34px] flex space-x-[138px] pl-[34px] py-[26px] max-w-[550px] border-[0.5px] border-[#BBC3D8] hover:border-[#262439] hover:border-[0.5px] hover:rounded-3xl">

      <div
        className="font-header-menu font-bold leading-[30.24px] text-[24px] text-[#BB2CC4]">{`${idx.toString().padStart(2, '0')}.`}
      </div>

      <div className="flex flex-col relative -top-[15px]">
        <div className="font-card-title">{title}</div>
        <div className="relative -left-[100px] border-[#262439] border-[0.5px]" />
        <div className="font-card-text max-w-[289px] mt-[16px]">{text}</div>
      </div>

    </div>
  );
}

export default ScopeItem;
