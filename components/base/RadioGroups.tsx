"use client";
import { RadioGroupContextType, RadioGroupProps, RadioItemProps } from '@/types';
import React, { createContext, useContext } from 'react'

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

function RadioGroupRoot({value,onValueChange,name='radio-group',children,className}:RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{value,onValueChange,name}}>
        <div role='radiogroup' className={className}>
            {children}
        </div>
    </RadioGroupContext.Provider>
  )
}
function RadioGroupItem({value,label,className}:RadioItemProps){
    const ctx = useContext(RadioGroupContext);
    if (!ctx){
        throw new Error("RadioGroup.Item ")
    }
    const checked = ctx.value=== value;

    return(
        <>
        <label htmlFor="">
            <input 
                type="radio" 
                name={ctx.name}
                className={className}
                value={value}
                checked={checked}
                onChange={()=>ctx.onValueChange(value)}  />
                <span className="text-2xl">
                    {label}
                </span>
        </label>
        </>
    )
}

export const RadioGroup= Object.assign(RadioGroupRoot,{Item:RadioGroupItem,});