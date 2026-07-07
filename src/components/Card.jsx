import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      // className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 ${className}`}
      className={`bg-[#161b22]
border border-[#30363d]
rounded-2xl
hover:border-[#3fb950]
hover:-translate-y-1
transition-all p-6 backdrop-blur-md shadow-lg
duration-300
${className}`}
    > 
      {children}
    </div>
  );
};

export default Card;