"use client";
import React from "react";
import Image from "next/image";
import Trash from "@/asset/cmc_dashboard_delete_upload_icon.png";
import star from "@/asset/cmc_testimonial_review_star.png";

const page = () => {
  const executeOnClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="flex flex-col gap-[10px] p-[20px] justify-between lg:min-w-[397px] w-[90%] max-w-[397px]  min-w-[360px] min-h-[120px] shadow-box rounded-[8px] border border-[##D9D9D9] my-[20px]">
        <div className="flex justify-between items-start gap-[20px]">
         
      
          <Image src={Trash} alt="" className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px]">
            <p className="text-[15px] font-[400] text-[#672013]">23/07/2024</p>
            <p className="text-[15px] font-[400] text-[#672013]">11:58</p>
          </div>
          <div className="flex gap-[2px]">
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
