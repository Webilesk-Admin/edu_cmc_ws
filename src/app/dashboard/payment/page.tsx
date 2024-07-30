import React from "react";
import { Header, DashboardComp } from "@/component";
import Dashboard_profile from "../../../components/ui/dashboard_profile";
import TableFirst from "../../../asset/cmc_dashboard_pymt_table1.png";
import DownloadIcon from "../../../asset/cmc_dashboard_mycourse_download_icon.png";
import PaymentTable from "../../../component/pymtTable/page";

import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header UserType={"user"} ActiveLink={0} Color={""} />
      <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh] h-full">
        <div className="w-full 2xl:w-[87%]  flex md:gap-[30px] relative">
          <div className="sticky top-[110px] z-10">
            <DashboardComp DashCount={4} />
          </div>

          <div className="overflow-y-scroll  w-[100%] h-[88vh] scroll-side">
            <div className="flex flex-col bg-transparent  gap-[20px] lg:p-[20px]">
              <p className="text-[24px] font-[500] text-[#672013] mt-[20px]">
                Payment History
              </p>
              <div className="pymt-first flex items-start justify-center flex-col pt-[30px] lg:p-[30px] bg-transparent  lg:x-[20px] w-[100%] pb-[20px] relative shadow-course  xl:shadow-none rounded-[20px] xl:rounded-none">
                <Image
                  src={TableFirst}
                  alt=""
                  className="hidden xl:block absolute w-[100%] z-[-2] max-h-[100%] min-h-[410px] min-w-[610px]  left-[-10px]"
                />

                <div className="mt-[40px] min-w-[95%] px-[20px] md:px-[0px]  max-w-[100%] 2xl:max-w-[95%] 2xl:min-w-[95%] relative  flex items-center justify-center overflow-x-scroll pymt-table ">
                  <PaymentTable Page={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
