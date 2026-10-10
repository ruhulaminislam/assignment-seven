
import { connection } from "next/server";
import Image from 'next/image'

import MarqueeTexte from './MarqueeTexte'
import NavberLinks from './NavberLinks'

import NavberProductLinks from './NavberProductLinks'

const Navber = async () => {
    const res =await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const allProducts = await res.json()
  await connection();
    const date = new Date().toLocaleDateString('bn-BD',{
        dateStyle: 'full',
    } )
  return (
     <div className='bg-[#FAFCFA]'>
         <div className=' '>
         <div className='flex justify-between items-center  container mx-auto  py-3  '>

            <div className='flex items-center gap-3'>

                <div className='bg-[#05893E] rounded-lg overflow-hidden '>
                    <Image
                        src="/logo-icon.png"
                        alt='logo'
                        height={50}
                        width={50}
                        className='w-11 h-11 object-contain p-3'
                    />
                </div>

                <div>
                    <h1 className='text-xl md:text-2xl font-bold text-[#1D271F]'>
                        বাজার দর
                    </h1>

                    <p className='text-sm text-[#1D271F]  text-2xl mt-1'>
                        {date}
                    </p>
                </div>

            </div>

            <div className='flex items-center gap-2'>
                <NavberLinks></NavberLinks>
            </div>

        </div>
         <div className=' border-b border-t border-[#E1E8E1]'>
            <NavberProductLinks allProducts={allProducts}></NavberProductLinks>
         </div>
         <div className='  py-1 bg-[#FAFCFA] border-b border-[#E1E8E1] '>
            <MarqueeTexte></MarqueeTexte>
         </div>
      </div>
     </div>
  )
}

export default Navber
