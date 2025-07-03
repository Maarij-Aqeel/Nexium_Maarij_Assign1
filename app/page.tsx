"use client";
import quoteApi from "@/lib/quoteApi"

const images=[
  '/images/aesthetic.jpg',
  '/images/black_white.jpg',
  '/images/blue_bg.jpg',
  '/images/mug.jpg',
  '/images/random.jpg',
  '/images/watch_table.jpg',
]

export default function HandleApiPage() {
  const {quote,author}=quoteApi()


  
  return (
    <div className="bg-cover items-center bg-center min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4  text-center">Quote of the day</h1>
      <div className="w-2/3 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl p-8  rounded-2xl ">
      <blockquote className="text-2xl md:text-2xl font-serif italic text-gray-900 leading-relaxed">“{quote}”</blockquote>
      <p className="text-right mt-4 text-lg text-gray-700 font-semibold">— {author}</p>
      </div>
    </div>
  );
}
