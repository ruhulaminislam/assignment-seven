"use client";


import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
   const { data:resData, error } = await authClient.signIn.email({
    email: data.email, // required, The email of the user.
    password: data.password, // required, The password of the user.
    rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
    callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
});
   if(resData){
     toast.success(" sign in successfully")
   }
   if(error){
     toast.error(error.message)
   }
  };
const signInGoogle = async () => {
 const { data, error } = await authClient.signIn.social({
    provider: "google",
  });
 
   if(data){
      toast.success("google sign in successfully");
    }  
    if(error){
      toast.error("google sign in failed");
    }
};
const signInGithub = async () => {
  const { data, error } = await authClient.signIn.social({
        provider: "github"
    })

    if(data){
      toast.success("github sign in successfully");
    }
   if(error){
      toast.error("github sign in failed");
    }
  }
  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">

  <div className="w-full max-w-md">

    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        সাইন ইন
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">

      <Form
        className="flex w-full flex-col gap-5"
        onSubmit={onSubmit}
      >

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>ইমেইল</Label>

          <Input
            placeholder="you@example.com"
            className="mt-1"
          />

          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {

            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }

            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>

          <Input
            placeholder="আপনার পাসওয়ার্ড লিখুন"
            className="mt-1"
          />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <div className="flex gap-2 mt-2">

          <Button
            type="submit"
            className="w-full bg-[#05893E] text-white font-semibold hover:bg-[#047a37]"
          >
            সাইন ইন
          </Button>
          
        </div>
        <div className="flex items-center gap-2 mt-3">
         <hr className="flex-1 border-0 border-t border-[#E4E7E4]" />
       <p>অথবা</p>
        <hr className="flex-1 border-0 border-t border-[#E4E7E4]" />
          </div>
               <div className='flex gap-2'>
                <Button type="button" className="w-full" onClick={signInGoogle}><FcGoogle /> Google দিয়ে চালিয়ে যান</Button>
                <Button type="button" className="w-full" onClick={signInGithub}><FaGithub /> GitHub দিয়ে চালিয়ে যান</Button>
            </div>
            <div>
              <h3 className="text-center">অ্যাকাউন্ট নেই?<Link className="text-[#05893E]" href="/sign-up"> সাইন আপ করুন</Link></h3>
            </div>
      </Form>
       
    </div>
       <div className="mt-7">
        <Link href="/"><p className="text-center text-[#717973]"> ← হোম পেজে ফিরে যান</p></Link>
        </div>
  </div>

</div>
  );
}