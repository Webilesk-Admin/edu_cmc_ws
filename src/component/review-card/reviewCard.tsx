import React from "react";
import "./style.css";
import Image from "next/image";
import Profile from "@/asset/cmc_home_review_icon.png";
import Star from "@/asset/cmc_home_seventh_review_star.png";
const reviewCard = () => {
  return (
    <div>
      <div className="w-[274px] min-h-[207px] border-2 border-[#D9D9D9] rounded-[10px] flex  gap-[10px] flex-col items-center relative">
        <div className="min-h-[102px] min-w-[100%] max-h-[102px] bg-[#F9AB70] flex justify-center items-center rounded-b-[20px]">
          <p className="review-content text-[14px] text-[#672013] leading-[16px] font-[600] max-w-[226px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            eaque quasi! Quas nobis, odio animi a reiciendis suscipit!
            Accusantium, cum earum minima quae ipsam explicabo quibusdam.
            Commodi voluptas eaque officia.
          </p>
        </div>
        <div className=" flex gap-[20px] items-center w-[80%]">
          <Image src={Profile} alt="" width={40} height={40} />
          <div className="m-[0]">
            <p className="text-[#757575] text-[18px]">Reviewer name</p>
            <p className="text-[#757575] text-[16px]">23/04/2024</p>
          </div>
        </div>
        <div className="flex absolute bottom-[10px] right-[30px]">
          <Image src={Star} alt="" width={29} height={29} />
          <Image src={Star} alt="" width={29} height={29} />
          <Image src={Star} alt="" width={29} height={29} />
          <Image src={Star} alt="" width={29} height={29} />
          <Image src={Star} alt="" width={29} height={29} />
        </div>
      </div>
    </div>
  );
};

export default reviewCard;
