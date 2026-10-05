import footerLogo from "../assets/Footer_Logo.svg";

const footerLinkGroups = [
	[
		{ label: "Featured Courses", href: "#courses" },
		{ label: "Featured Categories", href: "#categories" },
		{ label: "Business", href: "#business" },
		{ label: "IT", href: "#it" },
		{ label: "Design", href: "#design" },
	],
	[
		{ label: "Development", href: "#development" },
		{ label: "Marketing", href: "#marketing" },
		{ label: "Photography", href: "#photography" },
		{ label: "Finance", href: "#finance" },
		{ label: "Sport", href: "#sport" },
	],
	[
		{ label: "Become a Creator", href: "#creators" },
		{ label: "Affiliate Program", href: "#affiliate" },
		{ label: "Contact", href: "#contact" },
		{ label: "Help", href: "#help" },
		{ label: "About", href: "#about" },
	],
];

const legalLinks = [
	{ label: "Privacy Policy", href: "#privacy" },
	{ label: "Terms of Service", href: "#terms" },
	{ label: "Cookies Settings", href: "#cookies" },
];

const Footer = () => (
	<footer className="bg-white text-[#3f4045]">
		<div className="mx-auto max-w-[1708px] px-6 pt-16 sm:px-10 sm:pt-20 lg:px-0 lg:pt-24">
			<div className="grid gap-12 pb-16 sm:gap-14 lg:min-h-[515px] lg:grid-cols-[minmax(0,1.9fr)_repeat(3,minmax(130px,0.55fr))] lg:gap-10 lg:pb-0">
				<div className="max-w-[720px]">
					<a href="#home" aria-label="ByteSpace home" className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]">
						<img src={footerLogo} alt="ByteSpace" className="h-auto w-[245px] max-w-full" />
					</a>
					<p className="mt-8 text-base leading-7 sm:text-lg">
						Stay Up to date with our latest features and releases by joining our newsletter.
					</p>
					<form
						aria-label="Newsletter subscription"
						onSubmit={(event) => event.preventDefault()}
						className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
					>
						<label className="sr-only" htmlFor="footer-email">Email address</label>
						<input
							id="footer-email"
							type="email"
							name="email"
							autoComplete="email"
							placeholder="Enter your email"
							required
							className="h-[60px] min-w-0 flex-1 rounded-full border border-[#d1d1d4] bg-white px-7 text-base text-[#242529] outline-none placeholder:text-[#55565b] focus-visible:border-[#003be2] focus-visible:ring-2 focus-visible:ring-[#003be2]/20 sm:text-lg"
						/>
						<button type="submit" className="h-[60px] shrink-0 rounded-full bg-electric-lime-400 px-8 text-lg font-medium text-[#242529] transition-colors hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]">
							Search
						</button>
					</form>
					<p className="mt-8 max-w-[690px] text-sm leading-6 text-[#55565b]">
						By subscribing, you agree to our <a href="#privacy" className="underline underline-offset-2 hover:text-[#242529]">Privacy Policy</a> and consent to receive updates from our company.
					</p>
				</div>

				{footerLinkGroups.map((group, index) => (
					<nav key={index} aria-label={`Footer links ${index + 1}`}>
						<ul className="m-0 flex list-none flex-col gap-5 p-0 text-base sm:text-lg">
							{group.map(({ label, href }) => (
								<li key={label}>
									<a href={href} className="transition-colors hover:text-[#003be2] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]">{label}</a>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>

			<div className="flex flex-col gap-5 border-t border-[#d1d1d4] py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:py-8">
				<p className="m-0">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
				<nav aria-label="Legal" className="flex flex-wrap gap-x-7 gap-y-3">
					{legalLinks.map(({ label, href }) => (
						<a key={label} href={href} className="transition-colors hover:text-[#003be2] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]">{label}</a>
					))}
				</nav>
			</div>
		</div>
	</footer>
);

export default Footer;
