import React from 'react'

const Card = ({children,className=""}) => {//here className allows you to pass in additional classes to the Card component. This is useful if you want to customize the styling of the Card component for a specific use case. The default value for className is an empty string, so if you don't pass in any additional classes, the Card component will still have its default styling applied.
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:border-emerald-400 ${className}`}>
        {children}
      
    </div>
  )
}

export default Card
