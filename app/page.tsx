"use client";
import useQuoteApi from "@/lib/useQuoteApi";

export default function HandleApiPage() {
  const { quote, author } = useQuoteApi();


  return (
    <div className="bg-cover items-center bg-center min-h-screen flex flex-col justify-center">
      {quote ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Quote of the day
          </h1>
          <div className="w-2/3 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl p-8 rounded-2xl">
            <blockquote className="text-4xl md:text-3xl font-serif italic text-gray-900 leading-relaxed">
              “{quote}”
            </blockquote>
            <p className="text-right mt-2 text-xl text-gray-700 font-semibold">
              — {author}
            </p>
          </div>
        </>
      ) : (
        <p className="text-lg text-black animate-pulse">Loading...</p>

      )}
    </div>
  );
}
