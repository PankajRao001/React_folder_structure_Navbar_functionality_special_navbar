import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='flex items-center justify-center min-h-screen flex-col'>
            <Navbar />
            <div className='max-w-[1180px] px-5 mx-auto min-h-screen flex grow flex-col items-center justify-center'>
                <h1 className='text-black text-5xl font-bold font-sans'>IT is the main Heading</h1>
                <p className='text-black font-medium text-xl mt-4'>it is the description</p>
                <div className='grid gap-3 grid-cols-4'>
                    <div className='bg-black text-white text-2xl py-5 px-4 border-red-600 border'>
                        <h2>testimonials</h2>
                    </div>
                    <div className='bg-black text-white text-2xl py-5 px-4 border-red-600 border'>
                        <h2>testimonials</h2>
                    </div>
                    <div className='bg-black text-white text-2xl py-5 px-4 border-red-600 border'>
                        <h2>testimonials</h2>
                    </div>
                    <div className='bg-black text-white text-2xl py-5 px-4 border-red-600 border'>
                        <h2>testimonials</h2>
                    </div>
                    <div className='bg-black text-white text-2xl py-5 px-4 border-red-600 border'>
                        <h2>testimonials</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero