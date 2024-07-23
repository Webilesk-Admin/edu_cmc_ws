import React from "react";
import { Header } from "..";
import Link from "next/link";

const course_category = () => {
  return (
    <>
      <div className=" basis-1/3">
        <Link href="/subCat">
          <div className="flex gap-[20px] items-center m-[10px] cursor-pointer">
            <div className="min-w-[169px] max-w-[169px] min-h-[199px] max-h-[199px] bg-[#D9D9D9] rounded-[15px]"></div>
            <div className=" flex flex-col gap-[10px] md:gap-[15px]">
              <p className="text-[26px] text-[#F9AB70] font-[400] italic">
                COMPETENCY COURSE
              </p>
              <p className="text-[#7E7E7E] text-[16px] font-[500] max-w-[269px] leading-[21px]">
                Ut sed nisl et nisl convallis venenatis non lobortis lacus. Sed
                vel volutpat tellus, eget iaculis ex
              </p>
              <button className="w-[176px] h-[34px] flex items-center justify-center text-[12px] font-[600] bg-[#F9AB70] text-[#fff] rounded-[100px]">
                View Course
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default course_category;
