"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"
import Searchbar from "@/components/Searchbar"
import { useState,useEffect } from "react";


const images=[
  '/images/aesthetic.jpg',
  '/images/black_white.jpg',
  '/images/blue_bg.jpg',
  '/images/mug.jpg',
  '/images/random.jpg',
  '/images/watch_table.jpg',
]



export default function Home() {
  
  const [bg_image,setBgimage]=useState("")
  useEffect(()=>
  {
    const randomIndex=Math.floor(images.length*Math.random())
    setBgimage(images[randomIndex])
  })

  return (

    
    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center" 
      style={{backgroundImage:bg_image?`url(${bg_image})`:"none"}}>
      
      <div className="w-2/3 bg-white/20 backdrop-blur-sm p-8  rounded-2xl shadow-lg">
          <Searchbar/>
      </div>
    </div>
  );
}
