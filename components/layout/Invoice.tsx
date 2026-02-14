"use client";
import React, { useState } from 'react'
import Lable from '../ui/Lable'
import Table from './Table'
import { RadioGroup } from '../base/RadioGroups'
import Cash from '@/assets/icons/Cash';
import Upi from '@/assets/icons/Upi';
import Card from '@/assets/icons/Card';

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
        <main className="w-auto space-y-2">
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
            <section className='text-xs space-y-2'>
                <Table>
                <tbody>
                <Table.Row>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Qty</Table.Th>
                    <Table.Th>Rate</Table.Th>
                    <Table.Th>Amount</Table.Th>
                    </Table.Row>

                    <Table.Row>
                    <Table.Cell>A4 Printout (B/W)</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell>2.00</Table.Cell>
                    <Table.Cell>100.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>A4 Printout (B/W)</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell>2.00</Table.Cell>
                    <Table.Cell>100.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>A4 Printout (B/W)</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell>2.00</Table.Cell>
                    <Table.Cell>100.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>A4 Printout (B/W)</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell>2.00</Table.Cell>
                    <Table.Cell>100.00</Table.Cell>
                    </Table.Row>
                </tbody>
                </Table>

                <RadioGroup value={value} onValueChange={setValue} name='serviceType' className='w-full h-auto flex items-center justify-center text-sm' >
                    <RadioGroup.Item value='Cash' label='Cash' icon={<Cash/>} />
                    <RadioGroup.Item value='UPI / QR' label='UPI / QR' icon={<Upi/>} />
                    <RadioGroup.Item value='Card' label='Card' icon={<Card/>}/>
                    <RadioGroup.Item value='Pending' label='Pending'/>
                </RadioGroup>
            </section>
        </main>
    </section>
    </>
  )
}

export default Invoice