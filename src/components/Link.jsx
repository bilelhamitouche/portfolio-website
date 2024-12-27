function Link({ children, href, variant, size, className }) {
  const baseStyles = "focus:outline-none font-semibold";

  const variantStyles = {
    button: "bg-blue-500 rounded-md text-white hover:bg-blue-600",
    link: "text-gray-200 hover:bg-gray-800 rounded-sm transition-colors",
    outlined: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <a
      href={`#${href}`}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} capitalize text-sm`}>
      {children}
    </a>
  );
}

export default Link;
