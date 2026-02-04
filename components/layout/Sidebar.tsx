import { DashBoard, Print } from '@/assets/icons'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <section className="w-auto max-w-65 h-full p-2">
        <aside className="w-full flex items-center justify-center gap-2">
            <div className="w-6 h-fit flex items-center justify-center bg-[#0496ff] ">
                <DashBoard className=''/>
            </div>
            <h2 className="text-2xl text-center">
                Tamil Printers POS
            </h2>
        </aside>
    </section>
    </>
  )
}

export default Sidebar