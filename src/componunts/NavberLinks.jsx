"use client"
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const NavberLinks = () => {
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
toast.success("সাইন আউট করা হয়েছে");
      }
  return (
    <div>
     {
        session?.user ?<>
         <div className='flex  gap-2 items-center'>
          <div> 
             <p>{session.user.name}</p>
             
            </div>
            <div className='flex  gap-2'>
              <Link href="/profile"><Button>👤 আমার প্রোফাইল</Button></Link>
                <Button onClick={handleLogout}>সাইন আউট</Button>
            </div>
         </div>
         
        </> :<>
        <div className='flex items-center gap-2'>
      <Link href="/sign-in" ><Button>সাইন ইন</Button></Link>
      <Link href="/sign-up" ><Button>সাইন আপ</Button></Link>
        </div>
        </>
     }
    </div>
  )
}

export default NavberLinks
