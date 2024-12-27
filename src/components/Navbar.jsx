import { useState } from "react";
import Link from "./Link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const pages = ["home", "about", "skills", "projects", "contact"];
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex justify-between items-center p-4">
      <a
        href="#"
        className="text-2xl italic font-logo">
        BH
      </a>
      <ul className="hidden gap-4 justify-center items-center md:flex">
        {pages.map((page) => (
          <li>
            <Link
              href={page}
              variant="link"
              size="sm">
              {page}
            </Link>
          </li>
        ))}
      </ul>
      {isOpen ? (
        <ul className="absolute top-0 left-0 z-10 flex-col gap-4 justify-center items-center w-full bg-gray-900 md:hidden">
          <li className="p-8 w-full text-center">
            <button
              className="inline self-end rounded-full transition-all md:hidden"
              onClick={toggleIsOpen}>
              {isOpen ? <FaTimes className="text-3xl" /> : <FaBars />}
            </button>
          </li>
          {pages.map((page) => (
            <li
              className="p-8 w-full text-center hover:bg-gray-800"
              onClick={toggleIsOpen}>
              <a
                href={`#${page}`}
                className="text-2xl">
                {page}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <button
        className="inline rounded-full transition-all md:hidden"
        onClick={toggleIsOpen}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
