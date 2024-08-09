import React from "react";
import { Header } from "@/component";
import { Button } from "@/components/ui/button";
import ForgetPass from "@/components/ui/forgetpassForm";
const page = () => {
  return (
    <>
      <div className="login-form min-h-[100vh] min-w-[100%]">
        <Header Color={"#fff"} />
        <div className=" flex items-center justify-center w-[100%] md:max-w-[90%]  min-h-[100vh] ">
          <ForgetPass />
        </div>
      </div>
    </>
  );
};

export default page;
