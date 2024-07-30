"use client";
import React from "react";
import { Header } from "@/component";
import Profile from "@/asset/cmc_dashboard_profile_img.png";
import EditIcon from "@/asset/cmc_dashboard_profile_edit_icon.png";
import ProfileIcon from "@/asset/cmc_dashboard_user_icon.png";
import CartIcon from "@/asset/cmc_dashboard_cart_icon.png";
import MyCourseIcon from "@/asset/cmc_dashboard_my_course_icon.png";
import PaymentIcon from "@/asset/cmc_dashboard_payment_icon.png";
import MyDocsIcon from "@/asset/cmc_dashboard_my_docs_icon.png";
import CourseCerIcon from "@/asset/cmc_dashboard_course_cerf_icon.png";
import TestimonialIcon from "@/asset/cmc_dashboard_testimonial_icon.png";
import LogoutIcon from "@/asset/cmc_dashboard_logout_icon.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = ({ DashCount }) => {
  let dashCount: number = DashCount;
  let path = useRouter();

  return (
    <>
      <div className="hidden md:block">
        <div className="min-w-[337px] max-w-[337px] rounded-r-[30px] bg-[#F9AB70] min-h-[88vh]  flex flex-col items-center gap-[20px] pt-[20px] justify-start">
          <p className="text-[#672013] text-[20px] font-[700] ">
            Welcome{" "}
            <span className="text-[20px] font-[700] ">STEVE ROGERS!</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <Image src={Profile} alt="" />
            <div className="flex gap-[10px] items-center">
              <Image src={EditIcon} alt="" />
              <p className="text-[16px] font-[500] text-[#ffffff]">
                Change Photo
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-[0px] justify-center items-end w-[100%] ">
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 1 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
              onClick={() => path.push("/dashboard/profile")}
            >
              <Image src={ProfileIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">Profile</p>
            </div>

            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 2 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
              onClick={() => path.push("/dashboard/cart")}
            >
              <Image src={CartIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">Cart</p>
            </div>
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 3 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
              onClick={() => path.push("/dashboard/mycourse")}
            >
              <Image src={MyCourseIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">
                My Courses
              </p>
            </div>
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 4 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
              onClick={() => path.push("/dashboard/payment")}
            >
              <Image src={PaymentIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">Payments </p>
            </div>
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 5 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
            >
              <Image src={MyDocsIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">
                My Documents
              </p>
            </div>
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
                dashCount == 6 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
            >
              <Image src={CourseCerIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">
                {" "}
                Course Certificate
              </p>
            </div>
            <div
              className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] ${
                dashCount == 7 ? "bg-[#ffffff] rounded-l-[30px] " : ""
              }`}
            >
              <Image src={TestimonialIcon} alt="" />
              <p className="text-[20px] font-[500] text-[#672013]">
                Testimonial
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center gap-[10px] mb-[20px] cursor-pointer">
            <Image src={LogoutIcon} alt="" />
            <p className="text-[20px] font-[500] text-[#FF2700]">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
