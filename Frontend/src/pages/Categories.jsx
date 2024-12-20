import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { SidebarItem } from './SideNavBar.jsx'
import { ChevronLastIcon, LayoutDashboard } from 'lucide-react'
import * as ai from 'react-icons/ai'
import Sidebar from './SideNavBar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const Categories = () => {
    const { authName,
        setauthName,
        authEmail,
        setauthEmail,
        isLoggedIn,
        setisLoggedIn } = useAuth();
    const [isopen, setisopen] = useState(false);
    const [active, setActive] = useState(0)

    function handleClick() {
        setisopen(!isopen);
    }

    return (
        <>
            <nav>
                <ul className='h-10 text-white bg-slate-700'>
                    <li className='inline-grid text-white hover:text-slate-500 transition-colors duration-200  mt-4 mx-3 float-left' onClick={handleClick}>
                        {isopen ? <ai.AiOutlineClose className="-my-1 cursor-pointer" onClick={handleClick} /> : <ai.AiOutlineMenu className="-my-1 cursor-pointer" onClick={handleClick} />}
                        <h3 className="inline -my-4 cursor-pointer mx-7">Menu</h3>
                    </li>
                    <li className='inline-grid text-white hover:text-slate-500 transition-colors duration-200 mx-16 mt-2 ' >
                        <Link to='/fashion'>Fashion</Link>
                    </li>
                    <li className='inline-grid text-white hover:text-slate-500 transition-colors duration-200 mx-8 p-1 '>
                        <Link to='/electronics'>Electronics</Link>
                    </li>
                    <Outlet />
                </ul>
            </nav>
            {isopen && (
                <Sidebar>
                    <ChevronLastIcon color="black" onClick={handleClick} size={35} className="cursor-pointer hover:bg-slate-400 rounded-lg float-right" />
                    <img src="https://th.bing.com/th?id=OIP.xXsFM1rQUZ80OEAuKLEZbQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="w-20 rounded-full" />
                    <h1 className="ml- text-3xl -mt-96 mb-96 ml-44">ShopAze</h1>
                    <div className="mb-96"><Link to="/"><SidebarItem icon={<ai.AiOutlineHome size={30} />} text={"Home"} /></Link>
                        <SidebarItem icon={<LayoutDashboard icon={20} />} text="Categories" /></div>
                    <Link to="/cart"><SidebarItem icon={<ai.AiOutlineShoppingCart size={30} />} text="Your Cart" /></Link>
                    <Link to='/you'><SidebarItem icon={<ai.AiOutlineUser size={25} />} text="You" /></Link>
                    <SidebarItem icon={<ai.AiOutlineInfoCircle size={30} />} text="Help" alert />
                    <div className="inline text-black bg-slate-300 rounded-lg mb-4">
                        <img src="https://th.bing.com/th/id/OIP.iHFDsJQuSlur5WFmoDXI1gAAAA?w=181&h=181&c=7&r=0&o=5&pid=1.7" className="rounded-2xl w-16 h-16" />
                        <h1>{isLoggedIn ? authName : "Sign In"}</h1>
                    </div>
                </Sidebar >
            )}       </>
    )
}

export default Categories;
