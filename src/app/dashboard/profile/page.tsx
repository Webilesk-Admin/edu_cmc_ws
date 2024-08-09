import React from "react";
import { Header, DashboardComp } from "@/component";
import Dashboard_profile from "../../../components/ui/dashboard_profile";

const Page = () => {
  return (
    <>
      <div>
        <Header UserType={"user"} ActiveLink={0} Color={""} />
        <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh] h-full">
          <div className="w-full overflow-hidden 2xl:w-[87%]  flex md:gap-[30px] relative">
            <div className="sticky top-[110px] z-10">
              <DashboardComp DashCount={1} />
            </div>

            <div className="overflow-y-scroll  w-[100%] h-[88vh] scroll-side">
              <div
                style={{ padding: "20px" }}
                className="flex flex-col  gap-[40px]"
              >
                <div className=" flex items-center  mt-[30px]">
                  <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                    INDos No
                  </p>
                  <p className="text-[20px] font-[500] text-[#672013]">
                    12ER1788
                  </p>
                </div>
                <Dashboard_profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
