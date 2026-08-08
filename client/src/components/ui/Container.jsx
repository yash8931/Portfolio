function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-width)] px-[var(--page-padding)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;