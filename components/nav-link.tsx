import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block relative font-medium after:absolute after:left-0 duration after:content-[''] after:w-0 after:h-0.5 after:duration-300 after:transition-all hover:after:w-full after:bg-primary hover:text-primary after:bottom-0"
    >
      {children}
    </Link>
  );
}
