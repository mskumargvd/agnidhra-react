import React, { useState } from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { Icon } from '../data';

const Header = ({ navigateTo, activePage, user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page, sectionId = null) => {
        navigateTo(page, { sectionId });
        setIsMobileMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigateTo('home');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-black/20 sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center space-x-3">
                    <img src="/logo v2.png" alt="Agnidhra Technologies Logo" className="w-9 h-9"/>
                    <span className="text-2xl font-bold text-gray-100">Agnidhra Technologies</span>
                </a>
                <ul className="hidden md:flex space-x-8 items-center">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'courses'); }} className="nav-link text-gray-300 font-medium pb-1">Courses</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('events'); }} className={`nav-link text-gray-300 font-medium pb-1 ${activePage === 'events' ? 'active' : ''}`}>Events</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('resources'); }} className={`nav-link text-gray-300 font-medium pb-1 ${activePage === 'resources' ? 'active' : ''}`}>Resources</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className={`nav-link text-gray-300 font-medium pb-1 ${activePage === 'blog' || activePage === 'article' ? 'active' : ''}`}>Blog</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact'); }} className="nav-link text-gray-300 font-medium pb-1">Contact</a></li>
                    {user ? (
                        <>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('dashboard'); }} className="nav-link text-gray-300 font-medium pb-1">Dashboard</a></li>
                            <li><button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Logout</button></li>
                        </>
                    ) : (
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('login'); }} className="bg-[#ff7f50] hover:bg-opacity-90 text-white font-semibold px-4 py-2 rounded-lg">Login</a></li>
                    )}
                </ul>
                <button id="mobile-menu-button" className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'courses'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Courses</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('events'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Events</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('resources'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Resources</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Blog</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Contact</a></li>
                        {user ? (
                            <>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('dashboard'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Dashboard</a></li>
                                <li><button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-[#374151]">Logout</button></li>
                            </>
                        ) : (
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('login'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Login</a></li>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
