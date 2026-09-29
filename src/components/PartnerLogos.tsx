const partners = [
	{ name: "Logoipsum", mark: "waves" },
	{ name: "Logoipsum", mark: "sun" },
	{ name: "Logoipsum", mark: "bolt" },
	{ name: "Logoipsum", mark: "flower" },
	{ name: "Logoipsum", mark: "rings" },
] as const;

const PartnerMark = ({ mark }: { mark: (typeof partners)[number]["mark"] }) => {
	if (mark === "waves") {
		return <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0"><circle cx="24" cy="24" r="24" fill="currentColor" /><path d="M2 15c10-6 22 6 44 0M0 24c12-6 24 6 48 0M2 33c10-6 22 6 44 0" fill="none" stroke="#f4f4f5" strokeWidth="4" /></svg>;
	}
	if (mark === "sun") {
		return <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0" fill="currentColor"><circle cx="24" cy="24" r="8" />{Array.from({ length: 12 }, (_, i) => <rect key={i} x="22" y="1" width="4" height="12" rx="1" transform={`rotate(${i * 30} 24 24)`} />)}</svg>;
	}
	if (mark === "bolt") return <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-current"><svg viewBox="0 0 24 24" className="h-7 w-7" fill="#f4f4f5"><path d="M13.8 2 5 13h6l-1 9 9-12h-6z" /></svg></span>;
	if (mark === "flower") return <span aria-hidden="true" className="relative h-12 w-12 shrink-0 rounded-full bg-current"><svg viewBox="0 0 48 48" className="h-full w-full" fill="#f4f4f5"><circle cx="24" cy="15" r="6"/><circle cx="33" cy="24" r="6"/><circle cx="24" cy="33" r="6"/><circle cx="15" cy="24" r="6"/><circle cx="24" cy="24" r="3"/></svg></span>;
	return <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.3">{Array.from({ length: 8 }, (_, i) => <circle key={i} cx="24" cy="24" r={7 + i * 2.3} />)}</svg>;
};

const PartnerLogos = () => (
	<section aria-label="Trusted partners" className="bg-[#f4f4f5] px-5 py-12 sm:px-8 sm:py-14">
		<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8 text-[#858990] sm:justify-between sm:gap-x-8">
			{partners.map((partner, index) => (
				<div key={`${partner.mark}-${index}`} className="flex items-center gap-2.5">
					<PartnerMark mark={partner.mark} />
					<span className="text-[24px] font-bold leading-none tracking-[-1.4px] sm:text-[27px]">{partner.name}</span>
				</div>
			))}
		</div>
	</section>
);

export default PartnerLogos;
