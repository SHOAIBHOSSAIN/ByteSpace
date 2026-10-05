import { useState } from "react";
import { tabCategories } from "../data/tabcategories";
import Button from "./Button";

type TabCategoriesProps = {
	initialSelected?: string;
	onChange?: (category: string) => void;
	className?: string;
};

const TabCategories = ({
	initialSelected = tabCategories[0],
	onChange,
	className = "",
}: TabCategoriesProps) => {
	const [selected, setSelected] = useState(initialSelected);

	const selectCategory = (category: string) => {
		setSelected(category);
		onChange?.(category);
	};

	return (
		<div
			role="tablist"
			aria-label="Course categories"
			className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
		>
			{tabCategories.map((category) => {
				const isSelected = selected === category;

				return (
					<Button
						key={category}
						role="tab"
						aria-selected={isSelected}
						tabIndex={isSelected ? 0 : -1}
						onClick={() => selectCategory(category)}
						className={`!rounded-full !px-2.5 !py-1 !text-[10px] !leading-4 ${
							isSelected
								? "!bg-electric-lime-400 !text-[#171923]"
								: "!text-[#454a52]"
						}`}
					>
						{category}
					</Button>
				);
			})}
			<Button
				className="!bg-transparent !px-1 !py-1 !text-[10px] !leading-4 !text-[#1647f5] hover:!bg-transparent"
				onClick={() => onChange?.("More")}
			>
				+ More
			</Button>
		</div>
	);
};

export default TabCategories;
