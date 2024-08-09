import React from "react";
import { Header } from "@/component";
import { Button } from "@/components/ui/button";
import Sign_form from "@/components/ui/sign_form";
const page = () => {
  return (
    <>
      <div className="login-form h-[100%] w-[100%] h-[100%] md:h-[100vh] ">
        <Header Color={"#fff"} UserType={""} />
        <div className=" flex items-center justify-center md:w-[90%] h-[100%] lg:pl-[60px] pt-[10px] mt-[60px] md:mt-[0px] md:pt-[100px] ">
          <div className=" max-w-[551px] w-[95%] lg:min-w-[586px]  flex flex-col items-center py-[20px] justify-start gap-[50px] m-[10px] lg:ml-[80px] glass-morph mt-[50px] md:mt-[0px]">
            <p className="text-[30px] font-[400] text-[#fff]">
              Create Your Account
            </p>

            <Sign_form />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
