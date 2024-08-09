import React from "react";
import { Header } from "@/component";
import Image from "next/image";
import BigIcon from "@/asset/cmc_payment_error_big_icon.png";
import SmallIcon from "@/asset/cmc_pymt_error_small_icon.png";
const page = () => {
  return (
    <>
      <div className="">
        <Header UserType={"user"} />
        <div className="flex flex-col gap-[10px] items-center h-[80vh] justify-center mt-[60px] md:mt-[110px]">
          <div className="w-[90%] bg-[#D32828] h-[263px] rounded-[24px] max-w-[633px] lg:min-w-[633px] flex flex-col items-center justify-center gap-[5px] ">
            <Image src={BigIcon} alt="" className="max-w-[50px]" />
            <p className="text-[24px] font-[400] text-[#ffffff] mt-[15px]">
              Payment Success!
            </p>
            <p className="text-[24px] font-[600] text-[#ffffff]">₹7500 /-</p>
          </div>
          <div className="w-[90%] bg-[#000] h-[222px] rounded-[24px] max-w-[633px] lg:min-w-[633px] flex flex-col items-center justify-center gap-[5px] ">
            <p className="text-[20px] font-[500] text-[#ffffff]">
              Payment Details
            </p>
            <div className="w-[100%] flex flex-col items-center justify-center">
              <div className="flex justify-between items-center min-w-[90%] max-w-[90%]">
                <p className="text-[18px] font-[400] text-[#ffffff] opacity-[0.7]">
                  Ref Number
                </p>
                <p className="text-[16px] font-[500] text-[#ffffff]">
                  000085752257
                </p>
              </div>
              <div className="flex justify-between items-center min-w-[90%] max-w-[90%]">
                <p className="text-[18px] font-[400] text-[#ffffff] opacity-[0.7]">
                  Payment Status
                </p>
                <div className=" flex gap-[10px] items-center">
                  <Image src={SmallIcon} alt="" />
                  <p className="text-[16px] font-[500] text-[#ffffff]">
                    Failed
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center min-w-[90%] max-w-[90%]">
                <p className="text-[18px] font-[400] text-[#ffffff] opacity-[0.7]">
                  Ref Number
                </p>
                <p className="text-[16px] font-[500] text-[#ffffff]">
                  000085752257
                </p>
              </div>
              <div className="flex justify-between min-w-[90%] max-w-[90%] mt-[20px]">
                <p className="text-[18px] font-[400] text-[#ffffff] opacity-[0.7]">
                  Total Payment
                </p>
                <p className="text-[24px] font-[500] text-[#ffffff]">₹7500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
