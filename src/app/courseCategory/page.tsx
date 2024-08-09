import React from "react";
import { Header, CourseCategory, Footer } from "@/component";
import Image from "next/image";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import Link from "next/link";
import { Breadcrumb } from "antd";
const courseCategory = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <Header Color={"#7E7E7E"} ActiveLink={"2"} />
        <div className="min-h-[169px] bg-[#F9AB70] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
          <div className=" min-w-[80%]">
            <p className="text-[26px] max-w-[478px] font-[600]">
              Courses at CMC Training Academy
            </p>
            <p className="text-[18px] max-w-[478px] font-[600">
              Select one of the categories below to explore our portfolio of
              Maritime Diplomo Certficates and short courses
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-[100%] border-b-2 border-[#d8c7bb] pl-[10px] md:pl-[0px]">
          <div className=" my-[5px] md:my-[10px] flex flex-wrap gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="courseCategory">
              <p className="md:text-[22px] font-[600] text-[#672013]">
                Courses
              </p>
            </Link>
          </div>
        </div>
        <p className="text-[32px] font-[700] text-[#672013] my-[10px]">
          Choose a Category
        </p>
        <div className="flex flex-wrap justify-center w-[100%] gap-[40px] xl:max-w-[70%] my-[50px]">
          <CourseCategory />
          <CourseCategory />
          <CourseCategory />
          <CourseCategory />
          <CourseCategory />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default courseCategory;
