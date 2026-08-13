function GlassCard({ children, className = "", as: Component = "div" }) {
  return (
    <Component
      className={`
        border border-white/40
        bg-white/65
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

export default GlassCard;
