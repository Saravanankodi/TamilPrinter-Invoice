'use client';

import { Customers, DashBoard, NewFile, Print, Products, Reports } from '@/assets/icons'
import NavLink from '../base/NavLink';
// import React, { useState } from 'react'

const Sidebar = () => {
  // const [isCollapsed,setIsCollapsed] = useState(false);
  const links = [
    {href:"/",icon:<DashBoard/>,lable:"Dashboard",exact:true},
    {href:"/new-bill",icon:<NewFile/>,lable:"New Bill"},
    {href:"/products",icon:<Products/>,lable:"Products"},
    {href:"/customers",icon:<Customers/>,lable:"Customers"},
    {href:"/reports",icon:<Reports/>,lable:"Reports"},
  ]
  return (
    <>
    <section className="w-65 h-screen p-2 bg-white text-black ">
        <aside className=" relative w-full flex items-center justify-center gap-2">
            <div className="w-8 h-fit flex items-center justify-center bg-[#0496ff] rounded-md ">
                <Print className='w-full h-full text-white block m-auto p-1'/>
            </div>
            <h2 className="text-2xl text-center ">
                Tamil Printers POS
            </h2>
            {/* <button onClick={()=>{setIsCollapsed(!isCollapsed)}} className=' absolute right-0 rounded-full border text-2xl font-extrabold p-2 ' >
              {isCollapsed? ">": "<" }
            </button> */}
        </aside>
        <nav className="w-full h-auto flex flex-col gap-1 py-2 my-4">
          {links.map((link)=>(
            <NavLink key={link.href}
              href={link.href}
              lable={link.lable}
              icon={link.icon}
            />
          ))}
        </nav>
    </section>
    </>
  )
}

export default Sidebar