import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

const CategorySection = () => {
  return (
    <section className="bg-white px-5 py-16 text-[#171923] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Explore Diverse Learning Paths
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Find the perfect category and start your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;