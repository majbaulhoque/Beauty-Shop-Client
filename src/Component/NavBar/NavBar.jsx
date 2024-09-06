import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const getClassName = ({ isActive, isPending }) => {
    return [
        isPending ? "" : "",
        isActive ? "text-red-600 font-bold" : ""
    ].filter(Boolean).join(" ");
};


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='bg-black top-0 sticky z-30'>
            <div className='flex justify-between items-center max-w-7xl mx-auto py-2 px-2'>
                <div>
                    <Logo />
                </div>
                <div>
                    <div className='md:hidden text-white text-xl' onClick={() =>setIsOpen(!isOpen)}>
                        {
                            isOpen === true ? <RxCross2 /> : <GiHamburgerMenu />
                        }
                    </div>
                    <ul className={` decoration-none md:flex space-x-5 text-white px-2 ${isOpen ? '' : 'hidden'}`}>
                        <li><NavLink to='/' className={getClassName}>Home</NavLink></li>
                        <li><NavLink to='/product' className={getClassName}>Product</NavLink></li>
                        <li><NavLink to='/cart' className={getClassName}>My Cart</NavLink></li>
                        <li><NavLink to='/contact' className={getClassName}>Contact Us</NavLink></li>
                        <li><NavLink to='/login' className={getClassName}>Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
