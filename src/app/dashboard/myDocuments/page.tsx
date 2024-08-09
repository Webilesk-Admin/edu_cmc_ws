import React from "react";
import { Header, DashboardComp } from "@/component";
import DashboardMydocument from "@/components/ui/mydocsForm/dashboardMydocument";
import Image from "next/image";
import DashDocIcon from "@/asset/cmc_dashboard_mydocument_doc_icon.png";
const page = () => {
  return (
    <div>
      <Header UserType={"user"} ActiveLink={0} Color={""} />
      <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh] h-full">
        <div className="w-full 2xl:w-[87%]  flex md:gap-[30px] relative">
          <div className="sticky top-[110px] z-10">
            <DashboardComp DashCount={5} />
          </div>

          <div className="overflow-y-scroll  w-[100%] h-[88vh] flex justify-center scroll-side">
            <div className="flex flex-col items-start bg-transparent  w-[95%] gap-[20px] lg:p-[20px]">
              <div className="flex flex-col items-center md:items-start md:flex-row justify-between w-[100%]">
                <p className="text-[24px] font-[500] text-[#672013] mt-[20px]">
                  My Documents
                </p>
                <div className="flex flex-col items-center justify-center">
                  <Image src={DashDocIcon} alt="" />
                  <p className="text-[14px] font-[500] text-[#672013]">
                    (Max. File size: 2 MB)
                  </p>
                </div>
              </div>
              <div className="relative w-[100%]">
                <DashboardMydocument />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
