"use client";
import quoteApi from "@/lib/quoteApi"
import { useEffect, useState } from "react";

const images=[
  '/images/aesthetic.jpg',
  '/images/black_white.jpg',
  '/images/blue_bg.jpg',
  '/images/mug.jpg',
  '/images/random.jpg',
  '/images/watch_table.jpg',
]

export default function HandleApiPage() {
  const [bgimage,setBgimage]=useState("")
  const {quote,author}=quoteApi()


  useEffect(() => {
      const randomIndex = Math.floor(images.length * Math.random())
      setBgimage(images[randomIndex])
    
    

  }, []);

  
  return (
    <div className="bg-cover items-center bg-center min-h-screen flex flex-col justify-center"style={{ backgroundImage:bgimage? `url(${bgimage})`:"none"  }}>
      <h1 className="text-2xl font-bold mb-4  text-center">Quote of the day</h1>
      <div className="p-4 backdrop-blur-sm rounded-2xl bg-white/30 w-2/3 shadow-2xl">
        <blockquote className="italic text-lg">"{quote}"</blockquote>
        <p className="text-right mt-2 font-bold">— {author}</p>
      </div>
    </div>
  );
}
