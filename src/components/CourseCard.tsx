import { useState } from "react";
import { FiBarChart2, FiStar } from "react-icons/fi";
import fallbackCourseImage from "../assets/images/heroImage.svg";
import type { Course } from "../types/types";

type CourseCardProps = {
	course: Course;
	lessonCount?: number;
	duration?: string;
	commentCount?: number;
	level?: string;
};

const avatarStyles = [
	"bg-[#b9715d]",
	"bg-[#e2c092]",
	"bg-[#4f6a67]",
	"bg-[#39495e]",
];

const CourseCard = ({
	course,
	lessonCount = 17,
	duration = "2 hours 16 mins",
	commentCount = 59,
	level = "Beginner",
}: CourseCardProps) => {
	const [imageSrc, setImageSrc] = useState(course.image);

	const handleImageError = () => {
		setImageSrc(fallbackCourseImage);
	};

	const studentCount = new Intl.NumberFormat("en", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(course.students);

	return (
		<article className="w-full rounded-24px border border-[#d2d4d8] bg-white p-4 text-[#171923] shadow-sm sm:rounded-[30px] sm:p-6">
			<a href={`/courses/${course.id}`} aria-label={`View ${course.title} course details`} className="relative block aspect-[1.75] overflow-hidden rounded-[18px] bg-[#eef0f3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2] sm:rounded-[22px]">
				<img
					src={imageSrc}
					alt={`${course.title} course preview`}
					onError={handleImageError}
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 sm:inset-x-7 sm:bottom-7 sm:gap-3">
					<span className="rounded-full bg-white/75 px-2.5 py-1.5 text-[10px] text-[#505158] backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-sm">
						{lessonCount} Lessons
					</span>
					<span className="rounded-full bg-white/75 px-2.5 py-1.5 text-[10px] text-[#505158] backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-sm">
						{duration}
					</span>
					<span className="rounded-full bg-white/75 px-2.5 py-1.5 text-[10px] text-[#505158] backdrop-blur-sm sm:px-4 sm:py-2.5 sm:text-sm">
						{commentCount} Comments
					</span>
				</div>
			</a>

			<div className="mt-5 flex items-center justify-between gap-3 sm:mt-7">
					<h2 className="min-w-0 truncate text-xl font-semibold leading-tight text-black sm:text-2xl">
						<a href={`/courses/${course.id}`} className="hover:text-[#003be2] focus-visible:outline-2 focus-visible:outline-[#003be2]">
						{course.title}
						</a>
					</h2>
				<div className="flex shrink-0 items-center gap-1 text-base text-[#55565b] sm:text-xl">
					<span>{course.rating.toFixed(1)}</span>
					<FiStar aria-hidden="true" className="fill-[#d0d1d4] text-[#d0d1d4]" />
				</div>
			</div>

			<p className="mt-1 text-sm text-[#53545a] sm:text-base">
				by <a href="#creators" className="text-[#0d46ff] hover:underline">{course.instructor}</a>
			</p>

			<div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-4">
				<span className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f2f2f4] px-4 text-sm text-[#4c4d53] sm:h-[66px sm:gap-3 sm:px-7 sm:text-xl">
					<FiBarChart2 aria-hidden="true" className="text-xl sm:text-3xl" />
					{level}
				</span>

				<div
					aria-label={`${course.students.toLocaleString()} students enrolled`}
					className="flex items-center pl-1"
				>
					{avatarStyles.map((style, index) => (
						<span
							key={style}
							aria-hidden="true"
							className={`-ml-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white first:ml-0 sm:h-66px sm:w-66px sm:text-base ${style}`}
						>
							{String.fromCharCode(74 + index)}
						</span>
					))}
					<span className="-ml-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-#c8ff00 text-[10px] font-medium text-[#191b15] sm:h-66px sm:w-66px sm:text-xl">
						{studentCount}+
					</span>
				</div>
			</div>

			<p className="mt-5 text-sm text-[#55565b] sm:mt-8 sm:text-lg">
				<span className="text-2xl font-semibold text-[#0d46ff] sm:text-[40px]">
					${course.price}
				</span>
				<span>/lifetime</span>
			</p>
		</article>
	);
};

export default CourseCard;
