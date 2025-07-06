"use client";
import Searchbar from "@/components/Searchbar";
import Card_search from "@/components/Card_search";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const tags = [
    "Intelligence", "Imagination", "Creativity", "Talent", "Curiosity",
    "Passion", "Meditation", "Winners", "Future", "Action", "Failure", "Life"
  ];

  const [quoteList, setQuoteList] = useState<{ quote: string; author: string }[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (quoteList.length === 0) return;
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quoteList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quoteList]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 pt-[100px] pb-12 overflow-x-hidden">
      
      {/* Searchbar */}
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md border border-white/40 shadow-xl p-8 rounded-2xl mb-12">
        <Searchbar setQuoteList={setQuoteList} />

      {/* Quotes display */}
      {quoteList.length > 0 && (
        <div className="mt-10 relative h-40 overflow-hidden w-full md:w-2/3 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full text-center"
            >
              <p className="text-4xl md:text-3xl font-serif italic text-gray-900 leading-relaxed">
                “{quoteList[index].quote}”
              </p>
              <p className="text-right mt-4 text-xl text-gray-700 font-semibold">
                — {quoteList[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      </div>
      {/* Tags */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-10 mt-8">
        {tags.map((tag, index) => (
          <Card_search key={index} tag={tag} setQuoteList={setQuoteList} />
        ))}
      </div>
    </div>


  );
}
