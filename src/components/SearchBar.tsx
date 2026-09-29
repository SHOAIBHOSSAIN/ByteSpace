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
			className={`flex h-12 w-full max-w-[582px] items-center gap-4 sm:h-[52px] 2xl:max-w-[min(42vw,760px)] ${className}`}
		>
			<label className="flex h-full min-w-0 flex-1 items-center gap-2.5 rounded-full bg-white px-6 text-[#858b98]">
				<FiSearch aria-hidden="true" className="shrink-0 text-base" />
				<input
					aria-label="Search courses, topics, and creators"
					name="query"
					placeholder={placeholder}
					className="w-full min-w-0 bg-transparent text-base text-[#171923] outline-none placeholder:text-[#858b98]"
				/>
			</label>
			<button
				type="submit"
				className="h-full shrink-0 rounded-full bg-[#c8ff00] px-[29px] text-base font-medium text-[#10120a] transition-colors hover:bg-[#d8ff46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
