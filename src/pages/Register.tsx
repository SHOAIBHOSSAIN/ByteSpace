import { useState, type FormEvent } from "react";
import { FiBarChart2, FiStar } from "react-icons/fi";
import brandLogo from "../assets/Header_Logo.svg";
import CustomInputbox from "../components/CustomInputbox";

const chartBars = [28, 44, 36, 68, 54, 82, 48, 72, 92, 60, 76, 52, 88, 64, 98, 70, 46, 82, 58, 74];

const CoursePreview = ({ secondary = false }: { secondary?: boolean }) => (
  <article
    className={`absolute w-[min(82vw,490px)] rounded-[26px] border border-[#e1e3e8] bg-white p-4 shadow-[0_22px_50px_rgba(10,24,76,0.16)] sm:rounded-[30px] sm:p-5 ${
      secondary
        ? "left-0 top-[118px]"
        : "left-[23%] top-0 z-10"
    }`}
  >
    <div className="relative flex h-[170px] items-end overflow-hidden rounded-[20px] bg-gradient-to-br from-[#101a2c] via-[#17263a] to-[#070c14] p-4 sm:h-[230px] sm:p-6">
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[8px] font-semibold tracking-wide text-white/70 sm:inset-x-7 sm:top-6 sm:text-[10px]">
        <span>USERS: LAST 7 DAYS USING MEDIAN</span>
        <span>•••</span>
      </div>
      <div className="absolute inset-x-5 bottom-6 top-12 flex items-end gap-1 sm:inset-x-7 sm:bottom-8 sm:top-16 sm:gap-1.5">
        {chartBars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-[#00a6da] to-[#54edc4] opacity-90"
            style={{ height: `${height}%` }}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 75 C40 55 48 90 88 69 S145 78 182 58 S240 75 280 43 S340 60 400 28" fill="none" stroke="#f178b7" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute inset-x-3 bottom-3 flex justify-between gap-2 sm:inset-x-6 sm:bottom-5">
        {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((item) => (
          <span key={item} className="rounded-full bg-white/75 px-2 py-1 text-[8px] text-[#3b3e45] backdrop-blur sm:px-3 sm:py-1.5 sm:text-[11px]">
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2">
      <h3 className="truncate text-lg font-bold tracking-tight text-[#141519] sm:text-[23px]">
        {secondary ? "Build Digital Assets" : "The Power of Big Data"}
      </h3>
      {!secondary && <span className="flex shrink-0 items-center gap-1 text-base text-[#55565b] sm:text-xl">4.5 <FiStar className="fill-[#c8ff00] text-[#c8ff00]" /></span>}
    </div>
    <p className="mt-1 text-xs text-[#777b85] sm:text-sm">by <span className="text-[#1647f5]">purepearl studio</span></p>
    <div className="mt-4 flex items-center gap-3 sm:mt-5">
      <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#f2f3f5] px-3 text-xs text-[#4c4e55] sm:h-11 sm:gap-2 sm:px-4 sm:text-sm">
        <FiBarChart2 className="text-base sm:text-xl" /> Beginner
      </span>
      <div className="flex items-center">
        {["#d99b72", "#7b463e", "#e3bc94", "#526b78"].map((color, index) => (
          <span key={color} className={`-ml-2 h-8 w-8 rounded-full border-2 border-white first:ml-0 sm:h-10 sm:w-10`} style={{ backgroundColor: color }} aria-label={`Student ${index + 1}`} />
        ))}
        <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#101114] text-[10px] font-semibold text-white sm:h-10 sm:w-10 sm:text-xs">26+</span>
      </div>
    </div>
    <p className="mt-3 text-sm text-[#777b85] sm:mt-4"><strong className="text-xl text-[#1647f5] sm:text-2xl">$25</strong>/lifetime</p>
  </article>
);

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="hero-grid min-h-screen text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1568px] grid-cols-1 gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[0.84fr_1fr] lg:items-center lg:gap-[clamp(64px,9.3vw,176px)] lg:px-0 lg:py-10">
        <section className="relative flex min-h-[650px] flex-col lg:min-h-[1028px]">
          <a href="/" aria-label="ByteSpace home" className="relative z-20 inline-flex h-10 w-10 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 lg:absolute lg:-top-[112px] lg:left-0">
            <img src={brandLogo} alt="ByteSpace" className="h-10 w-10 max-w-none object-cover object-left" />
          </a>
          <div className="relative z-20 mt-14 max-w-[640px] sm:mt-[68px] lg:mt-0">
            <h1 className="text-xl font-semibold tracking-tight sm:text-[28px]">Sign up and come in</h1>
            <p className="mt-4 max-w-[620px] text-base leading-8 text-white/90 sm:text-[23px] sm:leading-[1.65]">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
          </div>

          <div className="relative mx-auto mt-16 h-[540px] w-full max-w-[640px] sm:mt-[78px] lg:mt-[78px]">
            <div aria-hidden="true" className="absolute left-[9%] top-[30%] h-[310px] w-[80%] rotate-[-1deg] rounded-[26px] border border-[#e1e3e8] bg-white/95 shadow-xl sm:h-[430px]" />
            <CoursePreview secondary />
            <CoursePreview />
            <div aria-hidden="true" className="absolute -left-3 top-[9%] z-20 h-[105px] w-[105px] rotate-[-24deg] rounded-full border-[22px] border-[#c8ff00] sm:-left-1 sm:h-[128px] sm:w-[128px] sm:border-[27px]" />
            <div aria-hidden="true" className="absolute -bottom-2 left-0 z-20 h-[125px] w-[145px] rotate-[23deg] bg-[#c8ff00] [clip-path:polygon(50%_0,100%_100%,0_82%)] sm:h-[165px] sm:w-[190px]" />
            <div aria-hidden="true" className="absolute -bottom-1 right-0 z-20 flex rotate-[22deg] flex-col gap-2">
              <span className="h-8 w-24 rotate-[-24deg] rounded-full bg-white sm:h-10 sm:w-32" />
              <span className="h-8 w-28 rotate-[13deg] rounded-full bg-white sm:h-10 sm:w-36" />
              <span className="h-8 w-28 rotate-[-18deg] rounded-full bg-white sm:h-10 sm:w-36" />
            </div>
            <div className="absolute -bottom-6 right-[2%] z-20 rounded-2xl bg-[#c8ff00] px-4 py-3 text-[#171923] shadow-lg sm:right-[3%] sm:px-5 sm:py-4">
              <div className="text-base font-medium sm:text-xl">Happy Students</div>
              <div className="text-[11px] sm:text-sm">4.5 (240) <span className="text-[#1647f5]">&#9733;</span></div>
              <div className="mt-2 flex -space-x-2">
                {["#d99b72", "#7b463e", "#e3bc94", "#526b78", "#b88264"].map((color) => <span key={color} className="h-8 w-8 rounded-full border-2 border-[#c8ff00] sm:h-10 sm:w-10" style={{ backgroundColor: color }} />)}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c8ff00] bg-[#171923] text-[9px] font-semibold text-white sm:h-10 sm:w-10 sm:text-[11px]">2K+</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex min-h-[760px] flex-col rounded-[28px] bg-white px-7 py-10 text-[#25262a] sm:rounded-[34px] sm:px-12 sm:py-14 lg:min-h-[1028px] lg:px-[82px] lg:py-[82px]">
          <p className="text-lg text-[#1647f5] sm:text-[23px]">Create an Account</p>
          <h2 className="mt-2 text-[42px] font-bold leading-[1.12] tracking-tight sm:text-[56px] lg:text-[58px]">
            Welcome to<br />ByteSpace
          </h2>

          <form className="mt-10 flex flex-col gap-6 sm:mt-14 sm:gap-7" onSubmit={handleSubmit}>
            <CustomInputbox label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" />
            <CustomInputbox label="Email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" />
            <CustomInputbox label="Password" name="password" type="password" autoComplete="new-password" placeholder="********" />
            <div className="mt-1 flex justify-end">
              <button type="submit" className="h-[58px] rounded-full bg-[#c8ff00] px-8 text-lg font-medium text-[#171923] transition hover:bg-[#d7ff45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1647f5] sm:h-[60px] sm:px-9 sm:text-[23px]">
                Continue
              </button>
            </div>
            {submitted && <p role="status" className="text-right text-sm text-[#247a36]">Your details are ready to continue.</p>}
          </form>

          <p className="mt-auto pt-12 text-center text-sm text-[#777b85] sm:text-[18px]">
            Already have an account? <a href="/login" className="font-medium text-[#1647f5] hover:underline">Login</a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Register;
