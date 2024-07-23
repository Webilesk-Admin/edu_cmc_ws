"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import bookButton from "@/asset/cmc_home_course_icon.png";
import thirdStruct from "@/asset/cmc_home_third_struct.png";
import searchButton from "@/asset/home_banner_coursesearch_icon.png";
import absbanner from "@/asset/cmc_home_banner_abs_struct.png";
import secondLogo from "@/asset/cmc_home_second_logo.png";
import rightArrow from "@/asset/cmc_home_secon_right_arrow_icon.png";
import second_right from "@/asset/cmc_home_second_side_img.png";
import thirdCourseOne from "@/asset/cmc_home_third_first_course.png";
import thirdCourseTwo from "@/asset/cmc_home_third_second_course.png";
import thirdCourseThree from "@/asset/cmc_home_third_third_course.png";
import thirdCourseBtn from "@/asset/cmc_home_third_course_btn.png";
import fourthSIdeImg from "@/asset/cmc_home_fourth_side_img.png";
import fourthAnimationImg from "@/asset/cmc_home_fourth_hanker_animation.png";
import fourthIconOne from "@/asset/cmc_home_fourth_user_icon.png";
import fourthIconTwo from "@/asset/cmc_home_fourth_approval_icon.png";
import fourthIconThree from "@/asset/cmc_home_fourth_first_place_icon.png";
import fourthIconFour from "@/asset/cmc_home_fourth_env_icon.png";
import fourthIconFive from "@/asset/cmc_home_fourth_stud_center_icon.png";
import fourthIconSix from "@/asset/cmc_home_fourth_morale_icon.png";
import fourthIconSeven from "@/asset/cmc_home_fourth_globe_icon.png";
import fourthIconEight from "@/asset/cmc_home_fourth_perfomance_icon.png";
import fifthAbsOne from "@/asset/cmc_home_fifth_abs_1_img.png";
import fifthAbsTwo from "@/asset/cmc_home_fifth_abs_2_img.png";
import fifthAbsThree from "@/asset/cmc_home_fifth_abs_3_img.png";
import fifthAbsFour from "@/asset/cmc_home_fifth_abs_4_img.png";
import CourseBookIcon from "@/asset/cmc_home_sixth_course_icon.png";
import identifyLogoDesk from "@/asset/cmc_home_tenth_cmc_identify_desk.png";
import identifyLogoMob from "@/asset/cmc_home_tenth_cmc_identify_mob.png";
import bigBoat from "@/asset/cmc_home_ninth_back_img.png";
import { Header, Footer } from "@/component/index";
import React from "react";
import "./index.css";
import { CourseCard } from "@/component/index";
import { ReviewCard } from "@/component/index";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    let footer = $(".abs_img").height();
    $(".ninth-home").css({
      height: `${footer}`,
    });
  });
  if (typeof window !== "undefined") {
    $(window).on("resize", function () {
      let getHeight = $(".abs_img").height();
      $(".ninth-home").css({
        height: `${getHeight}`,
      });
    });
  }

  return (
    <div className="home-parent w-[100%] flex flex-col items-center justify-center ">
      <Header Color={"#fff"} />
      <div className="hero-banner min-h-[860px]  flex flex-col items-center justify-center min-w-[100%] gap-[30px] relative">
        <h2 className="max-w-[544px] text-[#FFFFFF] text-[48px] font-[700] text-center">
          CMC Maritime Academy Chennai
        </h2>
        <div className="min-w-[208px] max-w-[208px] h-[39px] flex rounded-[8px] items-center justify-center bg-[#F9AB70] gap-[10px]">
          <p className="text-[#ffffff] font-[600] jque">Book Your Course</p>
          <Image
            src={bookButton}
            width={24}
            height={24}
            alt="Picture of the logo"
          />
        </div>
        <p className="max-w-[857px] text-[#FFFFFF] md:text-[28px] text-[20px] font-[700] text-center">
          " THE BEST WAY TO PREDICT YOUR FUTURE IS TO CREATE IT JOIN WITH US TO
          CREATE YOUR FUTURE"
        </p>
        <div className="max-w-[693px] w-[100%] h-[59px] relative ">
          <input
            type="text"
            className="w-[100%] h-[100%] rounded-[25px] outline-none px-[20px] lg:pr-[110px] text-[20px] text-[#868686] "
          />
          <div className="bg-[#F9AB70] h-[59px] flex rounded-r-[25px] items-center justify-center absolute right-[0px] top-[0px] w-[98px]">
            <Image src={searchButton} width={32} height={32} alt="logo" />
          </div>
        </div>
        <div className="absolute bottom-[0px] left-[0px] min-w-[100%] hidden md:block">
          <Image
            src={absbanner}
            alt="secLogo"
            className="w-[70%] max-h-[116px] min-h-[116px]"
          />
        </div>
      </div>
      <div className="home-second  min-h-[400px] relative min-w-[100%] flex items-start p-[10px] md:p-[0px] justify-center ">
        <div className="flex flex-col md:flex-row gap-[30px] justify-between items-center md:items-end p-[20px] min-w-[90%]">
          <div className="  left-[5%] top-[-70px] z-100 ">
            <div className=" flex flex-col md:flex-row items-start  gap-[30px] ">
              <Image src={secondLogo} width={120} height={120} alt="secLogo" />
              <div className="">
                <p className="max-w-[374px] text-[36px] font-[700] leading-[42px] text-[#672013]">
                  About <span className="text-[#F9AB70]"> CMC Maritime </span>
                  Study! Your Future Is Here!
                </p>

                <p className="max-w-[699px] text-[24px] leading-[39px] text-[#7E7E7E] mt-[20px]">
                  CMC Maritime Chennai is one of the most eminent Maritime
                  Training Academy since the last 12 years and it is reowned for
                  the standards of its students and facilities.
                </p>
                <p className="max-w-[699px] text-[24px] leading-[39px] text-[#7E7E7E] mt-[40px]">
                  The Motto of the institution "EMINENCE THROUGH EXCELLENCE" is
                  pre-eminently enshrined to ignite and enlighten the minds of
                  the yougsters through education by dispelling the darkness of
                  ignorance.
                </p>
                <div className=" flex gap-[20px] items-center mt-[20px]">
                  <p className="text-[24px] leading-[39px] text-[#F9AB70] font-[500] ">
                    More about us
                  </p>
                  <Image src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100%] z-[-3] ">
            <Image src={second_right} alt="" />
          </div>
        </div>
      </div>
      <div className="home-third min-h-[860px] min-w-[100%] mt-[20px] flex flex-col items-center justify-center gap-[60px] pb-[40px] relative ">
        <div className="mt-[50px] md:mt-[150px] lg:mt-[0px] w-[269px] h-[57px] flex items-center  rounded-[18px] justify-center bg-[#ffffff] my-[20px] mt-[100px]">
          <p className="  font-[800] text-[#F9AB70] text-[36px]">
            We Excel in{" "}
          </p>
        </div>
        <div className="course-contain  mt-[20px] xl:gap-[30px]  gap-[10px] flex  lg:flex-nowrap justify-center  w-[100%] xl:w-[80%]">
          <div className="max-w-[360px] h-[460px] md:h-[400px] flex  flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={thirdCourseOne}
                alt=""
                className="h-[408px] w-[350px] w-[350px] xl:min-w-[350px]"
              />
              <Image
                src={thirdCourseBtn}
                alt=""
                className="absolute bottom-[30px] right-[20px]"
              />
            </div>
            <p className="text-[28px] font-[700] text-[#ffffff]">
              Training Academy
            </p>
          </div>
          <div className=" w-[370px] h-[460px] md:h-[400px] flex  flex-col items-center justify-center ">
            <div className="relative">
              <Image
                src={thirdCourseTwo}
                alt=""
                className="h-[408px] w-[350px]  w-[350px] xl:min-w-[350px]"
              />
              <Image
                src={thirdCourseBtn}
                alt=""
                className="absolute bottom-[30px] right-[20px]"
              />
            </div>
            <p className="text-[28px] font-[700] text-[#ffffff]">
              Marine Courses
            </p>
          </div>
          <div className=" w-[370px] h-[460px] md:h-[400px] flex  flex-col items-center justify-center">
            <div className="relative">
              <Image
                src={thirdCourseThree}
                alt=""
                className="h-[408px] w-[350px] w-[350px] xl:min-w-[350px]"
              />
              <Image
                src={thirdCourseBtn}
                alt=""
                className="absolute bottom-[30px] right-[20px]"
              />
            </div>
            <p className="text-[28px] font-[700] text-[#ffffff]">
              Certficate Revalidation
            </p>
          </div>
        </div>
        <div className="absolute top-[0px] right-[0px] w-[80%] lg:max-w-[75%] hidden md:block flex justify-center ">
          <Image
            src={thirdStruct}
            alt="secLogo"
            className="w-[100%] max-h-[116px] min-h-[116px]"
          />
        </div>
      </div>
      <div className="home-fourth  min-w-[95%] xl:min-w-[70%] min-h-[860px] xl:gap-[40px]">
        <div className="fourth-img relative mb-[100px] lg:mb-[0px]">
          <Image src={fourthSIdeImg} alt="" />
          <Image
            src={fourthAnimationImg}
            alt=""
            className="animate-hanker absolute bottom-[-120px]"
          />
        </div>
        <div className="fourth-content p-[20px] md:p-[0px]">
          <p className="text-[24px] font-[700] mb-[20px]">WHY CHOOSE US</p>
          <div className="leading-[48px]">
            <p className="text-[40px] font-[700]">Here Is What</p>
            <p className="text-[40px] text-[#672013] font-[700]">
              You Can Expect
            </p>
            <p className="text-[40px] font-[700] text-[#F9AB70]">AT CMC</p>
          </div>
          <p className="max-w-[616px] text-[24px] leading-[33px] text-[#7E7E7E]">
            If you want a place with quality training, reasonable pricing, and
            with most contemporary teaching methods, then CMC Maritime Academy
            is the right place to come
          </p>
          <div className=" ml-[20px] md:ml-[40px]">
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px] mt-[20px]">
              <Image
                src={fourthIconOne}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Best in Class Faculty – Committed and Professional.
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconTwo}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">DG Approved Courses</p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconThree}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Highly subsidized fee structure.
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconFour}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Safety Collaborative Learning Environment
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconFive}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Dedicated Training Academy
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconSix}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Commitment to Ethical Standards
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconSeven}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Global Recognition Of Programmes
              </p>
            </div>
            <div className=" flex  gap-[15px] mb-[20px] md:mb-[8px]">
              <Image
                src={fourthIconEight}
                alt=""
                className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
              />
              <p className="text-[20px] text-[#7E7E7E]">
                Proven track record of many years of delivering high performance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-fifth relative w-[95%] xl:w-[90%] my-[30px] p-[10px] md:p-[0px]">
        <Image
          src={fifthAbsOne}
          alt=""
          className="absolute xl:top-[0px] xl:left-[18%]  lg:top-[0px] lg:left-[10%]  md:left-[10px] hidden md:block "
        />
        <Image
          src={fifthAbsTwo}
          alt=""
          className="absolute  lg:top-[100px] lg:left-[22%]    xl:top-[100px] xl:left-[25%] md:left-[10px] md:bottom-[0px] hidden md:block"
        />
        <Image
          src={fifthAbsThree}
          alt=""
          className="absolute xl:top-[0px] xl:right-[30%] lg:top-[0px] lg:right-[200px] md:right-[10px] hidden md:block "
        />
        <Image
          src={fifthAbsFour}
          alt=""
          className="absolute xl:top-[100px] xl:right-[15%] lg:top-[100px] lg:right-[10px] md:right-[10px] md:bottom-[0px] hidden md:block "
        />
        <div className="flex items-center flex-col justify-center">
          <p className="text-[44px] font-[600] text-[#672013] text-center">
            Our Courses
          </p>
          <p className="text-[26px] font-[500] text-[#7E7E7E] max-w-[533px] text-center">
            Select one of the categories below to explore our portfolio of
            Maritime Diplomas, Certificates and Short Courses
          </p>
        </div>
      </div>

      <div className="sixth-home xl:max-w-[90%] max-w-[98%] relative  my-[30px]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[630px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            740: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1241: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1720: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <CourseCard />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="seventh-home">
        <p className="text-[#672013] text-[40px] font-[600] max-w-[603px] text-center ">
          People like histudy education. No joking - here’s the proof!
        </p>
      </div>
      <div className="eigth-home flex items-center justify-center xl:max-w-[90%] max-w-[95%]  my-[30px]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "#button-next-review",
            prevEl: "#button-prev-review",
          }}
          modules={[Pagination, Navigation]}
          className="reviewSwiper h-[280px] flex items-center justify-center min-w-[100%]"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            656: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            912: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1204: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1620: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ReviewCard />
          </SwiperSlide>
          <div id="button-next-review" className=""></div>
          <div id="button-prev-review"></div>
        </Swiper>
      </div>
      <div className="ninth-home   min-w-[100%]  relative ">
        <div className="xl:mt-[150px] xl:ml-[150px]  lg:mt-[120px] lg:ml-[70px] md:mt-[180px] md:ml-[30px] mb-[80px]  sticky top-[120px] ">
          <p className="lg:text-[64px] text-[20px]  ml-[20px] mt-[20px] max-w-[100px] pt-[26px] md:pt-[0px] md:text-[44px] font-[700] md:leading-[76px] fix-content lg:max-w-[405px] md:max-w-[305px] text-[#ffffff]">
            <span className="text-[#F9AB70]">Navigate</span> with purpose, each
            challenge is a step towards{" "}
            <span className="text-[#F9AB70]">greatness </span>
          </p>
        </div>
        <Image
          src={bigBoat}
          alt="secLogo"
          className="object-contain min-w-[100%] min-h-[100%] abs_img z-[-2] absolute top-[0px]"
        />
      </div>
      <div className=" flex items-center justify-center flex-col md:flex-row tenth-home  mt-[30px] md:mt-[70px] w-[90%] relative xl:flex xl:items-center xl:justify-center">
        <p className="text-[32px] static right-[50px] top-[10px] md:top-[-40px]  font-[600] leading-[44px] max-w-[430px] lg:text-[30px] md:leading-[54px] lg:font-[600] lg:max-w-[605px] text-center lg:top-[10px] lg:right-[-20px]  capitalize md:absolute xl:text-[45px] xl:font-[700] xl:max-w-[705px] xl:right-[100px] ">
          <span className="text-[#F9AB70] ">Hello Mate</span>, If you see this
          you’ve navigated a right way towards your{" "}
          <span className="text-[#F9AB70]">greatness</span>
        </p>
        <Image
          src={identifyLogoDesk}
          alt=""
          className="mt-[30px] xl:ml-[40px] w-[90%] lg:w-[80%] hidden md:block desk-identify"
        />
        <Image
          src={identifyLogoMob}
          alt=""
          className="mt-[30px] xl:ml-[40px] md:hidden  mob-identify"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
