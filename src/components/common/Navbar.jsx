import React, { useState, useEffect } from 'react'
import { NAVBAR_LIST } from './Helper'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrollingUp, setScrollingUp] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        const currentScrollY = window.scrollY
        setScrollingUp(currentScrollY < lastScrollY)
        setLastScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <div
            className={`w-full mx-auto fixed px-10 shadow-teal-300 top-0 left-0 h-20 bg-white shadow-xl transition-transform duration-300 ${scrollingUp ? 'translate-y-0' : '-translate-y-full shadow-none'}`}
            id='fixedNav'
        >
            <div className='flex max-w-[1140px] mx-auto items-center justify-between h-full'>
                <a href="/" className='text-3xl font-bold font-sans'>Logo</a>

                {/* Hamburger Menu Button */}
                <button
                    className='md:hidden flex relative z-10 flex-col items-center justify-center gap-1'
                    onClick={() => setOpen(!open)}
                >
                    <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${open ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Navbar Links */}
                <ul
                    className={`max-md:min-h-screen max-md:w-full flex md:items-center md:justify-center md:flex-row flex-col items-center justify-center gap-5 fixed md:relative max-md:bg-white md:bg-transparent duration-300 ease-in-out ${open ? 'right-0' : 'right-[-100%]'} top-0 md:left-0`}
                >
                    {NAVBAR_LIST.map((obj, index) => (
                        <li onClick={() => setOpen(false)} key={index} className='text-black capitalize text-lg duration-300 hover:text-yellow-800 font-medium font-sans'>
                            <a href={obj.Url}>{obj.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar


