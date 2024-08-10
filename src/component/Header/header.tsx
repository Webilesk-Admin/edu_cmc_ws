"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/asset/cmc_header_logo.png";
import cartIcon from "@/asset/cmc_header_cart_icon.png";
import UserProfile from "@/asset/cmc_user_phase_profile.png";
import cartIconBlack from "@/asset/cmc_header_cart_icon_black.png";
import "./header.css";
import Link from "next/link";

interface HeaderProps {
  Color: string;
  ActiveLink: string;
  UserType?: string;
}

const Header: React.FC<HeaderProps> = ({ Color, ActiveLink, UserType }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-contain position-relative flex items-center justify-center w-full hidden md:block">
        <div
          className={`fixed top-0 flex items-center justify-center w-full xl:w-90% z-55 min-w-full p-5 ${
            UserType === "user" ? "min-h-28" : "min-h-20"
          } desk-nav transition-all duration-300 ${
            fixed ? "bg-white shadow-header" : Color === "#fff" ? "" : "bg-white shadow-header"
          }`}
        >
          <div className="flex w-full absolute top-4 lg:w-90% justify-between items-center">
            <Link href="/">
              <Image src={logo} width={80} height={80} alt="Logo" />
            </Link>
            <div
              className={`text-${fixed ? 'black' : Color} text-20 font-600 flex gap-6 lg:gap-10`}
            >
              <Link href="/">
                <p className={`cursor-pointer ${ActiveLink === "1" ? "text-[#F9AB70]" : ""}`}>Home</p>
              </Link>
              <Link href="/courseCategory">
                <p className={`cursor-pointer ${ActiveLink === "2" ? "text-[#F9AB70]" : ""}`}>Courses</p>
              </Link>
              <Link href="/about">
                <p className={`cursor-pointer ${ActiveLink === "3" ? "text-[#F9AB70]" : ""}`}>About us</p>
              </Link>
              <Link href="/testimonial-public">
                <p className={`cursor-pointer ${ActiveLink === "4" ? "text-[#F9AB70]" : ""}`}>Testimonials</p>
              </Link>
              <Link href="/contact">
                <p className={`cursor-pointer ${ActiveLink === "5" ? "text-[#F9AB70]" : ""}`}>Contact</p>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
              <Image
                src={fixed ? cartIconBlack : Color === "#fff" ? cartIcon : cartIconBlack}
                width={40}
                height={40}
                alt="Cart Icon"
              />
              {UserType === "user" ? (
                <Image src={UserProfile} alt="User Profile" className="mt-[-10px]" />
              ) : (
                <Link href="/login-form">
                  <button className="min-w-24 max-w-24 bg-[#F9AB70] min-h-8 max-h-8 flex items-center justify-center rounded-2xl font-600 text-white">
                    Log in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="home-contain position-relative flex items-center justify-center w-full">
        <nav className="w-full fixed z-99 md:hidden bg-white">
          <div className="navbar w-full">
            <div className="nav w-full flex justify-between items-center min-h-30 relative shadow-header">
              <input
                className="checkbox fixed block h-8 w-8 top-5 right-5 z-5 cursor-pointer opacity-0"
                type="checkbox"
                id="nav-toggle"
              />
              <div className="hamburger-lines block h-6 w-8 fixed top-4 right-5 z-2 flex justify-between flex-col">
                <span className="line line1 block h-1 w-full rounded bg-[#0e2431] duration-300"></span>
                <span className="line line2 block h-1 w-full rounded bg-[#0e2431] duration-200"></span>
                <span className="line line3 block h-1 w-full rounded bg-[#0e2431] duration-300"></span>
              </div>
              <div className="logo w-full"></div>
              <div className="menu-items fixed flex pt-30 bg-white min-h-[110vh] text-center min-w-80% pl-12 translate-x-[-100%] flex-col ml-[-10px] ease-in-out duration-500 z-100">
                <ul className="list-none mt-7">
                  <li className="mb-4 text-18 font-500">
                    <Link href="/">
                      <p className="text-[#0e2431] font-500 text-20 p-1 decoration-none hover:font-bold">Home</p>
                    </Link>
                  </li>
                  <li className="mb-4 text-18 font-500">
                    <Link href="/courseCategory">
                      <p className="text-[#0e2431] font-500 text-20 p-1 decoration-none hover:font-bold">Courses</p>
                    </Link>
                  </li>
                  <li className="mb-4 text-18 font-500">
                    <Link href="/about">
                      <p className="text-[#0e2431] font-500 text-20 p-1 decoration-none hover:font-bold">About</p>
                    </Link>
                  </li>
                  <li className="mb-4 text-18 font-500">
                    <Link href="/testimonial-public">
                      <p className="text-[#0e2431] font-500 text-20 p-1 decoration-none hover:font-bold">Testimonials</p>
                    </Link>
                  </li>
                  <li className="mb-4 text-18 font-500">
                    <Link href="/contact">
                      <p className="text-[#0e2431] font-500 text-20 p-1 decoration-none">Contact</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
