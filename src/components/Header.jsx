import React, { useState } from 'react';

const Header = ({ smoothScroll }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (id) => {
        setIsMobileMenuOpen(false);
        smoothScroll(id);
    };

    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Lilly's Logo/Icon (placeholder) */}
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 0012 21a12.001 12.001 0 008.618-18.016z"/>
                    </svg>
                    <a href="#" className="text-2xl font-bold text-gray-900">Lilly Combest</a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" onClick={() => smoothScroll('about')} className="text-gray-600 hover:text-green-600 transition duration-300">About</a></li>
                        <li><a href="#services" onClick={() => smoothScroll('services')} className="text-gray-600 hover:text-green-600 transition duration-300">Services</a></li>
                        <li><a href="#testimonials" onClick={() => smoothScroll('testimonials')} className="text-gray-600 hover:text-green-600 transition duration-300">Testimonials</a></li>
                        <li><a href="#contact" onClick={() => smoothScroll('contact')} className="text-gray-600 hover:text-green-600 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
                {/* Mobile Menu Button (Hamburger Icon) */}
                <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <button onClick={toggleMobileMenu} className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <ul className="text-3xl font-medium space-y-8">
                    <li><a href="#about" onClick={() => closeMobileMenu('about')} className="text-gray-800 hover:text-green-600 transition duration-300">About</a></li>
                    <li><a href="#services" onClick={() => closeMobileMenu('services')} className="text-gray-800 hover:text-green-600 transition duration-300">Services</a></li>
                    <li><a href="#testimonials" onClick={() => closeMobileMenu('testimonials')} className="text-gray-800 hover:text-green-600 transition duration-300">Testimonials</a></li>
                    <li><a href="#contact" onClick={() => closeMobileMenu('contact')} className="text-gray-800 hover:text-green-600 transition duration-300">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
