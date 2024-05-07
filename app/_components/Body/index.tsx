import About from '@/app/_components/Body/About';
import Scope from '@/app/_components/Body/Scope';
import Team from '@/app/_components/Body/Team';
import Technologies from '@/app/_components/Body/Technologies';
import JoinUs from '@/app/_components/Body/JoinUs';

function Body() {
  return (
    <div className="flex flex-col">
      <About />
      <Scope />
      <Team />
      <Technologies />
      <JoinUs />
    </div>
  );
}

export default Body;
