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
import {
  ContactFormValues,
  getContactFormSchema,
} from "@/lib/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const validationMessages = useTranslations("validation");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(getContactFormSchema(validationMessages)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Handle form submission
    console.log(data);
  }

  return (
    <div className='flex items-center justify-center p-4 relative z-30'>
      <div className='w-full max-w-md backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-shadow'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 text-white'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder='Your name' {...field} className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-mainBcg focus:slate-500-none bg-slate-500" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='your.email@example.com'
                      type='email'
                      {...field}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-slate-500 focus:outline-non bg-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Type your message here...'
                      className='resize-none w-full rounded-md border border-gray-300 px-4 py-2 shadow-input focus:border-slate-500 focus:outline-none bg-slate-500'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className="flex bg-slate-500 text-white hover:bg-white hover:text-slate-500 mx-auto transition-all duration-300 ease-in-out">{t("submit")}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
