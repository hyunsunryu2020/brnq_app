'use client';
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';




const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const formSchema = authFormSchema(type);
     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password:""
    },
  })
 
  // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
     setIsLoading(true)
        try {
            //Sign up with Appwrite & create plaid link token
            console.log(values)
            setIsLoading(false);
            if (type === 'sign-in') {
                
            }
            if (type === 'sign-up') {
                
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
  }
    
  return (
      <section className="auth-form">
          <header className='flex flex-col gap-5 md:gap-8'>
               <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="BrnQ logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">BrnQ</h1>
              </Link>
              <div className="flex flex-col gap-2 md:gap-3">
                  <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                      {user ? 'Link Account'
                          : type === 'sign-in' ? 'Sign In' :
                              'Sign Up'
                      }
                      <p className="text-16 font-normal text-gray-600">
                          {user
                              ? 'Link your account to get started' :
                              'Please enter your details'
                          }
                      </p>
                  </h1>
              </div>
          </header>
          {user ? (
              <div className="flex flex-col gap-4">
                  {/* PlaidLink */}
              </div>
          ) : (
                  <>
                      <Form {...form}>        
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                              {type === 'sign-up' && (
                                  <>
                                      <div className="flex gap-4">
                                      <CustomInput control={form.control} name="firstname" label="First Name" placeholder="Enter your first name" />
                                        <CustomInput  control={form.control} name="lastname" label="Last Name" placeholder="Enter your last name" />
                                        </div>
                                      <CustomInput control={form.control} name="address1" label="Address" placeholder="Enter your address" />
                                      <div className="flex gap-4">
                                      <CustomInput control={form.control} name="state" label="State" placeholder="ex: NY" />
                                      <CustomInput control={form.control} name="postalcode" label="Postal Code" placeholder="ex: 11101" />
                                      </div>
                                      <div className="flex gap-4">
                                      <CustomInput control={form.control} name="dob" label="Date of Birth" placeholder="yyyy-mm-dd" />
                                      <CustomInput control={form.control} name="ssn" label="SSN" placeholder="ex: 1234" />
                                      </div>
                                     

                                  </>
                              )}
                              <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" />
                              <CustomInput control={form.control} name="password" type="password" label="Password" placeholder="Enter your password" />
                              <div className="flex flex-col gap-4">
                                  <Button type="submit" className='form-btn' disabled={isLoading}>
                                  {isLoading ? (
                                      <>
                                          <Loader2 size={20} className="animate-spin" /> $nbsp;
                                          Loading ...
                                      </>
                                  ):type==="sign-in"?'Sign In':'Sign Up'}
                            </Button>
                              </div>
                              
                        </form>
                      </Form>
                      <footer className="flex justify-center gap-1">
                          <p className="text-14 font-normal text-gray-600">
                              {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}</p>
                          <Link className="form-link" href={type === 'sign-in' ? '/sign-up' :
                              '/sign-in'}>
                              {type === 'sign-in' ? 'Sign Up' :
                              'Sign In'
                          }
                          </Link>
                      </footer>
                  </>
          )}
      </section>
  )
}

export default AuthForm