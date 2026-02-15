import { Calander, Notification } from '@/assets/icons'
import Table from '@/components/layout/Table'
import React from 'react'
import { Add } from '@/assets/icons'
import Filter from '@/assets/icons/Filter'
import Button from '@/components/base/Button'
import Input from '@/components/base/Input'
const Products = () => {
  return (
    <>
    <section className="w-full">
      <header className="w-full py-3 px-4 flex items-center justify-between bg-white border border-[#00000014]">
        <aside className="w-fit h-full">
          <div className="h-fit flex items-center gap-2">
          <h1 className="text-[20px]">
            Products 
          </h1>
          </div>
          <p className="text-sm">
            Manage pricing and inventory
          </p>
        </aside>
        <div className="w-fit flex items-center gap-2">
          {/* Date and Time */}
          <div className="w-fit flex text-right text-[#64748B] border-r pr-6 border-[#00000014]">
            <Calander className='w-6 h-6 '/>
            <p className="flex text- text-sm font-semibold text-black">
              Today, 24 Oct 2023
            </p>
          </div>
          <div className="w-fit h-fit rounded-full bg-[#F1F5F9] p-2 ">
            <Notification className="w-5 h-5"/>
          </div>
        </div>
      </header>
      <main className="w-full h-max p-2">
            <div className="w-full flex items-center justify-between">
                <Input placeholder='Search products...' className='max-w-75'/>
                <aside className="w-auto h-fit flex items-center gap-3">
                    <Button variant='outline' icon ={<Filter className='w-6 h-6'/>}>
                        Filter
                    </Button>
                    <Button variant='primary' icon={<Add/>} >
                        Add New Product
                    </Button>
                </aside>
            </div>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Th>
                  Product Name
              </Table.Th>
              <Table.Th>
                  Category
              </Table.Th>
              <Table.Th>
                  Pricing Model
              </Table.Th>
              <Table.Th>
                Rate / Price
              </Table.Th>
              <Table.Th>
                Status
              </Table.Th>
              <Table.Th>
                Actions
              </Table.Th>
            </Table.Row>
          </Table.Head>
          <tbody>
            <Table.Row>
              <Table.Cell>
              Paper Box(A4)
              </Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </main>
    </section>
    </>
  )
}

export default Products