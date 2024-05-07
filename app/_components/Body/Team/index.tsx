import Image from 'next/image';
import Declaration from '@/app/_components/Body/Team/Declaration';

function Index() {
  return (
    <div
      className="relative -z-10 grid grid-cols-4 grid-rows-6 gap-0  border-dashed border-gray-500 bg-[#BBC3D8]">

      {/*first column*/}
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-2 border-b border-r border-dashed border-gray-500 h-[140px]" />

      <div id="team"
        className="row-start-2 row-end-4 col-start-1 col-end-2 border-b border-r border-dashed border-gray-500 flex justify-end">
        <Image
          src="./team.svg"
          alt="Picture of the author"
          width="1"
          height="1"
          className="w-[313px]"
        />
      </div>

      <div className="row-start-4 row-end-6 col-start-1 col-end-2 border-b border-r border-dashed border-gray-500">
        <Declaration direction="right" position="bottom" title="Reliability"
                     text="Your confidence about outstanding results of our cooperation is our priority" />
      </div>

      <div className="row-start-6 col-start-1 col-end-2 border-r border-dashed border-gray-500" />

      {/*second column*/}
      <div className="row-start-1 row-end-2 col-start-2 col-end-3 border-b border-r border-dashed border-gray-500" />

      <div className="row-start-2 row-end-4 col-start-2 col-end-3 border-b border-r border-dashed border-gray-500">
        <Declaration direction="left" position="top" title="Experience"
                     text="Our team has more than 10 years experience in software development industry" />
      </div>

      <div className="row-start-4 row-end-6 col-start-2 col-end-3 border-b border-r border-dashed border-gray-500">
        <Declaration direction="left" position="bottom" title="Versatility"
                     text="Our team is competence in various areas and can offer a great range of solutions" />
      </div>
      <div className="row-start-6 row-end-7 col-start-2 col-end-3 border-r border-dashed border-gray-500" />

      {/*third column*/}
      <div className="row-start-1 row-end-2 col-start-3 col-end-4 border-b border-r border-dashed border-gray-500" />
      <div
        className="row-start-2 row-end-6 col-start-3 col-end-5 row-span-2 col-span-2 rounded-3xl shadow-[2px_-2px_5px_0px_rgba(38,36,57,0.6)_inset]">

        <div className="flex flex-col mt-[53px] ml-[125px] mr-[146px]">
          <Image
            src="./team-text.svg"
            alt="Picture of the author"
            width="1"
            height="1"
            className="w-[313px]"
          />
          <div className="mt-[45px] font-card-text">The team behind GulinTech company entered the industry of software
            development in 2012 to meet the needs of start-ups as well as to improve the performance of existing
            businesses. Our diverse team stays ahead of the curve, embracing the latest industry trends and
            technologies. With a focus on quality and collaboration, we turn visions into remarkable results.
          </div>
        </div>

      </div>

      <div className="row-start-6 row-end-7 col-start-3 col-end-4 border-r border-t border-dashed border-gray-500" />


      {/*forth column*/}
      <div className="row-start-1 row-end-2 col-start-4 col-end-5 border-b border-dashed border-gray-500" />
      <div className="row-start-6 row-end-7 col-start-4 col-end-5 border-t border-dashed border-gray-500" />
    </div>

  );
}

export default Index;
