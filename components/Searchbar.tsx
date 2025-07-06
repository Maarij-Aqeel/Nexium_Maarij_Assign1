"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import quotes from "@/lib/quotes"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const FormSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
});

export default function Searchbar({ setQuoteList }: {
  setQuoteList: React.Dispatch<React.SetStateAction<{ quote: string; author: string }[]>>
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          const result = quotes(data.topic);
          setQuoteList(result);
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
                  className="w-full md:w-2/3 px-4 py-2 rounded-full border border-gray-400 hover:ring-2 hover:ring-black
                  hover:placeholder-black shadow-sm transition-all duration-500"
                  placeholder="Search by topic e.g., life, success, creativity"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button
            className="bg-gray-700 text-white hover:bg-black border border-black hover:text-white rounded-md transition-colors duration-300">
            Submit
          </Button>
          
      </form>
    </Form>
  );
}
