import type { Category } from "../types/types";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  const Icon = category.icon;

  return (
    <div className="group flex h-250px w-full max-w-280px flex-col items-center justify-center rounded-[36px] border-2 border-shuttle-gray-200">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-lime-400">
        <Icon className="h-10 w-10 text-black" />
      </div>

      <h3 className="text-center text-2xl font-bold text-shuttle-gray-950 0">
        {category.title}
      </h3>
    </div>
  );
};

export default CategoryCard;