"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navigation(){
    const path_name=usePathname()
    const class_apply=(path:string)=>{
        return path_name===path?'font-bold text-blue-600':''
    }

    return (
        <nav className="flex gap-6">
            <Link href='/' className={class_apply("/")}>Random</Link>
            <Link href='/search' className={class_apply("/search")}>Search by Topic</Link>
        </nav>
    )
}