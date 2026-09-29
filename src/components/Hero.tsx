import heroImage from "../assets/images/heroImage.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-180 overflow-hidden sm:min-h-[calc(100svh-90px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[51%] h-175 w-[min(86vw,850px)] -translate-x-1/2 rounded-[50%] bg-[#c8ff00]"
      />

      <div className="relative z-10 mx-auto flex max-w-225 flex-col items-center px-5 pt-8 text-center sm:px-8 sm:pt-9">
        <h1 className="m-0 max-w-195 text-[38px] font-bold leading-[1.16] text-white sm:text-[52px]">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>

        <p className="mt-9 max-w-190 text-[13px] leading-6 text-white/85 sm:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <SearchBar className="mt-9" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[57%] z-20 mx-auto hidden h-20 w-[min(100%-2rem,474px)] sm:block"
      >
        <div className="absolute left-0 top-0 w-39 rounded-xl bg-white px-3 py-2.5 text-left text-[10px] leading-4 text-[#171923] shadow-lg shadow-black/10">
          <div className="font-medium">UI/UX Design</div>
          <div className="text-[9px] text-[#9297a1]">200 Courses&nbsp; • &nbsp;1000+ Students</div>
        </div>
        <div className="absolute right-0 top-2 w-43.75 rounded-xl bg-white px-3 py-2.5 text-left text-[#171923] shadow-lg shadow-black/10">
          <div className="text-[10px]">Learning Progress</div>
          <div className="mt-0.5 text-[34px] font-semibold leading-none">55%</div>
          <div className="mt-2 h-1.25 rounded-full bg-[#f0f0f0]">
            <div className="h-full w-[55%] rounded-full bg-[##D4FB20]" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-97.5 max-w-225"
      >
        <img
          src={heroImage}
          alt=""
          className="absolute bottom-0 left-1/2 z-10 w-[min(86vw,370px)] max-w-none -translate-x-1/2 sm:w-92.5"
        />
        <div className="absolute bottom-12 left-1/2 z-20 hidden w-48.5 -translate-x-73.5 rounded-xl bg-white px-3 py-2.5 text-left text-[#171923] shadow-lg shadow-black/10 sm:block">
          <div className="text-[10px] font-medium">Happy Students</div>
          <div className="text-[9px] leading-3 text-[#9297a1]">4.5 (240) <span className="text-[#c8ff00]">★</span></div>
          <div className="mt-1.5 flex items-center">
            <span className="h-7 w-7 rounded-full border-2 border-white bg-[#d99b72]" />
            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#7b463e]" />
            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#e3bc94]" />
            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#52565f]" />
            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#b88264]" />
            <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[8px] font-semibold">2K+</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute -right-14 top-[15%] hidden h-52.5 w-38.75 rotate-[-25deg] rounded-[42%_12%_18%_22%] bg-[#c8ff00] md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-14 top-[19%] hidden rotate-27 md:flex md:flex-col md:gap-2">
        <span className="h-8 w-36 rounded-full bg-[#CBFC01]" />
        <span className="ml-7 h-8 w-28 rounded-full bg-[##CBFC01]" />
        <span className="-ml-3 h-8 w-36 rounded-full bg-[#CBFC01]" />
        <span className="ml-3 h-8 w-32 rounded-full bg-[#CBFC01]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-[5%] top-[69%] hidden h-37 w-44.5 rotate-[-28deg] rounded-full border-24 border-white md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[13%] top-[41%] hidden h-26 w-22 rotate-10 bg-white [clip-path:polygon(78%_0,100%_100%,0_64%)] md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[4%] top-[65%] hidden rotate-22 flex-col gap-2 md:flex">
        <span className="h-8 w-24 rotate-[-24deg] rounded-full bg-white" />
        <span className="h-8 w-28 rotate-13 rounded-full bg-white" />
        <span className="h-8 w-24 rotate-[-18deg] rounded-full bg-white" />
        <span className="h-8 w-20 rotate-20 rounded-full bg-white" />
      </div>
    </section>
  );
};
export default Hero;