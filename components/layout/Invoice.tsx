"use client";
import React, { useState } from 'react'
import Lable from '../ui/Lable'
import Table from './Table'
import { RadioGroup } from '../base/RadioGroups'

const Invoice = () => {
        const [value,setValue] = useState("");
  return (
    <>
    <section className="w-full h-full rounded-lg bg-white p-1 ">
        <header className="w-full h-auto border-b border-b-[#00000014] p-4">
            <aside className="flex gap-4">
                <h1 className="text-sm">
                    Current Bill
                </h1>
                <p className="text-sm bg-[#E9F5FF] px-2 rounded-full ">
                    #INV-2023-8492
                </p>
            </aside>
        </header>
        <aside className="w-full flex justify-between items-center p-2">
            <p className="text-sm h-fit  bg-[#E9F5FF] px-2 rounded-full ">
                #INV-2023-8492
            </p>
            <div className="w-auto">
                <p className="text-sm">
                    02.02.2026
                </p>
                <p className="text-sm">
                    10.00PM
                </p>
            </div>
        </aside>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2">
            <Lable Name='Service Type' value={'Hello'}/>
            <Lable Name='Service Type' value={'Hello'}/>
            <Lable Name='Service Type' value={'Hello'}/>
            <Lable Name='Service Type' value={'Hello'}/>
        </div>
        <section className='text-xs'>
            <Table>
            {/* <Table.Head> */}
                <Table.Row>
                <Table.Th>Item</Table.Th>
                <Table.Th>Qty</Table.Th>
                <Table.Th>Rate</Table.Th>
                <Table.Th>Amount</Table.Th>
                </Table.Row>
            {/* </Table.Head> */}

            <tbody>
                <Table.Row>
                <Table.Cell>A4 Printout (B/W)</Table.Cell>
                <Table.Cell>50</Table.Cell>
                <Table.Cell>2.00</Table.Cell>
                <Table.Cell>100.00</Table.Cell>
                </Table.Row>
            </tbody>
            </Table>

            <RadioGroup value={value} onValueChange={setValue} name='serviceType' className='w-full h-auto flex gap-2 text-sm' >
                <RadioGroup.Item value='A4 Color' label='A4 Color'/>
                <RadioGroup.Item value='A4 (B/W)' label='A4 (B/W)'/>
                <RadioGroup.Item value='Xerox' label='Xerox'/>
                <RadioGroup.Item value='Spiral Bind' label='Spiral Bind'/>
                <RadioGroup.Item value='Lamination' label='Lamination'/>
                <RadioGroup.Item value='Scan' label='Scan'/>
            </RadioGroup>
        </section>
    </section>
    </>
  )
}

export default Invoice