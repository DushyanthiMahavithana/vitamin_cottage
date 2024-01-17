"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react"
import GoogleLogin from "./GoogleLogin"

const FormSchema = z
.object({
  username:z.string().min(1, 'Username is Required'),
  email: z.string().min(1, 'Email is Required').email('Invalid email'),
  password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password should contain more than 8 characters'),
  confirmpassword: z
  .string()
  .min(1, 'Password Confirmation is Required')
  
})
.refine((data) => data.password === data.confirmpassword,{  /*matching the passwords to confirm*/
  path:['confirmpassword'],
  message:'Invalid Password',
  
});

const InputForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    
  });

  const onSubmit = (values:z.infer<typeof FormSchema>) => {
    console.log(values);

  }
    

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mx-auto">
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="enter the username" type="username" {...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-black" />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="enter the email" type="username" {...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-black" />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="enter the password" type="password"{...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-black" />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Re-enter the password" type="password" {...field} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 text-black" />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        </div>
        <Button type="submit">SUBMIT</Button>
      </form>
      <div className="w-2/3 mx-auto my-4 flex items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleLogin/>
      <p className="w-2/3 space-y-6 mx-auto mb-20">If you already have an account, please&nbsp;<Link className="text-green-500 hover:underline" href='/login'>Login</Link></p>
    </Form>
  )
};
export default InputForm;
function refine() {
  throw new Error("Function not implemented.")
}

