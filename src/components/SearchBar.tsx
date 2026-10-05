import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  action?: string;
  className?: string;
  placeholder?: string;
};

const SearchBar = ({
  action = "#courses",
  className = "",
  placeholder = "Course, topic, creator",
}: SearchBarProps) => {
  return (
    <form
      action={action}
      role="search"
      className={`flex w-full max-w-145.5 items-center gap-4 ${className}`}
    >
      <label className="flex min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3 text-gray-500">
        <FiSearch
          aria-hidden="true"
          className="shrink-0 text-base"
        />

        <input
          aria-label="Search courses, topics, and creators"
          name="query"
          type="search"
          placeholder={placeholder}
          className="w-full min-w-0 bg-transparent text-base text-gray-900 outline-none placeholder:text-shuttle-gray-400"
        />
      </label>

      <button
        type="submit"
        className="shrink-0 rounded-3xl bg-lime-400 px-6 py-3 text-base font-medium text-shuttle-gray-950 transition-colors hover:bg-lime-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;