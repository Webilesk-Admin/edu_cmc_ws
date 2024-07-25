import React from "react";
import { Header, Footer } from "@/component";
import Image from "next/image";
import Link from "next/link";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import AboutFirst from "@/asset/cmc_about_first_img.png";
import AboutSecond from "@/asset/cmc_about_second_img.png";
import AboutThird from "@/asset/cmc_about_third_img.png";
import AboutFourth from "@/asset/cmc_about_fourth_img.png";
import BulletIcon from "@/asset/cmc_about_icon_bullet.png";
const page = () => {
  return (
    <>
      <div className="flex items-center  flex-col">
        <Header Color={"#7E7E7E"} ActiveLink={"3"} />
        <div className="min-h-[169px] bg-[#F9AB70] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
          <div className=" min-w-[80%]">
            <p className="text-[26px] max-w-[478px] text-[#fff] font-[600]">
              Mission and Impact of CMC Maritime
            </p>
            <p className="text-[18px] max-w-[438px] font-[600] mt-[10px]">
              "Exploring the Depths: Unveiling the Mission and Impact of CMC
              Maritime"
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-[100%] border-b-2 border-[#d8c7bb] pl-[10px] md:pl-[0px]">
          <div className=" my-[5px] md:my-[10px] flex flex-wrap gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="/about">
              <p className="md:text-[22px] font-[600] text-[#672013]">About</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] gap-[50px] py-[30px] text-justify md:py-[50px]">
          <div className=" w-[90%] md:min-w-[90%] flex justify-center flex-col md:flex-row xl:min-w-[95%] items-center gap-[20px]">
            <Image
              src={AboutFirst}
              height={250}
              width={250}
              alt=""
              className="max-w-[250px] max-h-[250px]"
            />
            <div className="">
              <p className="text-[40px] text-[#F9AB70] font-[800]">About</p>
              <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[942px] xl:min-w-[942px]">
                CMC Maritime Academy is situated in the Heart of the City,
                Vepery, Chennai. Established in 2012 and approved by Directorate
                General of Shipping, Govt. of India, we offer the best post-sea
                courses for seafarers keeping pace with the rapid evolution of
                shipping industry, technological advances to produce seaman with
                specialized and upgraded skills.CMC Maritime Academy is one of
                the most eminent Maritime Training Academy since the last 12
                years and it is renowned for the standards of its students and
                facilities.
              </p>
            </div>
          </div>
          <div className=" w-[90%] md:min-w-[90%] flex justify-center flex-col-reverse md:flex-row xl:min-w-[95%] items-center gap-[20px]">
            <div className="space-y-[20px]">
              <p className="text-[40px] text-[#F9AB70] font-[800]">Objective</p>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  Our objective is to impart our student's community with
                  knowledge skills along with marine culture by way of
                  Professionalism,Communication skills
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  To impart quality training to sailing seafarers and those
                  aspiring for a career at sea in line with the Directorate
                  General Of Shipping, Govt. of India guidelines and meeting
                  STCW ’95 requirements.
                </p>
              </div>
            </div>
            <Image
              src={AboutSecond}
              height={250}
              width={250}
              alt=""
              className="max-w-[250px] max-h-[250px]"
            />
          </div>
          <div className=" w-[90%] md:min-w-[90%] flex justify-center flex-col md:flex-row xl:min-w-[95%] items-center gap-[20px]">
            <Image
              src={AboutThird}
              height={250}
              width={250}
              alt=""
              className="min-w-[280px] min-h-[280px] max-h-[280px] max-w-[280px]"
            />
            <div className="space-y-[20px]">
              <p className="text-[40px] text-[#F9AB70] font-[800]">Mission</p>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  To provide goal-oriented, quality-based and value-added
                  education through state-of-the-art technology at par with
                  International Standards.
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  To prepare the students with high professional skills and
                  ethical values.
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  To impart knowledge through best practices.
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  To undertake continuous assessment and remedial measures
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[90%] md:min-w-[90%] flex justify-center flex-col-reverse md:flex-row xl:min-w-[95%] items-center gap-[20px]">
            <div className="space-y-[20px]">
              <p className="text-[40px] text-[#F9AB70] font-[800]">Vision</p>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  We ensure a pleasant and happy family environment in our
                  college campus with our professional with harmonious approach
                  in solving complaints/ grievances.
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  Forge partnerships with government agencies, NGOs, industry
                  leaders, and local communities to leverage collective
                  expertise and resources for greater impact.
                </p>
              </div>
              <div className=" flex gap-[10px] items-start">
                <Image src={BulletIcon} alt="" className="mt-[10px]" />
                <p className="text-[20px] text-[#672013] font-[600] leading-[31px] max-w-[887px] xl:min-w-[887px] xl:max-w-[887px]">
                  We aim for 100% successful trainees in all qualifying
                  examinations.
                </p>
              </div>
            </div>
            <Image
              src={AboutFourth}
              height={250}
              width={250}
              alt=""
              className="min-w-[280px] min-h-[280px] max-h-[280px] max-w-[280px]"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
