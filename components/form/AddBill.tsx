"use client";

import React, { useState } from 'react'
import { RadioGroup } from '../base/RadioGroups'
import Input from '../base/Input';
import Lable from '../ui/Lable';
import Button from '../base/Button';
import AddRounded from '@/assets/icons/AddRounded';

const AddBill = () => {
    const [value,setValue] = useState("");
  return (
    <>
    <section className="w-full h-full p-2 bg-white rounded-lg ">
        <header className="w-full h-auto max-h-15 flex items-center justify-between p-2 border-b border-b-[#00000014]">
            <h1 className="text-base">
                Add Items
            </h1>
            <button className='text-sm text-[#0496ff]  ' >Reset Form</button>
        </header>
        <form action="" className='h-full p-2 space-y-2'>
            <Lable Name='Service Type' value={value}/>
            <RadioGroup value={value} onValueChange={setValue} name='serviceType' className='w-full h-auto flex gap-2 text-sm' >
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
            <Button icon={<AddRounded/>} className='w-full font-semibold' variant='secondary'>
                Add To Bill
            </Button>
        </form>
    </section>
    </>
  )
}

export default AddBill