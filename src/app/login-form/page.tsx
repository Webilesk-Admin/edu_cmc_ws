import React from "react";
import { Header } from "@/component";
import { Button } from "@/components/ui/button";
import Login_form from "@/components/ui/login_form";
const page = () => {
  return (
    <>
      <div className="login-form min-h-[100vh] min-w-[100%]">
        
        <div className=" flex items-center justify-center w-[100%] md:max-w-[90%]  min-h-[100vh] ">
          <div className=" max-w-[551px] w-[95%] lg:min-w-[551px] h-[568px] lg:min-h-[568px] flex flex-col items-center justify-center gap-[50px] m-[10px] lg:ml-[80px] glass-morph mt-[50px] md:mt-[0px]">
            <p className="text-[30px] font-[400] text-[#fff]">
              Hi,Welcome Back Mate!
            </p>

            <Login_form />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
