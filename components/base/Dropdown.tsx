"use clint";

import { DropdownProps, Option } from '@/types'
import React, { useState } from 'react'

const Dropdown = ({option,onChange}:DropdownProps) => {
    const [open,setOpen] = useState(false);
    const [select,setSelect] = useState<Option | null>(null)

    const handleSelect =(option:Option)=>{
        setSelect(option)
        onChange(option.value)
        setOpen(false)
    }

  return (
    <>
    <div className="relative w-64">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md border
                   border-gray-300 bg-white px-4 py-2 text-sm shadow-sm"
      >
        {select ? select.label : "Select an option"}
        <span className="ml-2">▾</span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border
                       border-gray-200 bg-white shadow-lg">
          {option.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>

    </>
  )
}

export default Dropdown