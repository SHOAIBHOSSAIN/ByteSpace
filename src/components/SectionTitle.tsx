type SectionTitleProps = {
	title: string;
	subtitle: string;
	className?: string;
};

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
	return (
		<header className={`mx-auto w-full text-center ${className}`}>
			<h2 className="mx-auto mb-4 max-w-[620px] text-[32px] font-bold leading-[1.15] text-[#080d1d] sm:text-[42px]">
				{title}
			</h2>
			<p className="mx-auto max-w-[920px] text-sm leading-[1.65] text-[#9095a0] sm:text-base">
				{subtitle}
			</p>
		</header>
	);
};

export default SectionTitle;
