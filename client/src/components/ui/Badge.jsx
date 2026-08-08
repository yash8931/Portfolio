function Badge({ children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "border-indigo-100 bg-indigo-50 text-indigo-700",
    neutral:
      "border-slate-200 bg-slate-50 text-slate-700",
    accent:
      "border-cyan-100 bg-cyan-50 text-cyan-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;