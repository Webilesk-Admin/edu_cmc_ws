// import React from "react";
"use client";

import CourseBookIcon from "@/asset/cmc_home_sixth_course_icon.png";
import aboutIcon from "@/asset/cmc_home_banner.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

import "./style.css";
const coursecard = () => {
  return (
    <div>
      <CardContainer>
        <CardBody>
          <div className="bg-[#f5f5f5] relative max-h-[534px]  min-h-[534px] min-w-[376px] max-w-[376px] md:m-[20px] basis-1/3 flex flex-col items-center justify-start rounded-[25px] gap-[20px] p-[15px]">
            <CardItem translateZ="80" className="w-full mt-4">
              <Image
                src={aboutIcon}
                alt=""
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl  max-w-[336px] max-h-[160px] min-w-[336px]  min-h-[160px]"
              />
            </CardItem>
            <div className="flex items-center justify-end min-w-[90%] ">
              <CardItem
                translateZ="100"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                <div className="w-[200px] h-[26px] bg-[#CFF4D9] flex items-center justify-center rounded-[6px] ">
                  <p className="text-[12px] font-[500] ">
                    ADVANCE MODULAR COURSE
                  </p>
                </div>
              </CardItem>
            </div>

            <p className="max-w-[323px] text-[18px] font-[500] leading-[22px] course-name text-[#672013]">
              Refresher & Updating Training Course For All Engineer Officers
              (Holding STCW 2010 COC) (REO) Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus neque quisquam
              quibusdam officiis accusantium ipsum nam voluptatem deserunt
              asperiores minima fuga, laboriosam deleniti veritatis. Provident
              magni animi voluptate velit ad?
            </p>

            <div className="flex items-center justify-start min-w-[90%]">
              <p className="text-[28px] font-[400] text-[#672013]">$ 12,5000</p>
            </div>
            <div className="flex items-center justify-between gap-[10px]">
              <CardItem translateZ={60}>
                <button className="w-[264px] h-[56px] bg-[#F9AB70] text-[#ffffff] text-[16px] font-[500] flex items-center justify-center rounded-[50px]">
                  View Course
                </button>
              </CardItem>
              <Image src={CourseBookIcon} height={56} width={56} alt="" />
            </div>
            <p className="text-[18px] font-[400] text-[#F9AB70] absolute bottom-[20px] right-[35px]">
              Next batch starts on
              <span className="text-[#672013] font-[500] ml-[4px]">
                July 20, 2024
              </span>
            </p>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default coursecard;

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

// const coursecard = () => {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src={aboutIcon}
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl  max-w-[336px] max-h-[160px] min-w-[336px] min-h-[160px]"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// };
// export default coursecard;
