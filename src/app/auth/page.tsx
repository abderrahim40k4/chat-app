import Image from 'next/image'
import React from 'react'
import AuthButtons from './AuthButtons'

const page = () => {
  return (
    <div className="flex h-screen w-full">
        <div className="flex-1 flex overflow-hidden dark:bg-slate-950 bg-slate-800 relative justify-center items-center">
            {/* img */}

            <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
                {/* <Image
                src={"/logo.png"}
                alt='logo'
                width={170}
                height={200}
                className='mt-20 w-[420px] z-0 pointer-events-none select-none '
                /> */}

                <p className="text-2xl md:text-3xl text-balance z-10 text-slate-200 ">
                The <span className="bg-cyan-500 text-white font-bold px-1 uppercase">Ultimate</span> Chat app
                </p>

                <p className="text-2xl md:text-3xl text-balance z-10 text-slate-400 mb-32">
                You <span className="bg-red-500 text-white font-bold px-1 uppercase">need to</span> Build
                </p>
                    <AuthButtons/>
            </div>
        </div>
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
                 <Image
                src={"/hero-bg.jpg"}
                fill
                alt='logo'
                className='object-cover dark:opacity-60 opacity-90 pointer-events-none select-none -z-1'
                />
        </div>
    </div>
  )
}

export default page