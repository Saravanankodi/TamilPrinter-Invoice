import ProductInfo from '@/components/form/ProductInfo'
import React from 'react'

const NewProduct = () => {
  return (
    <>
    <section className="w-full h-max p-2">
        <header className="w-full py-3 px-4 flex items-center justify-between bg-white border border-[#00000014]">
            <aside className="w-fit h-full">
                <div className="h-fit flex items-center gap-2">
                    <p className="text-sm">
                        Products   &gt;
                    </p>
                    <span className="text-sm">
                        New Product
                    </span>
                </div>
                    <h1 className="text-[20px]">
                        Add New Product
                    </h1>
            </aside>
            <div className="w-fit flex items-center gap-2">

            </div>
        </header>
        <main className="w-full h-auto space-y-3">
            <ProductInfo/>
        </main>
    </section>
    </>
  )
}

export default NewProduct