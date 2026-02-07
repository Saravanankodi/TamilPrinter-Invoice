import { InputProps } from '@/types'
import React from 'react'

const Input = ({label,className, ...props}:InputProps) => {
  return (
    <>
    <div className={`w-full h-auto ${className}`}>
            {
            label && (
                <label htmlFor={label} className='text-[#64748B] text-sm block my-1' >
                    {label}
                </label>
            )
            }
            <input className='bg-[#F8FAFC] max-h-10 w-full max-w-75 border-[1px_solid_#00000014] text-sm p-2 rounded-md ' {...props} />
    </div>
    </>
  )
}

export default Input