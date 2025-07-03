"use client"

import { useEffect, useState } from "react";

const images=[
  '/images/aesthetic.jpg',
  '/images/black_white.jpg',
  '/images/blue_bg.jpg',
  '/images/mug.jpg',
  '/images/random.jpg',
  '/images/watch_table.jpg',
]

export default function random_image({
      children,
}: {
  children: React.ReactNode;
}) {
      const [bg_image,setBgImage]=useState("")

      useEffect(()=>
      {
        const randomIndex=Math.floor(images.length*Math.random())
        setBgImage(images[randomIndex])
      },[])
      
      return (
      <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {children}
    </div>
      )

}