'use client';
import { NavLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLink({href,icon,lable,collapsed,exact}:NavLinkProps) {
    const pathName = usePathname()
    
    const isActive = exact 
                    ? pathName === href 
                    : href === "/" 
                    ? pathName === "/" 
                    : pathName.startsWith(href);
  return (
    <>
    <Link href={href} className={`w-full h-11 flex  items-center gap-2 rounded-md p-1 ${isActive ? "bg-[#0496ff] text-white":"bg-white text-black"} `} >
      {icon && (
        <span className="w-8 h-8 p-1">
          {icon}
        </span>
      )}
      <span className={`text text-base text-center ${collapsed ? "hidden" : "block"}`}>
        {lable}
      </span>
    </Link>
    </>
  )
}
