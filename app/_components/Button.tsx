import Link from 'next/link';

function Button({ href, text }: { href: string, text: string }) {
  return (
    <Link href={href} className="rounded-full bg-[#BB2CC4] px-[22px] py-[9px] text-[#F2E3FF]">{text}</Link>
  );
}

export default Button;
