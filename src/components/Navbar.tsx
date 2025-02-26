import NavLink from "@/types/navlink";
import Link from "next/link";

function Navbar() {
  const navLinks: NavLink[] = [
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "Skills",
      link: "#skills",
    },
    {
      text: "Contact",
      link: "#contact",
    },
  ];
  return (
    <header className="fixed z-50 border-b border-base-300 bg-base-100/80 navbar backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 space-y-1 w-52 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link} className="text-base">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="p-2 text-xl font-bold no-underline link">
          Bilel.dev
        </Link>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="px-1 menu menu-horizontal">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.link} className="text-sm font-semibold">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1 btn">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block w-2 h-2 opacity-60 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 w-32 shadow-2xl dropdown-content bg-base-300 rounded-box z-1"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="justify-start theme-controller btn btn-sm btn-block btn-ghost"
                aria-label="Dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="justify-start theme-controller btn btn-sm btn-block btn-ghost"
                aria-label="Light"
                value="light"
              />
            </li>
          </ul>
        </div>
        <Link href="" download className="btn">
          Resume
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
