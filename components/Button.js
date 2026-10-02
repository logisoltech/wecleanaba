import Link from "next/link";

const variants = {
  primary:
    "bg-header text-white hover:bg-[#2a2420] border border-header",
  secondary:
    "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-white",
  ghost:
    "bg-transparent text-foreground border-0 underline-offset-4 hover:underline px-0",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-[0.95rem]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-colors duration-200 rounded-[2px] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
