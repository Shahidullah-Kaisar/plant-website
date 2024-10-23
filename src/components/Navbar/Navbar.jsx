import React, { useState } from 'react'; 
import leaf1 from '../../assets/leaf-1.png'
import leaf2 from '../../assets/leaf-2.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState (false);

    const handleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    const closeMenue = () =>{
        setMenuOpen(false)
    }
    const handleScrollToHome = () =>{
        document.getElementById('home').scrollIntoView({behavior: 'smooth'})
    }
    const handleScrollToAbout = () =>{
        document.getElementById('about-us').scrollIntoView({behavior: 'smooth'})
    }
    const handleScrollToPopular = () =>{
        document.getElementById('popular').scrollIntoView({behavior: 'smooth'})
    }
    const handleScrollToReview = () =>{
        document.getElementById('review').scrollIntoView({behavior: 'smooth'})
    }

    const navLinks = <>
        <li><NavLink to="/" className='nav-link' onClick={() => {closeMenue(); handleScrollToHome()}}>Home</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue() ; handleScrollToAbout()}}>About</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue(); handleScrollToPopular()}}>Popular</NavLink></li>
        <li><NavLink to="" className='nav-link' onClick={()=> {closeMenue(); handleScrollToReview()}}>Review</NavLink></li>
    </>

    
    
    return (
        <>
            <header className='bg-blue-950 fixed w-full top-0 left-0 z-50'>
                <nav className='container flex items-center justify-between h-16 sm:h-20'>
                    <div className='font-Lobster sm:text-2xl'>IndorePlants</div>

                    <div className={`absolute top-0 ${menuOpen ? 'left-0' : 'left-[-100%]'} min-h-[80vh] w-full bg-blue-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
                        <ul className='flex flex-col items-center gap-8 lg:flex-row'>

                            {navLinks}
                            
                        </ul>
                        <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
                            <img src={leaf1} alt="leaf1" className='w-32'/>
                        </div>
                        <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
                            <img src={leaf2} alt="leaf2" className='w-32'/>
                        </div>
                        <div className='absolute top-5 right-5 text-3xl cursor-pointer lg:hidden' onClick={handleMenu}>
                            <IoMdClose/>
                        </div>
                    </div>
                    <div className='text-xl sm:text-3xl cursor-pointer x-50 lg:hidden' onClick={handleMenu} >
                        <IoMdMenu />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;


// <h1 className='lg:text-3xl sm:text-lg md:text-xl font-bold bg-green-500 sm:bg-red-600 md:bg-blue-700 lg:bg-yellow-700 text-white container font-Lobster'>Hello World</h1>