import React from "react";
import CourseBookIcon from "@/asset/cmc_home_sixth_course_icon.png";
import Image from "next/image";
import "./style.css";
const coursecard = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] relative max-h-[534px] min-h-[534px] min-w-[376px] max-w-[376px] md:m-[20px] basis-1/3 flex flex-col items-center justify-start rounded-[25px] gap-[20px] p-[15px]">
        <div className="image max-w-[336px] max-h-[160px] min-w-[336px] min-h-[160px] bg-[#D9D9D9] rounded-[10px]"></div>
        <div className="flex items-center justify-end min-w-[90%] ">
          <div className="w-[200px] h-[26px] bg-[#CFF4D9] flex items-center justify-center rounded-[6px] ">
            <p className="text-[12px] font-[500] ">ADVANCE MODULAR COURSE</p>
          </div>
        </div>
        <p className="max-w-[323px] text-[18px] font-[500] leading-[22px] course-name text-[#672013]">
          Refresher & Updating Training Course For All Engineer Officers
          (Holding STCW 2010 COC) (REO) Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus neque quisquam quibusdam officiis
          accusantium ipsum nam voluptatem deserunt asperiores minima fuga,
          laboriosam deleniti veritatis. Provident magni animi voluptate velit
          ad?
        </p>
        <div className="flex items-center justify-start min-w-[90%]">
          <p className="text-[28px] font-[400] text-[#672013]">$ 12,5000</p>
        </div>
        <div className="flex items-center justify-between gap-[10px]">
          <button className="w-[264px] h-[56px] bg-[#F9AB70] text-[#ffffff] text-[16px] font-[500] flex items-center justify-center rounded-[50px]">
            View Course
          </button>
          <Image src={CourseBookIcon} height={56} width={56} alt="" />
        </div>
        <p className="text-[18px] font-[400] text-[#F9AB70] absolute bottom-[20px] right-[35px]">
          Next batch starts on
          <span className="text-[#672013] font-[500] ml-[4px]">
            July 20, 2024
          </span>
        </p>
      </div>
    </div>
  );
};

export default coursecard;
