import heroImage from "../assets/images/heroImage.svg";
import Heading from "./common/Heading";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-215 overflow-hidden bg-persian-blue-800 sm:min-h-225 lg:min-h-250"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Lime center blob */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[54%]
          h-135 w-135
          -translate-x-1/2
          rounded-[50%]
          bg-electric-lime-400

          sm:top-[56%]
          sm:h-160 sm:w-160

          lg:top-[58%]
          lg:h-190 lg:w-190

          xl:h-215 xl:w-215
        "
      />

      {/* Heading + description + search */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-225
          flex-col items-center
          px-4 pt-12 text-center

          sm:px-6 sm:pt-16
          md:px-8 md:pt-18
          lg:px-10 lg:pt-20
        "
      >
        <Heading
          title={
            <>
              Get Access to Hundreds
              <br />
              Courses Available
            </>
          }
          description="Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
          className="w-full max-w-195"
        />

        <SearchBar className="mt-7 w-full max-w-145.5 sm:mt-9" />
      </div>

      {/* Floating stat cards */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[57%]
          z-20 hidden
          h-20 w-[min(100%-2rem,474px)]
          -translate-x-1/2

          sm:block
        "
      >
        {/* UI/UX card */}
        <div
          className="
            absolute left-0 top-0
            w-39
            rounded-xl
            bg-white
            px-3 py-2.5
            text-left text-[10px]
            leading-4
            text-[#171923]
            shadow-lg shadow-black/10

            md:w-42
            lg:w-45
          "
        >
          <div className="font-medium">UI/UX Design</div>

          <div className="text-[9px] text-[#9297a1]">
            200 Courses&nbsp; • &nbsp;1000+ Students
          </div>
        </div>

        {/* Learning progress card */}
        <div
          className="
            absolute right-0 top-2
            w-40
            rounded-xl
            bg-white
            px-3 py-2.5
            text-left
            text-[#171923]
            shadow-lg shadow-black/10

            sm:w-42
            md:w-44
            lg:w-45
          "
        >
          <div className="text-[10px]">Learning Progress</div>

          <div className="mt-0.5 text-3xl font-semibold leading-none sm:text-[34px]">
            55%
          </div>

          <div className="mt-2 h-1.25 rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-electric-lime-400" />
          </div>
        </div>
      </div>

      {/* Hero image + Happy Students */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-1/2
          z-10
          h-110 w-full
          -translate-x-1/2
          sm:h-120
          md:h-130
          lg:h-145
          xl:max-w-225
        "
      >
        {/* Hero person */}
        <img
          src={heroImage}
          alt=""
          className="
            absolute bottom-0 left-1/2
            z-10
            w-70 max-w-none
            -translate-x-1/2

            sm:w-80
            md:w-88
            lg:w-92.5
          "
        />

        {/* Happy students */}
        <div
          className="
            absolute
            bottom-8 left-1/2
            z-20
            hidden
            w-44
            -translate-x-43
            rounded-xl
            bg-white
            px-3 py-2.5
            text-left
            text-[#171923]
            shadow-lg shadow-black/10

            sm:block
            sm:w-48.5
            sm:-translate-x-72

            lg:bottom-12
          "
        >
          <div className="text-[10px] font-medium">
            Happy Students
          </div>

          <div className="text-[9px] leading-3 text-[#9297a1]">
            4.5 (240){" "}
            <span className="text-[#c8ff00]">★</span>
          </div>

          <div className="mt-1.5 flex items-center">
            <span className="h-7 w-7 rounded-full border-2 border-white bg-[#d99b72]" />

            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#7b463e]" />

            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#e3bc94]" />

            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#52565f]" />

            <span className="-ml-2 h-7 w-7 rounded-full border-2 border-white bg-[#b88264]" />

            <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[8px] font-semibold">
              2K+
            </span>
          </div>
        </div>
      </div>

      {/* Right lime decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-16 top-[18%]
          hidden
          h-44 w-32
          rotate-[-25deg]
          rounded-[42%_12%_18%_22%]
          bg-electric-lime-400

          md:block
          lg:-right-14 lg:h-52.5 lg:w-38.75
        "
      />

      {/* Left lime strokes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-14 top-[22%]
          hidden
          rotate-27
          flex-col gap-2

          md:flex
        "
      >
        <span className="h-7 w-30 rounded-full bg-electric-lime-400 lg:h-8 lg:w-36" />

        <span className="ml-6 h-7 w-24 rounded-full bg-electric-lime-400 lg:h-8 lg:w-28" />

        <span className="-ml-3 h-7 w-30 rounded-full bg-electric-lime-400 lg:h-8 lg:w-36" />

        <span className="ml-3 h-7 w-27 rounded-full bg-electric-lime-400 lg:h-8 lg:w-32" />
      </div>

      {/* Left white ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[3%] top-[72%]
          hidden
          h-32 w-40
          rotate-[-28deg]
          rounded-full
          border-20 border-white

          lg:block
          lg:h-37 lg:w-44.5
          lg:border-24
        "
      />

      {/* White triangle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[12%] top-[43%]
          hidden
          h-24 w-20
          rotate-10
          bg-white
          [clip-path:polygon(78%_0,100%_100%,0_64%)]

          md:block
        "
      />

      {/* Right white strokes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[3%] top-[67%]
          hidden
          rotate-22
          flex-col gap-2

          md:flex
        "
      >
        <span className="h-7 w-20 rotate-[-24deg] rounded-full bg-white lg:h-8 lg:w-24" />

        <span className="h-7 w-24 rotate-13 rounded-full bg-white lg:h-8 lg:w-28" />

        <span className="h-7 w-20 rotate-[-18deg] rounded-full bg-white lg:h-8 lg:w-24" />

        <span className="h-7 w-18 rotate-20 rounded-full bg-white lg:h-8 lg:w-20" />
      </div>
    </section>
  );
};

export default Hero;