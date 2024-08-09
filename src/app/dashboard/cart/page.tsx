"use client";

import React from "react";
import { Header, DashboardComp, CartItemCard } from "@/component";
import { useState } from "react";
import Image from "next/image";
import ClosedIcon from "../../../asset/cmc_dashboard_cart_closed_icon.png";
import OpenedIcon from "../../../asset/cmc_dashboard_cart_opened_icon.png";
const page = () => {
  let [modalState, setModalState] = useState<boolean>(false);
  const clickModal = () => {
    setModalState(!modalState);
  };
  const onClose = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <div>
        <Header UserType={"user"} ActiveLink={0} Color={""} />
        <div className="flex justify-center items-start w-full mt-[40px] md:mt-[110px] h-[80vh] h-full">
          <div className="w-full overflow-hidden 2xl:w-[87%]  flex md:gap-[30px] relative">
            <div className="sticky top-[110px] z-10">
              <DashboardComp DashCount={2} />
            </div>

            <div className="overflow-y-scroll  w-[100%] h-[88vh] scroll-side">
              <div
                style={{ padding: "20px" }}
                className="flex flex-col  gap-[20px]"
              >
                <p className="text-[24px] font-[500] text-[#672013] mt-[20px]">
                  Cart Course
                </p>
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
              </div>
            </div>
            <div className="hidden min-[1410px]:block min-w-[292px] cart-rate-card max-w-[292px] flex flex-col mr-[4px] h-[100%] border-2 border-dashed border-[#D9D9D9B8] h-[332px] rounded-[12px] mt-[100px] p-[20px]">
              <p className="text-[22px] text-[#672013] font-[500] ">
                Cart Totals
              </p>
              <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
                <div className="flex justify-between w-[100%] ">
                  <p className="text-[22px] text-[#F9AB70] font-[400]">
                    Sub-Totals
                  </p>
                  <p className="text-[22px] text-[#672013] font-[400]">
                    ₹22000/-
                  </p>
                </div>
                <div className="flex justify-between w-[100%] ">
                  <p className="text-[22px] text-[#F9AB70] font-[400]">
                    Discount
                  </p>
                  <p className="text-[22px] text-[#672013] font-[400]">
                    ₹3500/-
                  </p>
                </div>
                <span className="w-[214px] h-[2px] border border-dashed border-[#D9D9D9B8] "></span>
                <div className="flex justify-between w-[100%] ">
                  <p className="text-[22px] text-[#F9AB70] font-[400]">Total</p>
                  <p className="text-[22px] text-[#672013] font-[400]">
                    ₹18500/-
                  </p>
                </div>
                <button className="text-[20px] font-[700] text-[#ffffff] w-[267px] h-[42px] bg-[#F9AB70] rounded-[10px] flex justify-center items-center">
                  Proceed To Pay
                </button>
              </div>
            </div>
            <Image
              src={modalState ? OpenedIcon : ClosedIcon}
              alt=""
              className="fixed top-[50%] right-[10px] max-h-[60px] max-w-[60px] z-[1] cursor-pointer cart-btn-total min-[1410px]:hidden"
              onClick={clickModal}
            />
          </div>
        </div>
        <div>
          <div
            style={{ transition: "all 0.3s ease" }}
            className={`min-[1410px]:hidden min-w-[292px]  max-w-[292px] flex flex-col z-[2] bg-[#ffffff] mr-[4px] h-[340px] fixed top-[20%] ${
              modalState ? "right-[0px]" : "right-[-300px] "
            } border-2 border-dashed border-[#D9D9D9B8] h-[332px] rounded-[12px] mt-[100px] p-[20px]`}
          >
            <span
              className="cursor-pointer text-[24px] absolute right-[10px] top-[0px]"
              onClick={onClose}
            >
              &times;
            </span>
            <p className="text-[22px] text-[#672013] font-[500] ">
              Cart Totals
            </p>
            <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
              <div className="flex justify-between w-[100%] ">
                <p className="text-[22px] text-[#F9AB70] font-[400]">
                  Sub-Totals
                </p>
                <p className="text-[22px] text-[#672013] font-[400]">
                  ₹22000/-
                </p>
              </div>
              <div className="flex justify-between w-[100%] ">
                <p className="text-[22px] text-[#F9AB70] font-[400]">
                  Discount
                </p>
                <p className="text-[22px] text-[#672013] font-[400]">₹3500/-</p>
              </div>
              <span className="w-[214px] h-[2px] border border-dashed border-[#D9D9D9B8] "></span>
              <div className="flex justify-between w-[100%] ">
                <p className="text-[22px] text-[#F9AB70] font-[400]">Total</p>
                <p className="text-[22px] text-[#672013] font-[400]">
                  ₹18500/-
                </p>
              </div>
              <button className="text-[20px] font-[700] text-[#ffffff] w-[267px] h-[42px] bg-[#F9AB70] rounded-[10px] flex justify-center items-center">
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
