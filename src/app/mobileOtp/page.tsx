"use client";
import React from "react";
import { useState } from "react";
import { Header } from "@/component";
import Link from "next/link";
import Image from "next/image";
import { InputOTP } from "antd-input-otp";
import { Modal } from "antd";
import ModalCloseIcon from "@/asset/cmc_course_item_modal_close.png";
import OptMismatch from "@/asset/cmc_Otp_mismatch_icon.png";
import NotFoundIcon from "@/asset/cmc_not_found_page_icon.png";
import MobileUnverified from "@/asset/cmc_mobile_icon_unverified.png";
import MailUnverified from "@/asset/cmc_mail_icon_unverified.png";
import UserUnverified from "@/asset/cmc_user_icon_unverified.png";
import "./style.css";

const Page = () => {
  const [value, setValue] = useState<string[]>([]);
  const [modal2Open, setModal2Open] = useState<boolean>(false);
  const show = () => {
    setModal2Open(true);
  };

  const handleFinish = () => {
    console.log(value);
  };
  return (
    <>
      <div className="login-form min-h-[100vh] min-w-[100%]">
        <Header Color={"#fff"} ActiveLink="0" UserType={"user"} />
        <div className=" flex items-center justify-center mt-[60px] w-[100%] md:max-w-[90%]  min-h-[100vh] ">
          <div className="  w-[95%] xl:w-[1066px] md:h-[568px] py-[20px] lg:min-h-[568px] flex flex-col items-center justify-center gap-[20px] m-[10px] lg:ml-[80px] glass-morph mt-[50px] md:mt-[0px]">
            <div className="flex flex-col md:flex-row items-center justify-between xl:w-[750px] w-[80%]">
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={MobileUnverified} alt="" />
                <p className="max-w-[92px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Mobile Validation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={MailUnverified} alt="" />
                <p className="max-w-[92px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Email Validation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <Image src={UserUnverified} alt="" />
                <p className="max-w-[102px] text-center text-[20px] font-[600] text-[#ffffff]">
                  Registration Successfull!
                </p>
              </div>
            </div>
            <div className="m-[10px] flex flex-col items-center gap-[15px]">
              <p className="text-[14px] font-[500] text-[#ffffff] mt-[10px]">
                Enter OTP Sent to Your Mobile No
                <span className="font-[600] text-[#F9AB70]"> 7709083141</span>
              </p>
              <p className="text-[16px] font-[700] text-[#ffffff]">Enter OTP</p>
              <InputOTP
                onChange={setValue}
                value={value}
                length={4}
                placeholder="-"
                inputType="numeric"
              />
              <button
                className="w-[74px] h-[32px] rounded-[5px] bg-[#F9AB70] flex items-center justify-center text-[14px] text-[#ffffff] font-[400]"
                onClick={handleFinish}
              >
                Submit
              </button>
              <div>
                <p className="text-[14px] font-[500] text-[#ffffff]">
                  Expires in <span className="text-[#12B28C]">01:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal
          className="max-w-[1127px] flex items-center min-w-[90%]  justify-center xl:min-w-[1127px]"
          centered
          open={modal2Open}
          // onOk={() => setModal2Open(false)}
          // onCancel={() => setModal2Open(false)}
          footer={null}
        >
          <div className=" flex gap-[20px] items-center">
            <Image src={OptMismatch} alt="" />
            <div className="">
              <p className="max-w-[880px] text-center text-[25px] lg:text-[36px] font-[500] text-[#D32828]">
                OTP Mismatch
              </p>
              <p className="max-w-[880px] text-center text-[25px] lg:text-[36px] font-[500] text-[#D32828]">
                Please Try Again
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-[10px]">
            <div className="flex gap-[10px] border-b-2  border-[#000]">
              <Image src={NotFoundIcon} alt="" />
              <Link href={"/mobileOtp"}>
                <p className="text-[24px] font-[500] text-[#F9AB70]">Back</p>
              </Link>
            </div>
          </div>
          <Image
            src={ModalCloseIcon}
            alt=""
            className="absolute right-[10px] top-[10px] max-w-[32px]  lg:max-w-[52px] lg:max-h-[52px] cursor-pointer"
            onClick={() => setModal2Open(false)}
          />
        </Modal>
      </div>
    </>
  );
};

export default Page;
