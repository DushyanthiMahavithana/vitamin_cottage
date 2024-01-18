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
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


const FormSchema = z.object({
  username:z.string().min(1, 'Username is Required'),
  password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password should contain more than 8 characters'),
  
  
});

const LoginForm = () => {
  const router = useRouter( )
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    
  });

  const onSubmit = async (values:z.infer<typeof FormSchema>) => {
    const loginData = await signIn('credentials',{
      username: values.username,
      password: values.password,
      redirect: false,
    });

    if(loginData?.error){
      toast({
        title: "Error",
        description: "Something Went Wrong",
      })
    }else{
      router.refresh();
      router.push('/profile');
    }
   

  };
    

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
        </div>
        <Button type="submit">SUBMIT</Button>
      </form>
      <div className="w-2/3 mx-auto my-4 flex items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleLogin/>
      <p className="w-2/3 space-y-6 mx-auto mb-20">If you don't have an account, please&nbsp;<Link className="text-green-500 hover:underline" href='/register'>Register Now</Link></p>
    </Form>
  )
};
export default LoginForm;
