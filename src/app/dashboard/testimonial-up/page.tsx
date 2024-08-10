"use client";
import { useState } from "react";
import React from "react";
import { Header, DashboardComp, TesimonialUserPhase } from "@/component";
import TopImg from "@/asset/cmc_dashboard_testimonial_top_quote.png";
import BottomImg from "@/asset/cmc_dashboard_testimonial_bottom_quote.png";
import Image from "next/image";
// import ReactStars from "react-rating-stars-component";
import Star from "@/asset/cmc_dashboard_testimonial_blkur_star.png";
import FillStar from "@/asset/cmc_dashboard_testimonial_color_star.png";
import BottomImage from "@/asset/cmc_dashboard_testimonial_image.png";

const Page = () => {
 

  return (
    <div>
      <Header UserType="user" ActiveLink={"0"} Color="" />
      <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh]">
        <div className="w-full 2xl:w-[87%] flex md:gap-[30px] relative">
          <div className="sticky top-[110px] z-10">
            {/* <DashboardComp DashCount={7} /> */}
            <Image
              src={BottomImage}
              alt=""
              className="max-w-[269px] min-w-[269px] max-h-[269px] absolute bottom-[10px] right-[-320px] hidden min-[1356px]:block"
            />
          </div>

          <div className="overflow-y-scroll w-full h-[88vh] scroll-side">
            <div className="flex flex-col items-center justify-center bg-transparent lg:gap-[60px] lg:p-[20px]">
              <p className="text-[24px] font-[500] text-[#672013] mt-[20px]">
                Your Opinion about us
              </p>
              <div className="flex flex-col items-center justify-center gap-[20px] w-[90%] md:w-[100%]">
                <div className=" flex flex-col items-center justify-center lg:min-w-[623px] max-w-[623px] min-w-[380px] w-[90%] min-h-[276px] border-2 border-dashed border-[#672013] relative">
                  <textarea
                    placeholder="Briefly explain what you experienced ..."
                    className="lg:min-w-[538px] max-w-[538px] w-[90%] min-w-[350px] bg-[#F5F5F5] outline-none border-none h-[211px] p-[20px] rounded-[25px] text-[18px] font-[600] leading-[25px]"
                  />
                  <Image
                    src={TopImg}
                    alt="Top quote decoration"
                    className="min-w-[100px] max-w-[100px] absolute top-[-58px] left-[-60px]"
                  />
                  <Image
                    src={BottomImg}
                    alt="Bottom quote decoration"
                    className="min-w-[100px] max-w-[100px] absolute bottom-[-44px] right-[-58px]"
                  />
                </div>
                <div className="">
                  {/* <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    emptyIcon={
                      <Image
                        src={Star}
                        alt=""
                        className="max-w-[35px] m-[5px]"
                      />
                    }
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    filledIcon={
                      <Image
                        src={FillStar}
                        alt=""
                        className="max-w-[35px] m-[5px]"
                      />
                    }
                    activeColor="#ffd700"
                  /> */}
                </div>
                <button className="w-[173px] h-[45px] flex items-center justify-center text-[#ffffff] text-[20px] font-[700] bg-[#F9AB70] rounded-[10px]">
                  Submit
                </button>
                <div className="">
                  <TesimonialUserPhase />
                  <TesimonialUserPhase />
                  <TesimonialUserPhase />
                  <TesimonialUserPhase />
                  <TesimonialUserPhase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
