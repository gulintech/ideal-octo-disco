import Experience from '@/app/_components/Body/About/Experience';
import About from '@/app/_components/Body/About/About';
import Slogan from '@/app/_components/Body/About/Slogan';

function Index() {
  return (
    <div className="flex relative pl-[146px] bg-[#BBC3D8] ">
      <Experience />
      <About />
      <Slogan />
    </div>
  );
}

export default Index;
