"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import quotes from "@/lib/quotes"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {motion,AnimatePresence} from "framer-motion"
import { useState,useEffect } from "react";

const FormSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
});

export default function Search() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
    },
  });

  const [quoteList,setQuotelist]=useState<{ quote: string; author: string }[]>([]);
  const [index,SetIndex]=useState(0)  
   // Reset animation cycle when new quotes come in
  useEffect(() => {
    if (quoteList.length === 0) return;
    SetIndex(0); // reset index

    const interval = setInterval(() => {
      SetIndex((prev) => (prev + 1) % quoteList.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [quoteList]);

  
  return (
    <>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          const result=quotes(data.topic)
          setQuotelist(result)
        })}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-2xl">Topic</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 px-4 py-2 rounded-full border border-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
                  placeholder="Search by topic e.g., life, success, creativity"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit">Submit</Button>
      </form>
    </Form>

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
              <p className="text-2xl md:text-2xl font-serif italic text-gray-900 leading-relaxed">
                “{quoteList[index].quote}”
              </p>
              <p className="text-right mt-4 text-lg text-gray-700 font-semibold">
                — {quoteList[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>

  );
}
