import type { Category } from "../types/types";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <div
      className="
        group
        flex
        w-full
        min-w-0
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-1
        border-shuttle-gray-200
        px-4
        py-10

        sm:rounded-[24px]
        sm:px-6
        sm:py-12

        md:min-h-60
        md:rounded-[24px]
        md:px-8

        lg:min-h-64
        lg:max-w-70
      "
    >
      {/* Category SVG */}
      <div
        className="
          flex
          h-20
          w-20
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-electric-lime-400

          sm:h-22
          sm:w-22

          md:h-24
          md:w-24
        "
      >
        <img
          src={category.image}
          alt=""
          aria-hidden="true"
          className="
            h-9
            w-9
            object-contain

            sm:h-10
            sm:w-10
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-5
          text-center
          text-xl
          font-bold
          leading-tight
          text-shuttle-gray-950

          sm:mt-6
          sm:text-2xl
        "
      >
        {category.title}
      </h3>
    </div>
  );
};

export default CategoryCard;
