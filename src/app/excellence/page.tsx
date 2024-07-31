"use client";
import React from "react";
import { Header, CourseCategory, Footer } from "@/component";
import Image from "next/image";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import Img_1 from "@/asset/cmc_excellence_1_img.png";
import Img_2 from "@/asset/cmc_excellence_2_img.png";
import Img_3 from "@/asset/cmc_excellence_3_img.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <Header Color={"#7E7E7E"} ActiveLink={"0"} />
        <div className="min-h-[169px] bg-[#F9AB70] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
          <div className=" min-w-[80%]"></div>
        </div>
        <div className="flex items-center justify-center min-w-[100%] border-b-2 border-[#d8c7bb] pl-[10px] md:pl-[0px]">
          <div className=" my-[5px] md:my-[10px] flex flex-wrap gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="excellence">
              <p className="md:text-[22px] font-[600] text-[#672013]">
                Excellence
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-[100%] gap-[40px] lg:gap-[60px] my-[50px]">
          <div className="w-[90%] 2xl:max-w-[70%] md:items-start lg:items-center md:w-[98%]  flex flex-col md:flex-row justify-between items-center gap-[40px] 2xl:gap-[30px]">
            <div className="w-[349px] min-w-[349px] h-[415px] bg-[#fde9da] rounded-[20px] flex flex-col items-center justify-between">
              <div className="w-[100%] h-[55%] flex items-center justify-center ">
                <Image src={Img_1} alt=" " />
              </div>
              <div className=" w-[100%] h-[2px]  shadow-exel  "></div>
              <div className="w-[100%] h-[45%] flex items-center justify-center ">
                <p className="text-[40px] font-[700] text-[#FF6E00] max-w-[239px] leading-[51px] text-center">
                  Training Academy
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-[36px] font-[700] text-[#672013] max-w-[760px] mb-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-[24px] font-[400] text-[#7E7E7E] max-w-[900px] text-justify">
                Our goal is to offer timely, high-quality training services to
                those working in the maritime industry. We strictly enforce the
                globally recognized training standards for seafarers. Our goal
                is to attain total student satisfaction by implementing safe,
                ethical, and effective procedures across the time for training.
                The institute has so far trained thousands of students to become
                professional seafarers in various disciplines. CMC Maritime
                Academy Chennai is known to offer quality training and serving
                the maritime industry for about 12 years.
              </p>
            </div>
          </div>
          <div className="w-[90%] 2xl:max-w-[70%] md:items-start lg:items-center md:w-[98%]  flex flex-col-reverse md:flex-row justify-between items-center gap-[40px] 2xl:gap-[30px]">
            <div className="">
              <p className="text-[36px] font-[700] text-[#672013] max-w-[760px] mb-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-[24px] font-[400] text-[#7E7E7E] max-w-[900px] text-justify">
                Courses are managed and run by established professionals within
                the marine industry, and we are constantly pushing back the
                boundaries of knowledge.  Due to our rigorous academic
                standards, our qualifications are highly respected
                internationally.
              </p>
            </div>
            <div className="w-[349px] min-w-[349px] h-[415px] bg-[#fde9da] rounded-[20px] flex flex-col items-center justify-between">
              <div className="w-[100%] h-[55%] flex items-center justify-center ">
                <Image src={Img_2} alt=" " />
              </div>
              <div className=" w-[100%] h-[2px]  shadow-exel  "></div>
              <div className="w-[100%] h-[45%] flex items-center justify-center ">
                <p className="text-[40px] font-[700] text-[#FF6E00] max-w-[239px] leading-[51px] text-center">
                  Marine Courses
                </p>
              </div>
            </div>
          </div>
          <div className="w-[90%] 2xl:max-w-[70%] md:items-start lg:items-center md:w-[98%]  flex flex-col md:flex-row justify-between items-center gap-[40px] 2xl:gap-[30px]">
            <div className="w-[349px] min-w-[349px] h-[415px] bg-[#fde9da] rounded-[20px] flex flex-col items-center justify-between">
              <div className="w-[100%] h-[55%] flex items-center justify-center ">
                <Image src={Img_3} alt=" " />
              </div>
              <div className=" w-[100%] h-[2px]  shadow-exel  "></div>
              <div className="w-[100%] h-[45%] flex items-center justify-center ">
                <p className="text-[40px] font-[700] text-[#FF6E00] max-w-[239px] leading-[51px] text-center">
                  Certificate Revalidation
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-[36px] font-[700] text-[#672013] max-w-[760px] mb-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-[24px] font-[400] text-[#7E7E7E] max-w-[900px] text-justify">
                The Certificates of Competency issued are valid for a period of
                five years. Applicants may request revalidation of their
                certificate of completion at any time before the certificate
                expires; the revalidation period is five years from the date of
                the course&#39;s successful completion. CDC issued to a seaman
                shall be valid for a period of ten years and may be renewed on
                expiry or within 6 months prior to the date of expiry, on a
                request from the holder. Courses for Revalidation of the CDC and
                COC is offered by CMC Maritime Academy Chennai.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
