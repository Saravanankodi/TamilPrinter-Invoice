import { Calander, Notification } from '@/assets/icons'
import React from 'react'

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
    </section>
    </>
  )
}

export default Products