import type { ReactNode } from "react";

type HeadingProps = {
  title: ReactNode;
  description?: string;
  className?: string;
};

const Heading = ({
  title,
  description,
  className = "",
}: HeadingProps) => {
  return (
    <div className={`w-full text-center ${className}`}>
      <h1
        className="
          font-poppins
          text-4xl
          font-semibold
          leading-tight
          tracking-tight
          text-white

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          lg:leading-[120%]
          lg:tracking-[-1%]
        "
      >
        {title}
      </h1>

      {description && (
        <p
          className="
            mx-auto
            mt-5
            max-w-190
            font-satoshi
            text-sm
            font-normal
            leading-6
            text-shuttle-gray-100

            sm:mt-6
            sm:text-base
            sm:leading-7

            lg:text-lg
            lg:leading-[160%]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;