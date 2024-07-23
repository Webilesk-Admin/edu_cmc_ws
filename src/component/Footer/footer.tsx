import React from "react";
import Image from "next/image";
import footerLogo from "@/asset/cmc_footer_cmc_logo.png";
import mailIcon from "@/asset/cmc_footer_gmail_icon.png";
import instaIcon from "@/asset/cmc_footer_insta_icon.png";
import fbIcon from "@/asset/cmc_footer_facebook_icon.png";
import linkedInIcon from "@/asset/cmc_footer_linkedin_icon.png";
import telephoneIcon from "@/asset/cmc_footer_telephone_icon.png";
import mobileIcon from "@/asset/cmc_footer_mobile_icon.png";
import FooterStruct from "@/asset/cmc_footer_abs_struct.png";
import "./style.css";
const footer = () => {
  return (
    <div className=" w-[100%] relative">
      <div className="footer-contain min-h-[561px]  w-[100%] mt-[30px] flex e items-center justify-center md:py-[0px] py-[30px]">
        <div className="flex md:items-end justify-between xl:w-[80%] md:w-[90%]  w-[100%] flex-col-reverse items-center md:flex-row ">
          <div className="flex justify-between md:min-w-[50%] md:max-w-[50%] w-[80%] mt-[40px] flex-col md:flex-row mb-[70px] static md:absolute bottom-[30px]">
            <div className=" text-center mb-[10px]">
              <p className="text-[20px] font-[500] text-[#ffffff] md:mb-[40px] ">
                Useful links
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">Home</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">About Us</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">Courses</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Contact Us
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Student Login
              </p>
            </div>
            <div className=" text-center mb-[10px] mb-[20px]">
              <p className="text-[20px] font-[500] text-[#ffffff] md:mb-[40px]">
                Courses
              </p>

              <p className="text-[16px] font-[400] text-[#ffffff]">
                Compotency Course
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Basic Modular Course
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Advance Modular Course
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Simulator Course
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Refresher Course
              </p>
            </div>
            <div className=" text-center mb-[10px]">
              <p className="text-[20px] font-[500] text-[#ffffff] md:mb-[40px]">
                Address
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">Home</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">About Us</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">Courses</p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Contact Us
              </p>
              <p className="text-[16px] font-[400] text-[#ffffff]">
                Student Login
              </p>
            </div>
          </div>
          <div className="max-w-[90%] min-w-[360px] md:max-w-[380px] gap-[20px] flex items-center md:items-center static justify-center flex-col text-center md:absolute top-[30px] right-[10px] xl:right-[100px] ">
            <Image src={footerLogo} alt="" />
            <p className="text-[24px] font-[600] text-[#ffffff]">
              CMC Maritime Academy
            </p>
            <p className="text-[16px] font-[300] text-[#ffffff] leading-[21px] max-w-[360px]">
              CMC is a well established, DG approved marine educational and
              training institute.Training is imparted by qualified and
              experienced faculty members using latest aids for practical
              demonstration.
            </p>
            <div className=" flex gap-[20px] items-center justify-center">
              <Image src={mailIcon} alt="" />
              <p className="text-[16px] font-[300] text-[#ffffff] ">
                admission@cmcacademy.ac.in
              </p>
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
            <div className=" flex md:justify-between justify-center gap-[20px] w-[90%] md:w-[65%]">
              <Image src={instaIcon} alt="" />
              <Image src={fbIcon} alt="" />
              <Image src={linkedInIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col md:flex-row justify-center items-center gap-[10px] md:justify-between bottom-[15px] md:w-[80%] sm:w-[100%]  xl:w-[80%]">
          <p className="text-[16px] font-[400] text-[#ffffff] ">
            Copyright © 2024 CMC All Rights Reserved
          </p>
          <p className="text-[18px] font-[400] text-[#ffffff] ">
            Powered By Webilesk
          </p>
        </div>
        <div className="absolute top-[0px] left-[0px] min-w-[100%] hidden md:block ">
          <Image
            src={FooterStruct}
            alt="secLogo"
            className="w-[70%] max-h-[116px] min-h-[116px] xl:w-[78%]"
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
