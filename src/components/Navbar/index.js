"use client"

import Image from "next/image"
import { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation'
import SearchBar from "./SearchBar";

const Navbar = () =>{
    const [dropdownServicesOpen, setDropdownServicesOpen] = useState(false);
    const [dropdownProductsOpen, setDropdownProductsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
        // You can handle search functionality here, like redirecting to a search results page.
      }
    };
    return(
        <>
            <header className=" fixed flex z-10 bg-gradient-to-r from-familymoo-hblue to-cyan-500 flex-wrap gap-3 justify-between items-center px-28 py-2 w-full bg-blend-normal  max-md:px-5 max-md:max-w-full">
                
                <Image src="/logo.png"
                    width={100} height={100}
                    alt="Company logo"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[2.07] w-[62px]"
                ></Image>


                <nav className="hidden md:flex">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" legacyBehavior>
                            <a
                            className="px-3 py-2 rounded-md  font-semibold 
                                text-blue-950  hover:bg-cyan-500 hover:text-white
                            "
                            >
                            Home
                            </a>
                        </Link>

                        <Link href="/artikel" legacyBehavior>
                            <a
                            className="px-3 py-2 rounded-md  font-semibold 
                                text-blue-950  hover:bg-cyan-500 hover:text-white
                            "
                            >
                            Artikel
                            </a>
                        </Link>



                        {/* Navigation Links, Dropdown Menus, and Search Bar */}
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start space-x-4">
                            {/* Dropdown for Services */}
                            <div className="relative">
                            <button
                                onClick={() => setDropdownServicesOpen(!dropdownServicesOpen)}
                                className="rounded-md  font-semibold 
                                text-blue-950  hover:bg-cyan-500 hover:text-white px-3 py-2 "
                            >
                                Keluarga Moo
                            </button>
                            {dropdownServicesOpen && (
                                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <Link href="/services/web-development" legacyBehavior>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</a>
                                    </Link>
                                    <Link href="/services/seo" legacyBehavior>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO</a>
                                    </Link>
                                    <Link href="/services/design" legacyBehavior>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</a>
                                    </Link>
                                </div>
                                </div>
                            )}
                            </div>
                            
                            <Link href="/eventpromo" legacyBehavior>
                                <a
                                className="px-3 py-2 rounded-md  font-semibold 
                                    text-blue-950 bg-cy hover:bg-cyan-500 hover:text-white
                                "
                                >
                                Event & Promo
                                </a>
                            </Link>

                            <Link href="/hadiah" legacyBehavior>
                                <a
                                className="px-3 py-2 rounded-md  font-semibold 
                                    text-blue-950 bg-cy hover:bg-cyan-500 hover:text-white
                                "
                                >
                                Hadiah
                                </a>
                        </Link>

                        <Link href="/belanja" legacyBehavior>
                            <a
                                className="px-3 py-2 rounded-md  font-semibold 
                                    text-blue-950 bg-cy hover:bg-cyan-500 hover:text-white
                                "
                                >
                                Belanja
                                </a>
                            </Link>
                            {/* Dropdown for Products */}
                            <div className="relative">
                            <button
                                onClick={() => setDropdownProductsOpen(!dropdownProductsOpen)}
                                className="rounded-md  font-semibold 
                                text-blue-950  hover:bg-cyan-500 hover:text-white px-3 py-2"
                            >
                                Produk
                            </button>
                            {dropdownProductsOpen && (
                                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <Link href="/products/software" legacyBehavior>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Software</a>
                                    </Link>
                                    <Link href="/products/hardware" legacyBehavior>
                                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hardware</a>
                                    </Link>
                                </div>
                                </div>
                            )}
                            </div>

                            
                        </div>

                        
                        </div>
                    </div>
                </nav>
                

                <div className="hidden md:flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    <SearchBar/>
                    <Link href="/uploadstruk" className="text-white self-stretch px-3 py-2.5 my-auto bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-200  font-semibold rounded-lg text-xs  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload Struk</Link>
                    <Link href="/login" className="text-white self-stretch px-3 py-2.5 my-auto bg-sky-900 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-200  font-semibold rounded-lg text-xs  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Daftar/Masuk</Link>
                    
                    
                    <div className="flex gap-2.5 justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-blue-100 rounded-[72px]">
                        <Image
                        width={100}
                        height={100}
                            loading="lazy"
                            src="/avatar.svg"
                            alt="User profile"
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                        />
                    </div>
                </div>
                
                <div className="flex md:hidden gap-4">
                <Link href="/masuk" className="  text-white self-stretch px-3 py-2.5 my-auto bg-sky-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-600  font-semibold rounded-lg text-xs  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Daftar/Masuk</Link>
                    <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center bg-cyan-600 p-2 rounded-md text-blue-950 hover:text-white hover:bg-gray-700 focus:outline-none"
                    >
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {mobileMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                        )}
                    </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-12 left-auto right-0 bg-cyan-500">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" legacyBehavior>
                        <a
                            className="text-gray-300 hover:bg-gray-700 hover:text-white
                            block px-3 py-2 rounded-md text-base font-medium
                            border-b-fuchsia-400"
                        >
                            Home
                        </a>
                        </Link>


                        {/* Mobile Dropdown: Services */}
                        <button
                        onClick={() => setDropdownServicesOpen(!dropdownServicesOpen)}
                        className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                        Services
                        </button>
                        {dropdownServicesOpen && (
                        <div className="px-4 py-2 space-y-1">
                            <Link href="/services/web-development" legacyBehavior>
                            <a className="block text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md">
                                Web Development
                            </a>
                            </Link>
                            <Link href="/services/seo" legacyBehavior>
                            <a className="block text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md">
                                SEO
                            </a>
                            </Link>
                            <Link href="/services/design" legacyBehavior>
                            <a className="block text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md">
                                Design
                            </a>
                            </Link>
                        </div>
                        )}

                        {/* Mobile Dropdown: Products */}
                        <button
                        onClick={() => setDropdownProductsOpen(!dropdownProductsOpen)}
                        className="block border-b-cyan-900  w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                        Products
                        </button>
                        {dropdownProductsOpen && (
                        <div className="px-4 py-2 space-y-1">
                            <Link href="/products/software" legacyBehavior>
                            <a className="block text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md">
                                Software
                            </a>
                            </Link>
                            <Link href="/products/hardware" legacyBehavior>
                            <a className="block text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md">
                                Hardware
                            </a>
                            </Link>
                        </div>
                        )}
                    </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar