import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

const variants = {
  default:
    "border-2 border-primary bg-primary text-white text-background hover:bg-primary/90 hover:border-primary/10",
  outline:
    "border-2 border-primary text-primary hover:text-background hover:bg-primary",
  ghost:
    "hover:bg-primary/10 border-2 border-transparent hover:border-primary/0",
  secondary:
    "border-2 border-secondary bg-secondary text-foreground hover:bg-secondary/90",
} as const;

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4",
  lg: "text-lg px-6 py-3",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex rounded-md items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 cursor-pointer",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
