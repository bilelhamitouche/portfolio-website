"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import { FaArrowUpLong } from "react-icons/fa6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Button
      onClick={scrollToTop}
      size="md"
      className={`transition-all duration-300 fixed bottom-6 right-6 z-50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <FaArrowUpLong size="20" />
    </Button>
  );
}
