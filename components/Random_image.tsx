"use client"

import { useEffect, useState } from "react";

const images=[
"/images/gradient1.jpg",
"/images/gradient2.jpg",
"/images/gradient3.jpg",
"/images/gradient5.jpg",
"/images/gradient7.jpg",
"/images/gradient8.jpg",
 
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