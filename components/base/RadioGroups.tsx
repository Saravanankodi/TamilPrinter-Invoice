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
function RadioGroupItem({
    value,
    label,
  }: RadioItemProps) {
    const ctx = useContext(RadioGroupContext);
  
    if (!ctx) {
      throw new Error("RadioGroup.Item must be used within RadioGroup");
    }
  
    const checked = ctx.value === value;
  
    return (
      <label
        className={`
          flex items-center gap-3 cursor-pointer select-none
          border px-4 py-3 rounded-md
          transition
          ${checked ? " bg-[#0496ff] text-white" : "bg-[#F2F4F6] border-gray-300"}
        `}
      >
        {/* hidden real radio */}
        <input
          type="radio"
          name={ctx.name}
          value={value}
          checked={checked}
          onChange={() => ctx.onValueChange(value)}
          className="sr-only"
        />
  
        {/* custom indicator (square)
        <span
          className={`
            w-4 h-4 border rounded-sm flex items-center justify-center
            ${checked ? "bg-white" : "bg-transparent"}
          `}
        >
          {checked && <span className="w-2 h-2 bg-black" />}
        </span> */}
  
        <span>{label}</span>
      </label>
    );
  }
  
export const RadioGroup= Object.assign(RadioGroupRoot,{Item:RadioGroupItem,});