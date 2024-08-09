"use client";
import React from "react";
import Image from "next/image";
import Trash from "@/asset/cmc_dashboard_delete_upload_icon.png";
import star from "@/asset/cmc_testimonial_review_star.png";
import ShowMoreText from "react-show-more-text";
const page = () => {
  const executeOnClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="flex flex-col gap-[10px] p-[20px] justify-between lg:min-w-[397px] w-[90%] max-w-[397px]  min-w-[360px] min-h-[120px] shadow-box rounded-[8px] border border-[##D9D9D9] my-[20px]">
        <div className="flex justify-between items-start gap-[20px]">
          <ShowMoreText
            /* Default options */
            lines={2}
            more="Read more"
            less="Read less"
            className=" cursor-pointer text-justify"
            anchorClass="show-more-less-clickable"
            onClick={executeOnClick}
            expanded={false}
            // width={280}  
            style={{ fontSize: "14px", fontweight: "400", maxWidth: "319px" }}
            truncatedEndingComponent={"..."}
          >
            <p className=" max-w-[319px] leading-[20px] text-[14px] font-[400]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur willing to be and hrm prince frightning Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eius quia quidem
              nisi! Facilis, perspiciatis debitis excepturi sit tempora dicta.
              Alias magnam est hic sunt culpa delectus perspiciatis, commodi
              voluptate tempora debitis a. Non delectus excepturi neque corporis
              architecto consequuntur quae nemo quibusdam! Excepturi, sequi
              blanditiis. Quia, suscipit. Corporis aut optio labore totam
              repellat quisquam beatae dolorum nam laboriosam, impedit
              perspiciatis pariatur nostrum ea culpa asperiores placeat, eum
              ducimus exercitationem molestiae hic repudiandae esse
              consequuntur. Facere perspiciatis corrupti itaque ex labore atque
              blanditiis, voluptas, autem, perferendis suscipit dolores. Magni
              enim aliquam, exercitationem vitae esse fuga quas reiciendis rem
              magnam ratione recusandae.
            </p>
          </ShowMoreText>
          <Image src={Trash} alt="" className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px]">
            <p className="text-[15px] font-[400] text-[#672013]">23/07/2024</p>
            <p className="text-[15px] font-[400] text-[#672013]">11:58</p>
          </div>
          <div className="flex gap-[2px]">
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
            <Image
              src={star}
              alt=""
              className="max-w-[21px] max-h-[21px] min-w-[21px] min-h-[21px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
