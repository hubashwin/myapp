import React from "react";
import { useState } from "react";
import * as ai from 'react-icons/ai'
import { useAuth } from "../context/AuthContext";
import Categories from './Categories'
import { Outlet, Link, NavLink } from "react-router-dom"
// ${active ? "bg-gradient-to-t from-slate-800 to-slate-500 text-gray-400" : "hover:bg-gradient-to-t from-slate-900 to-blue-950 text-gray-600"}

function Layout() {
    const { authName,
        setauthName,
        authEmail,
        setauthEmail,
        isLoggedIn,
        setisLoggedIn } = useAuth();


    return (
        <>
            <div id="nav">
                <nav className={`bg-gray-900 w-full sticky text-gray-600 h-16 top-0`}>
                    <ul className="text-xl font-light font-serif text-center">
                        <li className="text-gray-100 mt-4 inline text-3xl mx-8 float-left hover:text-slate-600 transition-colors duration-300">
                            <Link to="/" style={{ fontFamily: "Milonga,serif" }}>
                                ShopAze
                            </Link>
                        </li>
                        <li >
                            <Link className="my-4 mobile:p-0  inline float-left w-40 hover:rounded-md text-gray-100 hover:text-slate-600 transition-colors duration-300 font-serif font-normal cursor-pointer mobile:w-5 mobile:mx-1 mobile:my-1" id="home" to="/">Home</Link>
                        </li>
                        <li id='cart' className={`my-2  mobile:p-0 mr-10 inline float-right hover:rounded-full text-gray-100 font-serif font-normal cursor-pointer hover:text-slate-600 transition-colors duration-300`}>
                            <Link className="mr-5" to="/cart"><ai.AiOutlineShoppingCart size={40} /></Link>
                        </li>
                        <li id="sign" className={`inline float-right my-1 mx-3 p-3 mobile:p-0 hover:rounded-md w-40  font-serif text-gray-100 hover:text-slate-600 transition-colors duration-300 font-normal cursor-pointer`}>
                            <Link className="my-1 mx-3 p-4 after:font-normal" to="sign-in"><span>{isLoggedIn ? authName : "Sign In"}</span></Link>
                        </li>
                        <li className="text-gray-100 my-1 mr-10 p-3 mobile:p-0 inline float-right w-20 hover:rounded-md font-serif font-normal hover:text-slate-600 transition-colors duration-300 cursor-pointer" id="you">
                            <Link className="my-1 mx-7 p-4" to="/you">You</Link>
                        </li>
                        <li>
                            <input type="search" className="my-2 h-11 w-[620px] rounded-l-lg" /><ai.AiOutlineSearch className={`cursor-pointer inline h-11 rounded-r-lg mb-1 w-9 bg-slate-300 hover:bg-slate-600`} color="black" />
                        </li>
                    </ul>
                </nav>
                <Categories />
            </div>
            < Outlet />
        </>
    )
}

export default Layout;