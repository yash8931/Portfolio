import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  href,
  to,
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    ghost:
      "text-slate-700 hover:bg-slate-100",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;