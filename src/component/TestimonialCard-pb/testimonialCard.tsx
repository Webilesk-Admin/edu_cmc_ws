import React from "react";
import Image from "next/image";
import profile from "../../asset/cmc_testimonial_profile.png";
import Star from "../../asset/cmc_testimonial_review_star.png";
import BlurStar from "../../asset/review_blur_star.png";

const Testimonial: React.FC = () => {
  return (
    <div className="max-w-[790px] min-h-[400px] w-[90%] md:h-[310px] py-[20px] flex flex-col md:flex-row gap-[10px] items-center md:p-[20px] justify-center shadow-box my-[20px] rounded-[8px] border border-[#D9D9D9] xl:my-[30px]">
      <div className="h-[100%] flex justify-center items-center md:items-start md:justify-start">
        <Image src={profile} alt="Profile of William Jordy" className="mt-[10px]" />
      </div>
      <div className="md:p-[20px] flex flex-col justify-center items-center md:items-start w-[90%]">
        <p className="text-[32px] font-[600] text-[#672013]">William Jordy</p>
        <p className="text-[20px] font-[400] text-[#7E7E7E] md:max-w-[560px] max-w-[90%] leading-[29px] mt-[10px]">
          CMC Maritime Academy in Chennai is not just an educational
          institution; it&apos;s a launchpad for future maritime leaders. With its
          world-class facilities, expert faculty, comprehensive curriculum,
          and industry partnerships, it continues to set the standard for
          maritime education in India and beyond.
        </p>
        <div className="flex justify-between items-end mt-[15px] w-[100%]">
          <p className="text-[20px] font-[400] text-[#672013]">23/07/2024</p>
          <div className="flex gap-[4px]">
            <Image src={Star} alt="Star rating" />
            <Image src={Star} alt="Star rating" />
            <Image src={Star} alt="Star rating" />
            <Image src={Star} alt="Star rating" />
            <Image src={BlurStar} className="object-contain" alt="Blurred star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
