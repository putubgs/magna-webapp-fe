"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  company: z.string().min(1, {
    message: "Company is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Invalid email format"),
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export default function CvReviewFormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="py-10 px-4 md:px-[120px] space-y-11 text-lg flex flex-col items-center">
      <h2 className="text-5xl sm:text-6xl md:text-7xl text-center">
        Come <br className="md:hidden" />
        <span className="bg-clip-text pr-3 text-transparent bg-gradient-to-r from-[#9299F5] to-[#482796] font-extrabold italic">
          Join With Us
        </span>
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-5 bg-black w-full relative rounded-lg grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Username <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Hello, What's Your Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Company/Organization <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="What's Your Company" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="What's Your Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-3">
                <FormLabel>
                  Description <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description about partner"
                    className="resize-none"
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="md:col-span-3 flex justify-end">
            <Button type="submit">Become Our Parter</Button>
          </div>

          <div className="absolute size-[400px] -z-10 -top-48 -left-52 opacity-80">
            <Image
              src={"/assets/img/cv-review/blurred-circle-purple.png"}
              alt="Circle"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="absolute size-[400px] -z-10 -bottom-10 -right-60 opacity-80">
            <Image
              src={"/assets/img/cv-review/blurred-circle-purple.png"}
              alt="Circle"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
        </form>
      </Form>
    </section>
  );
}
