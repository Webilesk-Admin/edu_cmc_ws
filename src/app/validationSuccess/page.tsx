"use client";
import React from "react";
import { useState } from "react";
import { Header } from "@/component";
import Link from "next/link";
import Image from "next/image";

import MobileVerified from "@/asset/cmc_mobile_icon_verified.png";
import MailVerified from "@/asset/cmc_mail_icon_verified.png";
import UserVerified from "@/asset/cmc_user_icon_verified.png";
import validationSuccessIcon from "@/asset/cmc_validation_success_icon.png";

const page = () => {
  return (
    <>
      <div className="login-form h-[100vh] min-w-[100%]">
        <Header Color={"#fff"} UserType={"user"} ActiveLink="0" />
        <div className=" flex items-center justify-center mt-[60px] w-[100%] md:max-w-[90%]  h-[100vh] ">
          <div className="  w-[95%] xl:w-[1066px] md:h-[568px] py-[20px] lg:min-h-[568px] flex flex-col items-center justify-center gap-[20px] m-[10px] lg:ml-[80px] glass-morph mt-[50px] md:mt-[0px]">
            <div className="flex flex-col md:flex-row items-center justify-between xl:w-[750px] w-[80%]">
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={MobileVerified} alt="" />
                <p className="max-w-[92px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Mobile Validation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={MailVerified} alt="" />
                <p className="max-w-[92px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Email Validation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={UserVerified} alt="" />
                <p className="max-w-[102px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Registration Successfull!
                </p>
              </div>
            </div>
            <p className="max-w-[410px] text-[24px] font-[700] text-[#ffffff] text-center mt-[10px]">
              You’ve been Registered succesfully Thank you !!!{" "}
            </p>

            <Image src={validationSuccessIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
