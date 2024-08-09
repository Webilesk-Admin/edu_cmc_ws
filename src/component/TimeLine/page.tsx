"use client";
import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "@/app/fireConfetti";
import Image from "next/image";
import Aos from "aos";
import HankerWheel from "@/asset/cmc_about_timeline_hanker.png";
import RightArrow from "@/asset/cmc_about_right_timeline_arrow.png";
import LeftArrow from "@/asset/cmc_about_left_timeline_arrow.png";
import MobHanker from "@/asset/cmc_about_timeline_mob_hanker.png";
// import "./styles.css";
import $ from "jquery";
import { Divide } from "lucide-react";
const Timeline = ({ setObserver }) => {
  let [screen, setScreen] = useState<boolean>(false);
  useEffect(() => {
    Aos.init();

    let ScreenWIdth = $(window).width();
    console.log(ScreenWIdth);
    if (ScreenWIdth <= 850) {
      setScreen(true);
    }
  }, []);
  const timeline3 = useRef(null);

  const circle3 = useRef(null);

  const someCallback3 = () => {
    fireConfetti();
  };
  // console.log(screen);

  useEffect(() => {
    setObserver(timeline3.current);

    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <>
      {screen ? (
        <div className="wrapper flex flex-col items-center justify-center gap-[40px] ">
          <p className="text-[36px] font-[700] mb-[10px] text-[#672013] text-center">
            Highlights Of Our CMC
          </p>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px]  flex items-center justify-center rounded-[22px] border border-[#BABABA] p-[10px]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                CMC Maritime Academy Chennai has been graded as A1 (Outstanding
                Institute).CMC Maritime Academy Chennai is certified by RINA for
                maintaining the Quality Management System in compliance with
                <span className="text-[15px] font-[700] text-[#FF6E00] ">
                  ISO 9001:2015 Standards.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px] p-[10px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                CMC Maritime Academy Chennai is one of the most eminent Maritime
                Training Academy since the
                <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                  last 12 years and it is renowned
                </span>
                for the standards of its students and facilities.
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px] p-[10px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                Up to 2024, CMC Maritime Academy Chennai has
                <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                  successfully trained over 10,000 professionals
                </span>
                through Maritime Courses that were approved by Directorate
                General of. Shipping, the Govt of India.
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                CMC Maritime Academy Chennai Management team
                <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                  includes a team of 20 professionals
                </span>
                from the maritime industry.
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px] p-[10px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                Over 1000 batches have been effectively completed.
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center justify-center w-[95%]">
            <Image src={MobHanker} alt="" className="max-h-[54px]" />
            <div
              className="message w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
              data-aos="fade-up"
            >
              <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify  ">
                <span className="text-[15px] font-[700] text-[#FF6E00] mr-[5px]">
                  More than 20 marine courses
                </span>
                offered by CMC Maritime Academy Chennai have been certified by
                the Directorate General of Shipping, Govt of India.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapper flex flex-col items-center justify-center gap-[40px] ">
          <p className="text-[36px] font-[700] mb-[20px] text-[#672013] text-center">
            Highlights Of Our CMC
          </p>
          <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <Image src={HankerWheel} alt="" />
              <Image src={RightArrow} alt="" className="ml-[-10px]" />
              <div
                className="message absolute left-[100%] w-[346px] p-[10px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-left"
              >
                <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify  ">
                  CMC Maritime Academy Chennai has been graded as A1
                  (Outstanding Institute).CMC Maritime Academy Chennai is
                  certified by RINA for maintaining the Quality Management
                  <span className="text-[15px] font-[700] text-[#FF6E00] ml-[10px]">
                    ISO 9001:2015 Standards.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <div
                className="message absolute right-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-right"
              >
                <p className="text-[15px] font-[600] lg:min-w-[321px] text-[#727272] leading-[25px] max-w-[321px] text-justify  ">
                  CMC Maritime Academy Chennai is one of the most eminent
                  Maritime Training Academy since the
                  <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                    last 12 years and it is renowned
                  </span>
                  for the standards of its students and facilities.
                </p>
              </div>
              <Image src={LeftArrow} alt="" className="mr-[-10px]" />
              <Image src={HankerWheel} alt="" />
            </div>
          </div>
          <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <Image src={HankerWheel} alt="" />
              <Image src={RightArrow} alt="" className="ml-[-10px]" />
              <div
                className="message absolute left-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-left"
              >
                <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify  ">
                  Up to 2024, CMC Maritime Academy Chennai has
                  <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                    successfully trained over 10,000 professionals
                  </span>
                  through Maritime Courses that were approved by Directorate
                  General of. Shipping, the Govt of India.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <div
                className="message absolute right-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-right"
              >
                <p className="text-[15px] font-[600] lg:min-w-[321px] text-[#727272] leading-[25px] max-w-[321px] text-justify  ">
                  CMC Maritime Academy Chennai Management team
                  <span className="text-[15px] font-[700] text-[#FF6E00] mx-[10px]">
                    includes a team of 20 professionals
                  </span>
                  from the maritime industry.
                </p>
              </div>
              <Image src={LeftArrow} alt="" className="mr-[-10px]" />
              <Image src={HankerWheel} alt="" />
            </div>
          </div>
          <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <Image src={HankerWheel} alt="" />
              <Image src={RightArrow} alt="" className="ml-[-10px]" />
              <div
                className="message absolute left-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-left"
              >
                <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify  ">
                  Over 1000 batches have been effectively completed.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[150px]">
            <div id="timeline3" ref={timeline3} className="timeline" />
            <div id="circle3" ref={circle3} className="circle"></div>
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <div
                className="message absolute right-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-right"
              >
                <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify  ">
                  <span className="text-[15px] font-[700] text-[#FF6E00] mr-[5px]">
                    More than 20 marine courses
                  </span>
                  offered by CMC Maritime Academy Chennai have been certified by
                  the Directorate General of Shipping, Govt of India.
                </p>
              </div>
              <Image src={LeftArrow} alt="" className="mr-[-10px]" />
              <Image src={HankerWheel} alt="" />
            </div>
          </div>
          {/* <div className="relative min-h-[150px]">
            <div className="circleWrapper flex gap-[0px] items-center">
              <div id="circle1" className="circle"></div>
              <Image src={HankerWheel} alt="" />
              <Image src={RightArrow} alt="" className="ml-[-10px]" />
              <div
                className="message absolute left-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
                data-aos="fade-up-left"
              >
                <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify  ">
                  CMC Maritime Academy Chennai is one of the most eminent
                  Maritime Training Academy since the last 12 years and it is
                  renowned for the standards of its students and facilities.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};
export default Timeline;
// export default function App() {
//   const [message, setMessage] = useState("");

//   const onCallback = () => {
//     console.log("awesome");
//   };

//   return (
//     <div className="App">
//       <TimelineObserver
//         initialColor="#e5e5e5"
//         fillColor="black"
//         handleObserve={(setObserver) => (
//           <Timeline
//             callback={onCallback}
//             className="timeline"
//             setObserver={setObserver}
//           />
//         )}
//       />
//       <div className="stub2">{message}</div>
//     </div>
//   );
// }
