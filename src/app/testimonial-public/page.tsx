import React from "react";
import { Header, Footer, TestimonialCard } from "@/component";
import Image from "next/image";
import Link from "next/link";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import TestFirst from "@/asset/cmc_testimonial_first_img.png";
import MobileAbs from "@/asset/cmc_testimonial_second_abs_img.png";

const page = () => {
  return (
    <>
      <div className="flex items-center  flex-col">
        <Header Color={"#7E7E7E"} ActiveLink={"4"} />
        <div className="min-h-[169px] bg-[#F9AB70] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
          <div className=" min-w-[80%]">
            <p className="text-[26px] max-w-[478px] text-[#fff] font-[600]">
              Our wall of love
            </p>
            <p className="text-[18px] max-w-[555px] font-[600] mt-[10px]">
              "Read what our talented community members are saying about CMC
              Maritime academy chennai."
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-[100%] border-b-2 border-[#d8c7bb] pl-[10px] md:pl-[0px]">
          <div className=" my-[5px] md:my-[10px] flex flex-wrap gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="/testimonial-public">
              <p className="md:text-[22px] font-[600] text-[#672013]">
                Testimonial
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[100%] items-center justify-center mb-[20px]">
          <div className="max-w-[98%]  flex flex-col md:flex-row items-center justify-between  md:gap-[40px] xl:max-w-[70%]  ">
            <Image
              src={TestFirst}
              alt=""
              className="max-h-[392px] min-w-[300px] max-w-[530px] w-[90%]"
            />
            <div className="px-[15px]">
              <p className="text-[32px] md:text-[40px] font-[800] text-[#F9AB70]">
                Our Happy Students
              </p>
              <p className="text-[20px] md:text-[24px] font-[600] max-w-[601px] text-[#672013] md:min-w-[400px]">
                At CMC Maritime chennai, we take pride in the success and
                satisfaction of our students. Here’s what they have to say about
                their experiences with our marine service. Student testimonials
                and reviews are essential to us. See what our students have to
                say about marine services .
              </p>
            </div>
          </div>
          <div className="min-w-[100%] relative min-h-[400px]  flex items-start justify-center ">
            <div className="max-w-[98%] xl:max-w-[70%] flex flex-col items-center justify-center ">
              <Image
                src={MobileAbs}
                alt=""
                className="absolute right-[0px] top-[0px] max-h-[302px] max-w-[302px] xl:right-[100px] hidden xl:block z-[-10]"
              />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
          <button className="w-[146px] font-[600] text-[#fff] h-[45px] flex items-center justify-center bg-[#f9ab70] rounded-[8px]">
            View More
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
