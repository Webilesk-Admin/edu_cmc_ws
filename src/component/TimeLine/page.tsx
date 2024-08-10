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
import $ from "jquery";


const Timeline = () => {
  // const [screen, setScreen] = useState(false);
  // const timeline3 = useRef(null);
  // const circle3 = useRef(null);

  // useEffect(() => {
  //   Aos.init();

  //   const handleResize = () => {
  //     setScreen(window.innerWidth <= 850);
  //   };

  //   handleResize(); // Initial check
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const someCallback3 = () => {
  //   fireConfetti();
  // };

  // useEffect(() => {
  //   setObserver(timeline3.current);
  //   setObserver(circle3.current, someCallback3);
  // }, [setObserver]);

  return (
    // <>
    //   {screen ? (
    //     <div className="wrapper flex flex-col items-center justify-center gap-[40px] ">
    //       <p className="text-[36px] font-[700] mb-[10px] text-[#672013] text-center">
    //         Highlights Of Our CMC
    //       </p>
    //       {[
    //         "CMC Maritime Academy Chennai has been graded as A1 (Outstanding Institute).CMC Maritime Academy Chennai is certified by RINA for maintaining the Quality Management System in compliance with ISO 9001:2015 Standards.",
    //         "CMC Maritime Academy Chennai is one of the most eminent Maritime Training Academy since the last 12 years and it is renowned for the standards of its students and facilities.",
    //         "Up to 2024, CMC Maritime Academy Chennai has successfully trained over 10,000 professionals through Maritime Courses that were approved by Directorate General of Shipping, the Govt of India.",
    //         "CMC Maritime Academy Chennai Management team includes a team of 20 professionals from the maritime industry.",
    //         "Over 1000 batches have been effectively completed.",
    //         "More than 20 marine courses offered by CMC Maritime Academy Chennai have been certified by the Directorate General of Shipping, Govt of India."
    //       ].map((text, index) => (
    //         <div key={index} className="flex gap-[5px] items-center justify-center w-[95%]">
    //           <Image src={MobHanker} alt="" className="max-h-[54px]" />
    //           <div
    //             className={`message w-[346px] ${index % 2 === 0 ? 'p-[10px]' : 'h-[173px]'} flex items-center justify-center rounded-[22px] border border-[#BABABA]`}
    //             data-aos="fade-up"
    //           >
    //             <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[95%] text-justify">
    //               {text}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <div className="wrapper flex flex-col items-center justify-center gap-[40px] ">
    //       <p className="text-[36px] font-[700] mb-[20px] text-[#672013] text-center">
    //         Highlights Of Our CMC
    //       </p>
    //       {[
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-left",
    //           text: "CMC Maritime Academy Chennai has been graded as A1 (Outstanding Institute).CMC Maritime Academy Chennai is certified by RINA for maintaining the Quality Management System in compliance with ISO 9001:2015 Standards.",
    //           direction: "left",
    //           img: RightArrow
    //         },
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-right",
    //           text: "CMC Maritime Academy Chennai is one of the most eminent Maritime Training Academy since the last 12 years and it is renowned for the standards of its students and facilities.",
    //           direction: "right",
    //           img: LeftArrow
    //         },
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-left",
    //           text: "Up to 2024, CMC Maritime Academy Chennai has successfully trained over 10,000 professionals through Maritime Courses that were approved by Directorate General of Shipping, the Govt of India.",
    //           direction: "left",
    //           img: RightArrow
    //         },
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-right",
    //           text: "CMC Maritime Academy Chennai Management team includes a team of 20 professionals from the maritime industry.",
    //           direction: "right",
    //           img: LeftArrow
    //         },
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-left",
    //           text: "Over 1000 batches have been effectively completed.",
    //           direction: "left",
    //           img: RightArrow
    //         },
    //         {
    //           alt: "Hanker Wheel",
    //           dataAos: "fade-up-right",
    //           text: "More than 20 marine courses offered by CMC Maritime Academy Chennai have been certified by the Directorate General of Shipping, Govt of India.",
    //           direction: "right",
    //           img: LeftArrow
    //         }
    //       ].map(({ alt, dataAos, text, direction, img }, index) => (
    //         <div key={index} className="relative min-h-[150px]">
    //           <div className="circleWrapper flex gap-[0px] items-center">
    //             <div id="circle1" className="circle"></div>
    //             <Image src={HankerWheel} alt={alt} />
    //             <Image src={img} alt="" className={`ml-${direction === "left" ? '[-10px]' : '10px'}`} />
    //             <div
    //               className={`message absolute ${direction === "left" ? 'left-[100%]' : 'right-[100%]'} w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]`}
    //               data-aos={dataAos}
    //             >
    //               <p className="text-[15px] font-[600] lg:min-w-[321px] text-[#727272] leading-[25px] max-w-[321px] text-justify">
    //                 {text}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //       <div className="relative min-h-[150px]">
    //         <div id="timeline3" ref={timeline3} className="timeline" />
    //         <div id="circle3" ref={circle3} className="circle"></div>
    //         <div className="circleWrapper flex gap-[0px] items-center">
    //           <div id="circle1" className="circle"></div>
    //           <div
    //             className="message absolute right-[100%] w-[346px] h-[173px] flex items-center justify-center rounded-[22px] border border-[#BABABA]"
    //             data-aos="fade-up-right"
    //           >
    //             <p className="text-[15px] font-[600] text-[#727272] leading-[25px] lg:min-w-[321px] max-w-[321px] text-justify">
    //               <span className="text-[15px] font-[700] text-[#FF6E00] mr-[5px]">
    //                 More than 20 marine courses
    //               </span>
    //               offered by CMC Maritime Academy Chennai have been certified by
    //               the Directorate General of Shipping, Govt of India.
    //             </p>
    //           </div>
    //           <Image src={LeftArrow} alt="" className="mr-[-10px]" />
    //           <Image src={HankerWheel} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>

    <div></div>
  );
};

export default Timeline;
