"use client";
import React from "react";
import { useState } from "react";
import { Header, CourseCategory, Footer } from "@/component";
import Image from "next/image";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import bannerSide from "@/asset/cmc_courseItem_1_img.png";
import courseImage from "@/asset/cmc_courseItems_course_img.png";
import courseMode from "@/asset/cmc_courseItems_mode_img.png";
import courseFees from "@/asset/cmc_courseItems_fees_img.png";
import cerfCheck from "@/asset/cmc_courseItems_cerf_checkbox.png";
import buttonIcon from "@/asset/cmc_courseItems_book_btn_icon.png";
import Abs1 from "@/asset/cmc_courseItems_abs_1_img.png";
import Abs2 from "@/asset/cmc_courseItems_abs_2_img.png";
import Abs3 from "@/asset/cmc_courseItems_abs_3_img.png";
import ModalIcon1 from "@/asset/cmc_modal_course_item_modal_doc_icon.png";
import ModalIcon2 from "@/asset/cmc_modal_course_item_modal_right_arr_icon.png";
import ModalCloseIcon from "@/asset/cmc_course_item_modal_close.png";
import Link from "next/link";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

import "./style.css";
const page = () => {
  const [modal2Open, setModal2Open] = useState<boolean>(false);
  const show = () => {
    setModal2Open(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Header Color={"#7E7E7E"} ActiveLink={"2"} />
        <div className="min-h-[169px] bg-[#fbcba6] min-w-[100%] mt-[68px] md:mt-[80px]  flex items-center justify-center p-[10px] md:p-[0px] course-ban">
          <div className=" min-w-[80%]">
            <p className="text-[26px] max-w-[478px] font-[600]" onClick={show}>
              Courses at CMC Training Academy
            </p>
            <p className="text-[18px] max-w-[478px] font-[600">
              Select one of the categories below to explore our portfolio of
              Maritime Diplomo Certficates and short courses
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-[100%] border-b-2 border-[#d8c7bb] pl-[10px] md:pl-[0px]">
          <div className=" my-[5px] md:my-[10px] flex flex-wrap gap-[5px]  w-[100%] md:max-w-[80%] ">
            <Link href="/">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />

            <Link href="courseCategory">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">
                Courses
              </p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />

            <Link href="subCat">
              <p className="md:text-[22px] font-[600] text-[#7E7E7E]">
                Sub Cat
              </p>
            </Link>
            <Image src={BredArrow} alt="" height={25} width={25} />
            <Link href="courseCategory">
              <p className="md:text-[22px] font-[600] text-[#672013]">Item</p>
            </Link>
          </div>
        </div>
        <div className="lg:min-h-[400px] flex items-center justify-center w-[100%]">
          <div className="w-[100%] flex justify-center flex-col items-center w-[90%] md:flex-row xl:gap-[50px] my-[30px]">
            <Image src={bannerSide} alt="" />
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <p className="text-[36px] font-[700] text-[#F9AB70] text-center">
                MEO Class II Preparatory Course
              </p>
              <p className="text-[20px] text-[#7E7E7E] max-w-[930px] font-[500] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                gravida velit risus, nec fringilla orci rutrum eu. Donec
                vulputate turpis et felis lobortis lacinia. Phasellus turpis
                lacus, lobortis ac luctus a, elementum accumsan elit. Aliquam
                viverra molestie orci et faucibus. In sit amet turpis placerat,
                ornare ex eu, congue nulla. Phasellus non ante tincidunt, rutrum
                lorem id, ultricies urna.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="xl:w-[80%] md:w-[97%] w-[100%] flex justify-center flex-col items-center py-[40px] mb-[30px] shadow shadow-[0px 5px 8.4px 0px] shadow-[#D9D9D9] bg-[#fcfcfc] ;
"
        >
          <div className="flex  items-start ml-[4px] md:m-[20px] max-[920px]:flex-col max-[920px]:items-center gap-[10px] md:w-[95%] w-[100%] min-h-[500px] ">
            <Image
              src={courseImage}
              className="max-w-[364px] max-h-[425px] min-w-[250px] w-[100%] mt-[60px]"
              alt=""
            />
            <div className="flex flex-col items-center justify-start mt-[10px] w-[100%]">
              <p className="text-[28px] font-[600] text-[#672013] mb-[10px]">
                Batches
              </p>
              <div className="border-dashed border-2 min-h-[400px] border-[#D9D9D9] md:p-[10px] xl:p-[20px] w-[96%] md:w-[95%] rounded-[25px] md:min-w-[600px]  flex   items-center ">
                <table className="w-[95%] table-auto ">
                  <thead>
                    <tr>
                      <th className="md:text-[20px] font-[600] text-[#7E7E7E] py-[10px] ">
                        Batch No
                      </th>
                      <th className="md:text-[20px] font-[600] text-[#7E7E7E]">
                        From Date
                      </th>
                      <th className="md:text-[20px] font-[600] text-[#7E7E7E]">
                        Available Seat
                      </th>
                      <th className="md:text-[20px] font-[600] text-[#7E7E7E]">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        <input
                          type="radio"
                          id="radio1"
                          name="radio-group"
                          className="radio-input"
                        />
                        <label htmlFor="radio1" className="radio-label">
                          <span className="radio-inner-circle"></span>
                        </label>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        <input
                          type="radio"
                          id="radio2"
                          name="radio-group"
                          className="radio-input"
                        />
                        <label htmlFor="radio2" className="radio-label">
                          <span className="radio-inner-circle"></span>
                        </label>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        <input
                          type="radio"
                          id="radio3"
                          name="radio-group"
                          className="radio-input"
                        />
                        <label htmlFor="radio3" className="radio-label">
                          <span className="radio-inner-circle"></span>
                        </label>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        <input
                          type="radio"
                          id="radio4"
                          name="radio-group"
                          className="radio-input"
                        />
                        <label for="radio4" className="radio-label">
                          <span className="radio-inner-circle"></span>
                        </label>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        <input
                          type="radio"
                          id="radio5"
                          name="radio-group"
                          className="radio-input"
                        />
                        <label for="radio5" className="radio-label">
                          <span className="radio-inner-circle"></span>
                        </label>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center py-[10px]">
                        1
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        29-08-2024
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        15
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center">
                        3 Days
                      </td>
                      <td className="md:text-[20px] font-[600] text-[#F9AB70] text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="max-w-[440px] my-[20px] w-[90%] xl:min-w-[440px] flex justify-between">
            <div className=" ">
              <div className="flex gap-[20px] mb-[20px]">
                <Image src={courseMode} alt="" />
                <p className="text-[20px] font-[600] text-[#7E7E7E]">Mode</p>
              </div>
              <p className="text-[20px] font-[600] text-[#F9AB70]">On Site</p>
            </div>
            <span className="min-h-[92px] min-w-[3px] border-dashed border-l-2 border-[#D9D9D9] opacity-6"></span>
            <div className="">
              <div className="flex gap-[20px] mb-[20px]">
                <Image src={courseFees} alt="" />
                <p className="text-[20px] font-[600] text-[#7E7E7E]">Fees</p>
              </div>
              <p className="text-[20px] font-[600] text-[#F9AB70]">
                $ 8,000 /-
              </p>
            </div>
          </div>
          <div className="w-[100%] flex items-center flex-col justify-center my-[20px] md:my-[40px] relative">
            <Image
              src={Abs1}
              alt=""
              className="absolute  hidden xl:block left-[-40px]"
            />
            <p className="text-[28px] font-[600] text-[#672013]">
              Documents Required
            </p>
            <div className="flex justify-between flex-col gap-[20px] mt-[40px] md:flex-row lg:w-[60%]">
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">TC</p>
              </div>
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">Aadhar</p>
              </div>
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">
                  Marksheet
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex items-center flex-col justify-center  my-[20px] md:my-[40px] relative">
            <Image
              src={Abs2}
              alt=""
              className="absolute  hidden xl:block right-[-40px]"
            />
            <p className="text-[28px] font-[600] text-[#672013]">
              Certficates Required
            </p>
            <div className="flex justify-between flex-col gap-[20px] mt-[40px] md:flex-row lg:w-[60%]">
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">
                  Medical Fitness
                </p>
              </div>
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">
                  COC Certficate
                </p>
              </div>
              <div className=" flex items-center gap-[20px]">
                <Image src={cerfCheck} alt="" />
                <p className="text-[20px] font-[400] text-[#F9AB70]">
                  Marksheet
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex items-center flex-col justify-center gap-[20px] my-[20px] md:my-[40px] relative">
            <Image
              src={Abs3}
              alt=""
              className="absolute top-[0px]  hidden xl:block left-[-40px]"
            />
            <p className="text-[28px] font-[600] text-[#672013]">Eligibility</p>
            <p className="max-w-[783px] text-center text-[20px] text-[#F9AB70] font-[400] w-[90%]">
              MEO CLASS LV (FG / NCV) CERTIFICATE OF COMPETENCY AND HAS
              COMPLETED A MINIMUM OF L2 MONTHS SEA GOING SERVICE AS A
              CERTIFICATED ENGINEER OFFICER OF WATCH MEO CLASS L/LL (FG / NCV)
              CERTIFICATE OF COMPETENCY DREDGE GRADE L/LL CERTIFICATE OF
              COMPETENCYELECTRO-TECHNICAL OFFICERS
            </p>
          </div>
          <div className="lg:min-w-[578px] cursor-pointer h-[81px] bg-[#f9ab70] text-[#fff] relative flex items-center min-w-[300px] w-[80%] max-w-[578px] justify-center rounded-[10px]">
            <p className="text-[20px] font-[600] ">BOOK NOW</p>
            <Image src={buttonIcon} alt="" className="absolute right-[20px]" />
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
          <p className="max-w-[880px] text-center text-[25px] lg:text-[32px] font-[500]">
            Please Upload all the Missing Documents at your Profile Page to
            proceed for Booking Course Successfully
          </p>
          <div className="lg:min-w-[351px] w-[300px] h-[57px] bg-[#F9AB70] flex items-center  px-[20px] justify-center cursor-pointer gap-[30px] lg:gap-[80px] rounded-[10px]">
            <div className=" flex items-center gap-[10px]">
              <Image
                src={ModalIcon1}
                alt=""
                className="max-w-[30px] max-h-[30px] "
              />
              <p className="text-[24px] font-[600] text-[#ffffff]">
                My Documents
              </p>
            </div>
            <Image src={ModalIcon2} alt="" />
          </div>
          <Image
            src={ModalCloseIcon}
            alt=""
            className="absolute right-[10px] top-[10px] max-w-[32px]  lg:max-w-[52px] lg:max-h-[52px] cursor-pointer"
            onClick={() => setModal2Open(false)}
          />
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default page;
