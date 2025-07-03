"use client"
import Searchbar from "@/components/Searchbar"


export default function Home() {

 
  return (

    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      
      <div className="w-2/3 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl p-8  rounded-2xl ">
          <Searchbar/>
      </div>
    </div>
  );
}
