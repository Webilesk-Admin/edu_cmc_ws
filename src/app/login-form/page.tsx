import React from "react";
import { Header } from "@/component";
const page = () => {
  return (
    <>
      <div className="login-form min-h-[100vh] min-w-[100%]">
        <Header Color={"#fff"} />
        <div className=" flex items-center justify-start  min-h-[100vh] ">
          <div className=" max-w-[551px] w-[95%] lg:min-w-[551px] h-[568px] lg:min-h-[568px] flex flex-col items-center justify-center gap-[50px] m-[10px] lg:ml-[80px] glass-morph mt-[30px]">
            <p className="text-[30px] font-[400] text-[#fff]">
              Hi,Welcome Back Mate!
            </p>
            <form className="flex items-center justify-center flex-col gap-[40px]">
              <div className="">
                <input
                  type="text"
                  className="max-w-[333px] w-[330px] lg:min-w-[333px] min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                  placeholder="INDos Number"
                />
              </div>
              <div className=" relative">
                <input
                  type="text"
                  className="max-w-[333px] w-[330px] lg:min-w-[333px] min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                  placeholder="Password"
                />
                <p className="text-[14px] font-[400] text-[#fff] absolute right-[10px] bottom-[-35px]">
                  Forget Password?
                </p>
              </div>
            </form>
            <div className="">
              <button className="w-[184px] h-[52px] rounded-[50px] bg-[#F9AB70] flex items-center justify-center text-[20px] font-[400] mt-[20px]">
                Login
              </button>
              <p className="text-[16px] mt-[15px] font-[400] text-[#fff]">
                Don’t have an account?{" "}
                <span className="font-[600] text-[#F9AB70] ">Sign in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
