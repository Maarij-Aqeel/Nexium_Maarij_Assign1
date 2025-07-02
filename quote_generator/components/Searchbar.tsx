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
import { useState } from "react";

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

  const [quote,setQuote]=useState("")
  const [author,setAuthor]=useState("")
  
  return (
    <>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          const result=quotes(data.topic)
          setQuote(result.quote)
          setAuthor(result.author)

        })}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Topic</FormLabel>
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

    {quote &&(
      <div className="mt-6 text-center">
          <p className="text-2xl md:text-2xl font-serif italic text-gray-900 leading-relaxed">“{quote}”</p>
<p className="text-right mt-4 text-lg text-gray-700 font-semibold">— {author}</p>

        </div>
    )}
    </>

  );
}
