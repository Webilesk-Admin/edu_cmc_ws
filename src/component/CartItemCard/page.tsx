import React from "react";
import Image from "next/image";
import DeleteIcon from "../../asset/cmc_dashboard_cart_remove_icon.png";
import CourseImage from "../../asset/cmc_dashboard_cart_course_image.png";
const page = () => {
  return (
    <>
      <div className="max-w-[639px]  w-[98%] md:w-[90%] h-[100%] lg:h-[278px]  lg:max-w-[639px] border-dashed flex flex-col my-[10px] items-center justify-start gap-[10px] border-2 border-[#D9D9D9B8] p-[10px]  rounded-[12px]">
        <div className="flex gap-[3px] items-center w-[100%] justify-end">
          <div className="flex gap-[3px] cursor-pointer items-center">
            <Image src={DeleteIcon} alt="" />
            <p className="text-[13px] font-[400] text-[#FF2700ED]">
              Remove Course
            </p>
          </div>
        </div>
        <div className="w-[95%] flex flex-col items-center min-[940px]:flex-row gap-[15px] cart-card">
          <Image
            src={CourseImage}
            alt=""
            width={153}
            height={153}
            className="max-w-[153px] min-w-[153px] min-h-[153px] max-h-[153px]"
          />
          <div className="flex flex-col gap-[8px]">
            <p className="text-[18px] font-[400] text-[#F9AB70] max-w-[365px] leading-[26px]">
              PROFICIENCY IN SURVIVAL CRAFT & RESCUE BOATS OTHER THAN FAST
              RESCUE BOATS (PSCRB)
            </p>
            <div className="flex mt-[5px] ">
              <p className="text-[20px] font-[500] text-[#F9AB70] w-[130px]">
                Batch No
              </p>
              <span className="text-[20px] font-[500] text-[#672013] ">
                - 19854
              </span>
            </div>
            <div className="flex ">
              <p className="text-[20px] font-[500] text-[#F9AB70] w-[130px]">
                Batch Date
              </p>
              <span className="text-[20px] font-[500] text-[#672013] ">
                - 24/04/2024
              </span>
            </div>
            <div className="flex ">
              <p className="text-[20px] font-[500] text-[#F9AB70] w-[130px]">
                Course Fees
              </p>
              <span className="text-[20px] font-[500] text-[#672013]">
                - ₹ 7500/-{" "}
                <span className="text-[20px] font-[400] ml-[10px] text-[#7E7E7E] line-through">
                  ₹ 7500/
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
