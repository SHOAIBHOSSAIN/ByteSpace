import { useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import headerLogo from "../assets/Header_Logo.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-persian-blue-800 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-19 w-full max-w-300 flex-wrap items-center justify-between px-6 sm:min-h-30 sm:px-0"
      >
        <a
          href="#home"
          aria-label="ByteSpace home"
          className="inline-flex items-center gap-1.5 rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          onClick={closeMenu}
        >
          <img src={headerLogo} alt="" aria-hidden="true" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-6 text-[16px] md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-normal text-white/90 transition-colors hover:text-lime-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 text-[16px] md:flex">
          <a
            href="#sign-in"
            className="font-normal text-white/90 transition-colors hover:text-lime-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="font-normal text-white/90 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Join Us
          </a>
          <a
            href="#courses"
            aria-label="Browse courses"
            className="rounded-sm text-lg text-white transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          >
            <FiShoppingBag aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-xl text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`grid w-full basis-full bg-persian-blue-800 transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-white/15 pb-2 pt-3">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-white/95 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-lime-300"
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-5 px-3 pb-2">
                <a
                  href="#sign-in"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="py-2 text-sm font-medium text-white/95 focus-visible:outline-2 focus-visible:outline-lime-300"
                >
                  Sign In
                </a>
                <a
                  href="/register"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="py-2 text-sm font-medium text-white/95 focus-visible:outline-2 focus-visible:outline-lime-300"
                >
                  Join Us
                </a>
                <a
                  href="#courses"
                  aria-label="Browse courses"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="ml-auto rounded-sm p-2 text-lg text-white focus-visible:outline-2 focus-visible:outline-lime-300"
                >
                  <FiShoppingBag aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
