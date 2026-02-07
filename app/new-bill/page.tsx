import CustomerDetails from '@/components/form/CustomerDetails'
import React from 'react'

const NewBill = () => {
  return (
    <>
    <section className="w-full h-fit ">
      <header className="w-full h-18 bg-white">

      </header>
      <main className="w-full h-full grid grid-cols-5 grid-rows-3 my-2 gap-2">
        <div className="w-auto col-span-3 ">
          <CustomerDetails/>
        </div>
        <div className="col-span-3 row-span-2 bg-white h-auto w-full ">

        </div>
        <div className="row-span-3 col-span-2 row-start-1 col-start-4 bg-white h-full w-full ">

        </div>
      </main>
    </section>
    </>
  )
}

export default NewBill