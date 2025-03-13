import { useState , useEffect } from "react"

export const Navbar = ({menuOpen,setMenuOpen}) =>{

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen]);

    return(
        <nav className="fixed top-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-cyan-200/50 shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    <a href="#home" className="text-2xl font-bold font-mono">Portfolio<span className="text-cyan-400">Ui</span></a>

                    <div className="w-7 h-7 relative cursor-pointer z-40 md:hidden hover:blue-500 transition-colors" onClick={()=> setMenuOpen((prev)=>!prev)}>
                        &#9776;
                    </div>

                    <div className="hidden text-md md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:!text-cyan-500 transition-colors "> Home</a>

                        <a href="#about" className="text-white hover:text-cyan-500 transition-colors "> About</a>

                        <a href="#project" className="text-white hover:text-cyan-500 transition-colors "> Projects</a>

                        <a href="#contact" className="text-white hover:text-cyan-500 transition-colors "> Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}