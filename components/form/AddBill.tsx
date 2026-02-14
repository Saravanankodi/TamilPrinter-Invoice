"use client";

import React, { useState } from 'react'
import { RadioGroup } from '../base/RadioGroups'
import Input from '../base/Input';
import Lable from '../ui/Lable';
import Button from '../base/Button';
import AddRounded from '@/assets/icons/AddRounded';
import Dropdown from '../base/Dropdown';

const AddBill = () => {
    const [value,setValue] = useState("");
    const [quantity,setQuantity] = useState<number>(0);
    const [,setSelect]=useState("");
    const options = [
        { label: "Front-only", value: "front" },
        { label: "Front & Back", value: "frontAndBack" },
      ];
    const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity((prev) => prev + 1);
      };
      
    
      const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // prevent negative
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const val = Number(e.target.value);
        setQuantity(val >= 0 ? val : 0);
      };

  return (
    <>
    <section className="w-full h-full p-2 bg-white rounded-lg ">
        <header className="w-full h-auto max-h-15 flex items-center justify-between p-2 border-b border-b-[#00000014]">
            <h1 className="text-base">
                Add Items
            </h1>
            <button className='text-sm text-[#0496ff]  ' >Reset Form</button>
        </header>
        <form action="" className='h-max p-2 space-y-2'>
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
                <div className="w-auto flex items-end justify-center gap-2">
                    <button
                        onClick={decrement}
                        className="px-4 py-2 bg-[#F8FAFC] max-h-10 outline-none border border-[#00000014] text-sm rounded-md "
                    >
                        -
                    </button>
                    <Input label='Quantity' type='number' value={quantity} onChange={handleChange} />
                    <button
                        onClick={increment}
                        className="px-4 py-2 bg-[#F8FAFC] max-h-10  outline-none border border-[#00000014] text-sm rounded-md "
                    >
                        +
                    </button>
                </div>
                <Input label='Page' type='number' />
                <Input label='Paper' type='number' />
                <Input label='Rate (per unit)' type='number' />
            </div>

            <div className="flex items-end gap-3">
                <Dropdown name='Print Type' option={options} onChange={(value)=>setSelect(value)}/>
                <Input label='Notes (Optional)' placeholder='Add specific instructions...'/>
            </div>

            <Button type='submit' icon={<AddRounded/>} className='w-full font-semibold' variant='secondary'>
                Add To Bill
            </Button>
        </form>
    </section>
    </>
  )
}

export default AddBill