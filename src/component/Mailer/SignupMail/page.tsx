import React from "react";
import Image from "next/image";
import BannerSignup from "@/asset/cmc_mailer_signup_banner_img.png";
import SignupLogo from "@/asset/cmc_mailer_signup_logo.png";
import Img_1 from "@/asset/cmc_excellence_1_img.png";
import Img_2 from "@/asset/cmc_excellence_2_img.png";
import Img_3 from "@/asset/cmc_excellence_3_img.png";
import RightArrow from "@/asset/cmc_mailer_signup_right_arrow.png";
import BulletIcon from "@/asset/cmc_mailer_signup_bullet.png";
import mailIcon from "@/asset/cmc_footer_gmail_icon.png";
import instaIcon from "@/asset/cmc_footer_insta_icon.png";
import fbIcon from "@/asset/cmc_footer_facebook_icon.png";
import linkedInIcon from "@/asset/cmc_footer_linkedin_icon.png";
import telephoneIcon from "@/asset/cmc_footer_telephone_icon.png";
import mobileIcon from "@/asset/cmc_footer_mobile_icon.png";
const page: React.FC = () => {
  return (
    <>
      <div className="signup-mailer w-[100%] min-h-[500px]">
        <div className=" flex gap-[20px] items-end p-[30px] sm:p-[40px]">
          <Image src={SignupLogo} alt="" />
          <p className="text-[20px] font-[800] text-[#FD6D00] text-center max-w-[279px]">
            CMC Maritime Academy Chennai
          </p>
        </div>
        <div className="flex sm:pl-[80px] pl-[50px] mt-[20px]">
          <p className="max-w-[161px] text-[20px] font-[600]">
            Welcome to our marine community! Dive in and explore with us.
          </p>
        </div>
      </div>
      <div className="second-sign flex flex-col items-center gap-[15px] justify-center relative py-[20px]">
        <p className="text-[24px] font-[800] leading-[29px] text-[#FD6D00] max-w-[316px] text-center absolute top-[-60px]">
          <span className="text-[#672013]"> WELCOME ONBOARD </span>STEVE ROGER!
        </p>
        <p className="text-[24px] font-[800] leading-[29px] text-[#FD6D00] max-w-[316px] text-center">
          <span className="text-[#672013]"> INDos No -</span> 22FD2341
        </p>
        <p className="text-[20px] font-[800]">Our Excellence</p>
        <div className="flex items-center justify-between w-[80%] gap-[30px]">
          <div className="  flex flex-col items-center gap-[10px]">
            <Image src={Img_1} alt="" className="max-w-[50px] min-w-[50px] " />
            <p className="text-[18px] font-[400] max-w-[77px] text-center text-[#672013]">
              Teaching Academy
            </p>
          </div>
          <div className="  flex flex-col items-center gap-[10px]">
            <Image src={Img_2} alt="" className="max-w-[50px] min-w-[50px] " />
            <p className="text-[18px] font-[400] max-w-[77px] text-center text-[#672013]">
              Marine Courses
            </p>
          </div>
          <div className="  flex flex-col items-center gap-[10px]">
            <Image src={Img_3} alt="" className="max-w-[50px] min-w-[50px] " />
            <p className="text-[18px] font-[400] max-w-[77px] text-center text-[#672013]">
              License Renewal
            </p>
          </div>
        </div>
        <p className="text-[20px] font-[800]">Courses We Offer</p>
        <div className="flex flex-col gap-[10px] p-[5px] ">
          <div className="flex items-center gap-[10px] w-[]">
            <Image src={BulletIcon} alt="" />
            <p className="text-[14px] font-[500] text-[#672013] max-w-[322px]">
              Personal Safety And Social Responsibilities (PSSR)
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image src={BulletIcon} alt="" />
            <p className="text-[14px] font-[500] text-[#672013] max-w-[322px]">
              Basic Safety Training (BST)
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image src={BulletIcon} alt="" />
            <p className="text-[14px] font-[500] text-[#672013] max-w-[322px]">
              refresher training in PST (Part - B) - RPST (Practical)
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image src={BulletIcon} alt="" />
            <p className="text-[14px] font-[500] text-[#672013] max-w-[322px]">
              High Voltage Safety & Switch Gear Course - Management Level (HV -
              M)
            </p>
          </div>
          <div className="flex justify-end  w-[100%]">
            <div className="float-right flex gap-[10px] items-center ">
              <p className="text-[15px] font-[500] text-[#FD6D00]">
                Visit Website
              </p>
              <Image src={RightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="third-sign py-[20px] flex flex-col items-center gap-[20px]">
        <div className=" flex gap-[20px] items-center justify-center">
          <Image src={mailIcon} alt="" />
          <p className="text-[16px] font-[500]  ">admission@cmcacademy.ac.in</p>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[10px] items-center">
            <Image src={telephoneIcon} alt="" />
            <div className=" ">
              <p className="text-[16px] font-[400] text-[#000] ">
                044-4269-1188
              </p>
              <p className="text-[16px] font-[400] text-[#000] ">
                044-4265-1199
              </p>
            </div>
          </div>
          <div className="min-w-[2px] min-h-[74px] bg-[#672013]"></div>
          <div className="flex gap-[10px] items-center">
            <Image src={mobileIcon} alt="" />
            <div className="flex flex-col items-start">
              <p className="text-[16px] font-[400] text-[#000] ">
                +91 9445 031 188
              </p>
              <p className="text-[16px] font-[400] text-[#000] ">
                +91 7305 150 111
              </p>
              <p className="text-[16px] font-[400] text-[#000] ">
                +91 9843 655 985
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between  gap-[40px] ">
          <Image src={instaIcon} alt="" />
          <Image src={fbIcon} alt="" />
          <Image src={linkedInIcon} alt="" />
        </div>
        <div className=" flex justify-between items-center w-[95%] gap-[10px] text-[#672013]  ">
          <p className="text-[13px] font-[400] ">
            Copyright © 2024 CMC All Rights Reserved
          </p>
          <p className="text-[14px] font-[500] text-[#672013] ">
            Powered By Webilesk
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
