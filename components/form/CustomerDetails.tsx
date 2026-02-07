import React from 'react'
import Input from '../base/Input'

const CustomerDetails = () => {
  return (
    <>
    <section className="w-full h-auto p-2 bg-white rounded-lg">
        <aside className="w-full h-auto">
            <h1 className="text-2xl">
                Customer Details
            </h1>
        </aside>
        <form action="" className='w-full h-auto grid grid-cols-2 grid-rows-2 gap-2'>
            <Input label="Customer Name" type='text' placeholder='Walk-in customer' />
            <Input label="Phone Number" type='number' placeholder='Enter mobile number' />
            <Input label="Email ID" type='email' placeholder='Optional for invoice copy' />
            <Input label="Reference / Note" type='text' placeholder='E.g. College project, ID card xerox' />
        </form>
    </section>
    </>
  )
}

export default CustomerDetails