import React from "react";
import { Header, DashboardComp } from "@/component";
import Dashboard_profile from "../../../components/ui/dashboard_profile";
import TableFirst from "../../../asset/cm_dashboard_pymt_first_table.png";
import DownloadIcon from "../../../asset/cmc_dashboard_mycourse_download_icon.png";
import CompleteIcon from "../../../asset/cmc_dashboard_mycourse_comp_course_icon.png";
import UpComing from "../../../asset/cmc_dashboard_my_course_ongoing_course_icon.png";
import OnGoingIcon from "../../../asset/cmc_dashboard_my_course_upcoming_course_icon.png";
import Table1 from "../../../asset/cmc_dashboard_mycourse_table_1.png";
import Table2 from "../../../asset/cmc_dashboard_mycourse_table_2.png";
import Table3 from "../../../asset/cmc_dashboard_mycourse_table_3.png";
import Image from "next/image";
import CompleteCourseTable from "../../../component/CompleteCourseTable/page";

const page = () => {
  return (
    <div>
      <Header UserType={"user"} ActiveLink={0} Color={""} />
      <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh] h-full">
        <div className="w-full 2xl:w-[87%]  flex md:gap-[30px] relative">
          <div className="sticky top-[110px] z-10">
            <DashboardComp DashCount={3} />
          </div>

          <div className="overflow-y-scroll  w-[100%] h-[88vh] scroll-side">
            <div className="flex flex-col bg-transparent  gap-[30px] lg:p-[20px]">
              <div className="pymt-first flex items-start justify-center flex-col pt-[30px] lg:p-[30px] bg-transparent  lg:x-[20px] w-[100%] pb-[20px] relative shadow-course  xl:shadow-none rounded-[20px] xl:rounded-none">
                <Image
                  src={Table1}
                  alt=""
                  className="hidden xl:block absolute w-[100%] z-[-2] max-h-[100%] min-h-[387px] min-w-[610px]  left-[-10px]"
                />
                <div className="flex justify-center md:justify-start w-[100%] gap-[10px]">
                  <Image src={CompleteIcon} alt="" />
                  <p className="text-[24px] font=[500] bg-transparent text-[#F9AB70]">
                    Completed Course
                  </p>
                </div>
                <div className="mt-[40px] min-w-[95%]  max-w-[100%] 2xl:max-w-[95%] 2xl:min-w-[95%] relative flex items-center justify-center">
                  <CompleteCourseTable Page={2} />
                </div>
              </div>

              <div className="pymt-first flex items-start justify-center flex-col pt-[30px] lg:p-[30px]   lg:x-[20px] w-[100%] pb-[20px] relative shadow-course  xl:shadow-none rounded-[20px] xl:rounded-none">
                <Image
                  src={Table2}
                  alt=""
                  className="hidden xl:block absolute w-[100%] z-[-2] max-h-[100%] min-h-[287px] min-w-[610px]  left-[-10px]"
                />
                <div className="flex justify-center w-[100%]  gap-[10px] bg-[transparent]">
                  <Image src={OnGoingIcon} alt="" />
                  <p className="text-[24px] font=[500] text-[#F9AB70]">
                    Ongoing Course
                  </p>
                </div>
                <div className="mt-[40px] min-w-[95%]  max-w-[100%] 2xl:max-w-[95%] 2xl:min-w-[95%] relative flex items-center justify-center">
                  <CompleteCourseTable Page={1} />
                </div>
              </div>

              <div className="pymt-first flex items-start justify-center flex-col pt-[30px] lg:p-[30px]   lg:x-[20px] w-[100%] pb-[20px] relative shadow-course  xl:shadow-none rounded-[20px] xl:rounded-none">
                <Image
                  src={Table3}
                  alt=""
                  className="hidden xl:block absolute w-[100%] z-[-2] max-h-[100%] min-h-[287px] min-w-[610px]  left-[-10px]"
                />
                <div className="flex gap-[10px] w-[100%] justify-center md:justify-end mt-[10px] mr-[20px]">
                  <Image src={UpComing} alt="" />
                  <p className="text-[24px] font=[500] text-[#F9AB70] ">
                    Upcoming Course
                  </p>
                </div>
                <div className="mt-[40px] min-w-[95%]  max-w-[100%] 2xl:max-w-[95%] 2xl:min-w-[95%] relative flex items-center justify-center">
                  <CompleteCourseTable Page={1} />
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
