"use client";


import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    
    const { data:rasData, error } = await authClient.signUp.email({
    name: data.name, // required, The name of the user.
    email: data.email, // required, The email of the user.
    password: data.password, // required, The password of the user.
  
     // An optional URL to redirect to after the user signs up.
});
   if(rasData){
     toast.success(" sign up successfully")
    redirect("/sign-in");
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
   <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

  <div className="w-full max-w-md">

    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        অ্যাকাউন্ট তৈরি করুন
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">

      <Form className="w-full" onSubmit={onSubmit}>

        <Fieldset>

          <FieldGroup className="gap-5">

            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label>নাম</Label>
              <Input
                placeholder="যেমন: রহিম উদ্দিন"
                className="mt-1"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
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
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="mt-1"
              />

              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

          </FieldGroup>

          <Fieldset.Actions className="mt-2">

            <Button
              type="submit"
              className="w-full bg-[#05893E] text-white font-semibold hover:bg-[#047a37]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
           
          </Fieldset.Actions>

        </Fieldset>
              <div className="flex items-center gap-2 mt-3">
           <hr className="flex-1 border-0 border-t border-[#E4E7E4]" />
           <p>অথবা</p>
             <hr className="flex-1 border-0 border-t border-[#E4E7E4]" />
              </div>
            <div className='flex gap-2 mt-3'>
                <Button type="button" className="w-full" onClick={signInGoogle}><FcGoogle /> Google দিয়ে চালিয়ে যান</Button>
                <Button type="button" className="w-full" onClick={signInGithub}><FaGithub /> GitHub দিয়ে চালিয়ে যান</Button>
            </div>
             <div>
              <h3 className="text-center mt-5">অ্যাকাউন্ট আছে?<Link className="text-[#05893E]" href="/sign-in"> সাইন ইন করুন</Link></h3>
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
