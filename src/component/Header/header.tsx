"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/asset/cmc_header_logo.png";
import cartIcon from "@/asset/cmc_header_cart_icon.png";
import UserProfile from "@/asset/cmc_user_phase_profile.png";
import cartIconBlack from "@/asset/cmc_header_cart_icon_black.png";
import $ from "jquery";
import "./header.css";
import Link from "next/link";
import { number } from "zod";
const header = ({ Color, ActiveLink }) => {
  let [fixed, setFixed] = useState(false);

  $(window).scroll(function () {
    var onHeight = $(window).scrollTop();
    // console.log(onHeight);
    if (onHeight >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });

  let color: string = Color;
  let activeLink: number = ActiveLink;

  // console.log(color, fixed);

  return (
    <>
      <div className="home-contain position-relative  flex items-center justify-center w-[100%] hidden md:block  ">
        <div
          className={`fixed top-[0px] flex items center justify-center w-[100%] xl:w-[90%] border-b-1 border-[#F9AB70] z-[55] min-w-[100%] p-[20px] min-h-[80px]  desk-nav transition-all duration-300 ${
            fixed ? "bg-[#ffffff]" : color == "#fff" ? "" : "bg-[#fff]"
          }`}
        >
          <div className="flex w-[100%] absolute top-[15px] lg:w-[90%] justify-between items-center">
            <Link href="/">
              <Image
                src={logo}
                width={80}
                height={80}
                alt="Picture of the logo mt-[16px]"
              />
            </Link>
            <div
              className={
                fixed
                  ? ` text-[#000] text-[20px] font-[600] flex gap-[25px] lg:gap-[40px]`
                  : `text-[${color}] text-[20px] font-[600] flex gap-[25px] lg:gap-[40px]`
              }
            >
              <Link href="/">
                <p
                  className={`cursor-pointer ${
                    activeLink == 1 ? "text-[#F9AB70]" : ""
                  }`}
                >
                  Home
                </p>
              </Link>
              <Link href="/courseCategory">
                <p
                  className={`cursor-pointer ${
                    activeLink == 2 ? "text-[#F9AB70]" : ""
                  }`}
                >
                  Courses
                </p>
              </Link>
              <Link href="/about">
                <p
                  className={`cursor-pointer ${
                    activeLink == 3 ? "text-[#F9AB70]" : ""
                  }`}
                >
                  About us
                </p>
              </Link>
              <Link href="/testimonial-public">
                <p
                  className={`cursor-pointer ${
                    activeLink == 4 ? "text-[#F9AB70]" : ""
                  }`}
                >
                  Testimonials
                </p>
              </Link>
              <a
                className={`cursor-pointer ${
                  activeLink == 5 ? "text-[#F9AB70]" : ""
                }`}
              >
                Contact
              </a>
            </div>
            <div className="flex items-center justify-center gap-[20px]">
              {/* <a className="cursor-pointer text-[20px] font-[700] text-[#F9AB70]">
                Ahoy! Steve Roggers
              </a> */}
              <Image
                src={
                  fixed
                    ? cartIconBlack
                    : color == "#fff"
                    ? cartIcon
                    : cartIconBlack
                }
                width={40}
                height={40}
                alt="Picture of the logo"
              />
              {fixed ? (
                <button className="min-w-[92px] max-w-[92px] bg-[#F9AB70] min-h-[32px] max-h-[32px] flex items-center justify-center rounded-[8px] font-[600]  text-[#ffffff]">
                  Log in
                </button>
              ) : (
                <button className="min-w-[92px] max-w-[92px] bg-[#F9AB70] min-h-[32px] max-h-[32px] flex items-center justify-center rounded-[8px] font-[600]  text-[#ffffff]">
                  Log in
                </button>
                // <Image src={UserProfile} alt="" className="mt-[-10px]" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="home-contain position-relative  flex items-center justify-center w-[100%]">
        <nav className="w-[100%]  fixed z-[99] md:hidden bg-[#ffffff]">
          <div className="navbar w-[100%]">
            <div className=" nav w-[100%] flex justify-between items-center min-h-[120px] relative">
              <input
                className="checkbox fixed block h-[32px] w-[32px] top-[20px] right-[20px] z-[5] cursor-pointer opacity-[0]"
                type="checkbox"
                name=""
                id=""
              />
              <div className="hamburger-lines block h-[26px] w-[32px] fixed top-[17px] right-[20px] z-[2] flex justify-between flex-col">
                <span className="line line1 block h-[4px] w-[100%] rounded-[5px] bg-[#0e2431] origin-[0%_0%] ease-in-out duration-300"></span>
                <span className="line line2 block h-[4px] w-[100%] rounded-[5px] bg-[#0e2431] ease-in-out duration-200"></span>
                <span className="line line3 block h-[4px] w-[100%] rounded-[5px] bg-[#0e2431] origin-[0%_100%] ease-in-out duration-300"></span>
              </div>
              <div className="logo min-w-[100%]"></div>
              <div className="menu-items fixed   flex pt-[120px] bg-[#fff] min-h-[110vh] text-center min-w-[80%] pl-[50px] translate-x-[-100%] flex-col ml-[-40px] ease-in-out duration 500s z-[100]">
                <ul className="list-none mt-[30px]">
                  <li className="mb-[18px] text-[18px] font-[500]">
                    <Link href="/">
                      <p className="color-[#0e2431] font-[500] text-[20px] p-[6px] decoration-none hover:font-bold">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li className="mb-[18px] text-[18px] font-[500]">
                    <Link href="/courseCategory">
                      <p className="color-[#0e2431] font-[500] text-[20px] p-[6px] decoration-none hover:font-bold">
                        about
                      </p>
                    </Link>
                  </li>
                  <li className="mb-[18px] text-[18px] font-[500]">
                    <a
                      href="#"
                      className="color-[#0e2431] font-[500] text-[20px] p-[6px] decoration-none hover:font-bold"
                    >
                      blogs
                    </a>
                  </li>
                  <li className="mb-[18px] text-[18px] font-[500]">
                    <a
                      href="#"
                      className="color-[#0e2431] font-[500] text-[20px] p-[6px] decoration-none hover:font-bold"
                    >
                      portfolio
                    </a>
                  </li>
                  <li className="mb-[18px] text-[18px] font-[500]">
                    <a
                      href="#"
                      className="color-[#0e2431] font-[500] text-[20px] p-[6px] decoration-none"
                    >
                      contact
                    </a>
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

export default header;
