"use client";
import toast from "react-hot-toast";

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
import { useRouter } from "next/navigation";

export default function Profile() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
  

    await authClient.updateUser({
    
    name: data.name,
      
})
  
    toast.success(" profile name updated successfully")
   
  };
       const { data: session } = authClient.useSession()
         const router = useRouter()
           const handleLogout = async () => {
             await authClient.signOut({
       fetchOptions: {
         onSuccess: () => {
           router.push("/sign-in"); // redirect to login page
         },
       },
     });
     toast.success(" profile sign out successfully")
           }
  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">

  <div className="w-full max-w-md">

    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">

      <Form
        className="w-full"
        onSubmit={onSubmit}
      >

        <div className="mb-6">
          <Fieldset.Legend className="text-2xl font-bold text-gray-900">
            আমার প্রোফাইল
          </Fieldset.Legend>

          <Description className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </Description>
        </div>


        <div className="mb-6 rounded-xl bg-gray-50 border border-gray-100 p-4">

          <div className="flex items-center justify-between gap-4">

            <div className="min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {session?.user?.name}
              </p>

              <p className="text-sm text-gray-500 truncate">
                {session?.user?.email}
              </p>
            </div>

            <Button
              onClick={handleLogout}
              variant="bordered"
              className="shrink-0 border-red-500 text-red-500"
            >
              সাইন আউট
            </Button>

          </div>

        </div>


        <Fieldset>

          <FieldGroup>

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

          </FieldGroup>


          <Fieldset.Actions className="mt-6">

            <Button
              type="submit"
              className="w-full bg-[#05893E] text-white font-semibold hover:bg-[#047a37]"
            >
              আপডেট
            </Button>

          </Fieldset.Actions>

        </Fieldset>

      </Form>

    </div>

  </div>

</div>
  );
}