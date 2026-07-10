const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-500/30
        bg-emerald-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-white
        transition-all
        duration-300
        hover:border-emerald-400
        hover:bg-emerald-500/20
        hover:text-emerald-300
        hover:scale-105
        hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;