// eslint-disable-next-line no-unused-vars
import React from 'react'

const Button = ({text,variant="primary",onClick}) => {
    const baseStyles=
    "px-6 py-3 rounded-xl font-medium trasition-all duration-300";

    const variants={
        primary:"bg-green-500 text-white hover:bg-green-600",
        secondary:"border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    };
    return (
        <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
            {text}
        </button>
    );
  
};

export default Button
