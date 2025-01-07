type Props = {};

interface Link {
  link: string;
  text: string;
}

function Navbar({}: Props) {
  const links: Link[] = [
    {
      link: "#about",
      text: "About",
    },
    {
      link: "#skills",
      text: "Skills",
    },
    {
      link: "#projects",
      text: "Projects",
    },
    {
      link: "#contact",
      text: "Contact",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a
          href="/"
          className="text-3xl italic font-bold link decoration-transparent font-logo">
          BilelH
        </a>
      </div>
      <div className="hidden md:flex navbar-center">
        <ul className="px-1 menu menu-horizontal">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                className="hover:bg-transparent link link-hover">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <label className="flex gap-2 cursor-pointer navbar-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle
            cx="12"
            cy="12"
            r="5"
          />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="dark"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
}

export default Navbar;
