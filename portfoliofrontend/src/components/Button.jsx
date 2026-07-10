// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = ({text,variant="primary",onClick,icon,href}) => {
    const baseStyles=
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300";

    const variants={
        primary:"bg-green-500 text-white hover:bg-green-600",
        secondary:"border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    };
    if(href){
        return(
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseStyles} ${variants[variant]}`}
                >
                {icon}
                {text}
            </a>
        )
    }
            
    return (
        <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
            {text}
        </button>
    );
  
};

export default Button
