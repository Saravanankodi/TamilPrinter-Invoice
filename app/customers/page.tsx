import { Add } from '@/assets/icons'
import Download from '@/assets/icons/Download'
import Button from '@/components/base/Button'
import React from 'react'

const Customers = () => {
  return (
    <>
    <section className="w-full">
      <header className="w-full py-3 px-4 flex items-center justify-between bg-white border border-[#00000014]">
        <aside className="w-fit h-full">
          <div className="h-fit flex items-center gap-2">
          <h1 className="text-2xl">
            Customers 
          </h1>
          </div>
        </aside>
        <div className="w-fit flex items-center gap-2">
         <Button icon={<Download/>} variant='outline' >
            Export List
         </Button>
         <Button icon={<Add/>} variant='primary' >
          Add Customer
         </Button>
        </div>
      </header>
      
    </section>
    </>
  )
}

export default Customers