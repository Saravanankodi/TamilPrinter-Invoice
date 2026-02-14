"use client";

import React, { useState } from 'react'
import { RadioGroup } from '../base/RadioGroups'
import Input from '../base/Input';
import Dropdown from '../base/Dropdown';

const AddBill = () => {
    const [value,setValue] = useState("");

    const options =[
        {label:"front",value:"front"},
        {label:"front-back",value:"front-back"},
    ]
    const [print,setPrint] = useState("");
  return (
    <>
    <section className="w-full h-auto p-2 bg-white rounded-lg ">
        <header className="w-full h-auto max-h-15 flex items-center justify-between p-2 border-b-[1px_solid_#00000014]">
            <h1 className="text-base">
                Add Items
            </h1>
            <button className='text-sm text-[#0496ff]  ' >Reset Form</button>
        </header>
        <form action="">
            <RadioGroup value={value} onValueChange={setValue} name='serviceType'className='w-full h-auto flex gap-2 text-sm' >
                <RadioGroup.Item value='A4 Color' label='A4 Color'/>
                <RadioGroup.Item value='A4 (B/W)' label='A4 (B/W)'/>
                <RadioGroup.Item value='Xerox' label='Xerox'/>
                <RadioGroup.Item value='Spiral Bind' label='Spiral Bind'/>
                <RadioGroup.Item value='Lamination' label='Lamination'/>
                <RadioGroup.Item value='Scan' label='Scan'/>
            </RadioGroup>
            <div className="flex gap-4">
                <Input label='Quantity' type='number' />
                <Input label='Page' type='number' />
                <Input label='Paper' type='number' />
                <Input label='Rate (per unit)' type='number' />
            </div>
            <div className="w-full">
                <Dropdown option={options} value={print} onChange={setPrint}/>
            </div>
        </form>
    </section>
    </>
  )
}

export default AddBill