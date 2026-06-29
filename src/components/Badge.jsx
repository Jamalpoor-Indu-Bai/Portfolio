const Badge = ({ text, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-300 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;