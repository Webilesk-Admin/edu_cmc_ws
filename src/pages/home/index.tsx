"use client";
import Image from "next/image";
import bookButton from "@/asset/cmc_home_course_icon.png";
import searchButton from "@/asset/home_banner_coursesearch_icon.png";
import secondLogo from "@/asset/cmc_home_second_logo.png";
import { Header } from "@/component/index";
import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="home-parent w-full flex flex-col items-center justify-center ">
      <Header />
      <div className="hero-banner flex flex-col items-center justify-center w-full gap-[30px]">
        <h2 className="max-w-[544px] text-[#FFFFFF] text-[48px] font-[700] text-center">
          CMC Maritime Academy Chennai
        </h2>
        <div className="min-w-[208px] max-w-[208px] h-[39px] flex rounded-[8px] items-center justify-center bg-[#F9AB70] gap-[10px]">
          <p className="text-[#ffffff] font-[600]">Book Your Course</p>
          <Image
            src={bookButton}
            width={24}
            height={24}
            alt="Picture of the logo"
          />
        </div>
        <p className="max-w-[857px] text-[#FFFFFF] text-[28px] font-[700] text-center">
          " THE BEST WAY TO PREDICT YOUR FUTURE IS TO CREATE IT JOIN WITH US TO
          CREATE YOUR FUTURE"
        </p>
        <div className="max-w-[529px] w-[100%] h-[59px] relative ">
          <input
            type="text"
            className="w-[100%] h-[100%] rounded-[25px] outline-none px-[20px] lg:pr-[63px] text-[20px] text-[#868686] "
          />
          <div className="bg-[#F9AB70] h-[59px] flex rounded-r-[25px] items-center justify-center absolute right-[0px] top-[0px] w-[59px]">
            <Image src={searchButton} width={32} height={32} alt="logo" />
          </div>
        </div>
      </div>
      <div className="home-second  min-h-[400px] relative min-w-[100%] flex items-start justify-start ">
        <div className=" absolute left-[5%] top-[-70px] z-100 ">
          <div className=" flex items-center justify-between gap-[20px] ">
            <Image src={secondLogo} width={120} height={120} alt="secLogo" />
            <p className="max-w-[374px] text-[36px] font-[700] leading-[42px] text-[#672013]">
              About <span className="text-[#F9AB70]"> CMC Maritime </span>Study!
              Your Future Is Here!
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
