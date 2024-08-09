import React from "react";
import Image from "next/image";
import Link from "next/link";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import { Header, Footer, CourseCard } from "@/component";
const page = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col ]">
        <Header Color={"#7E7E7E"} />
        <div className="min-h-[169px] bg-[#fbcba6] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
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
          <div className=" my-[5px] md:my-[10px] flex flex-wrap md:gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="courseCategory">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">
                Courses
              </p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="">
              <p className="md:text-[22px] font-[600] text-[#672013]">
                Course Title
              </p>
            </Link>
          </div>
        </div>
        <p className="text-[36px] font-[700] text-[#F9AB70] my-[10px]">
          Course Title
        </p>
        <div className="flex flex-wrap justify-center max-w-[100%] gap-[40px] xl:max-w-[80%] my-[50px]">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <Footer />
      </div>
      ;
    </>
  );
};
export default page;
