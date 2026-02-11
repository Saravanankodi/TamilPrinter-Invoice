import { ButtonPros } from '@/types'
import React from 'react'
import clsx from "clsx";
const Button = ({children,icon,className,variant='primary',size='md' ,loading= false,...props}:ButtonPros) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:
          "bg-[#E9F5FF] text-[#023A66] border border-[#00000014] focus:ring-gray-400",
        outline:
          "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
      };
    
      const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      };
  return (
    <>
        <button
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        <>
        {icon && (
            <span className="w-6 h-6">
                {icon}
            </span>
        )}
        {children}
        </>
      )}
    </button>
    </>
  )
}

export default Button