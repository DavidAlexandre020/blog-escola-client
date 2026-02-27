import { useEffect, useState } from "react"
import Image from "./Image"
import { Link } from "react-router-dom"
import { 
  SignedIn, 
  SignedOut, 
  UserButton 
} from "@clerk/clerk-react";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 100) {
            setScolled(true)
        }else {
            setScolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className={`w-full h-16 md:h-20 flex items-center justify-between main-header ${scrolled ? "sticky-header" : ""}`}>
        {/* LOGO */}
        <Link to='/' className='flex items-center gap-2 text-2xl font-bold'>
            <Image src='/mini_logo.png' alt='Logo' w={48} h={48} />
            <span className="text-[#152751]">JTJZ<span className='text-[#147260]'> Blog.</span></span>
        </Link>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
          {/* MOBILE BUTTON */}
          <div 
            className='cursor-pointer text-4xl'
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* Change Hamburger Icon */}
            {/* {open ? "X" : "☰"} */}
            <div className="flex flex-col gap-[5.4px]">
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && "rotate-45"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                  open && "opacity-0"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && "-rotate-45"
                }`}
              ></div>
            </div>
          </div>
          {/* MOBILE LINK LIST */}
          <div 
            className={`w-full h-screen bg-[#e6e6ff] flex-col items-center justify-center gap-8 font-medium 
              text-lg absolute top-16 transition-all ease-in-out z-30 menu-mobile ${open ? '-right-0 flex' : '-right-[100%] hidden'}`}
          >
            <Link to="/" onClick={()=>setOpen(false)}>Inicio</Link>
            <Link to="/posts?sort=trending" onClick={()=>setOpen(false)}>Tendências</Link>
            <Link to="/posts?sort=popular" onClick={()=>setOpen(false)}>Mais populares</Link>
            <Link to="/about" onClick={()=>setOpen(false)}>Sobre Nós</Link>
            <SignedOut>
              <Link to="/login" onClick={()=>setOpen(false)}>
                <button className='py-2 px-4 rounded-3xl bg-[#165347] text-white'>
                  Login 👋
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {/* DESKTOP MENU */}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
          <Link to="/">Inicio</Link>
          <Link to="/posts?sort=trending">Tendências</Link>
          <Link to="/posts?sort=popular">Mais populares</Link>
          <Link to="/about">Sobre Nós</Link>
          <SignedOut>
            <Link to="/login">
              <button className='py-2 px-4 rounded-3xl bg-[#165347] text-white'>
                Login 👋
              </button>
            </Link>
          </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}
