import { Header, Footer } from "@/component";
import React from "react";
import Image from "next/image";
import BredArrow from "@/asset/bredcrumbs_arrow.png";
import contactAbs from "@/asset/cmc_contact_image.png";
import Link from "next/link";
import { Metadata } from "next";
import Contact_verify from "../../components/ui/contact_verify_form";

// Dynamically import WaterWave with client-side only rendering
// (assuming WaterWave component is used somewhere, which isn't shown here)

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact for CMC",
};

const Page = () => {
  return (
    <>
      <Header Color="#7E7E7E" ActiveLink={"5"} />
      <div className="min-h-[169px] bg-[#F9AB70] min-w-[100%] mt-[68px] md:mt-[80px] flex items-center justify-center p-[10px] md:p-[0px] course-ban md:rounded-[10px]">
        <div className="min-w-[80%]">
          <p className="text-[26px] max-w-[478px] text-[#fff] font-[600]">
            Contact with us
          </p>
          <p className="text-[18px] max-w-[438px] font-[600] mt-[10px]">
            &ldquo;Get in touch and let us know how we can help&ldquo;
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-[100%] pl-[10px] md:pl-[0px]">
        <div className="my-[5px] md:my-[10px] flex flex-wrap gap-[5px] w-[100%] md:max-w-[80%]">
          <Link href="/">
            <p className="md:text-[22px] font-[600] text-[#7E7E7E]">Home</p>
          </Link>
          <Image src={BredArrow} alt="Breadcrumb Arrow" height={25} width={25} />
          <Link href="/contact">
            <p className="md:text-[22px] font-[600] text-[#672013]">Contact</p>
          </Link>
        </div>
      </div>

      <div className="lg:min-h-[1114px] lg:max-h-[1114px] w-[100%] waterEffect flex justify-center py-[20px] items-center">
        <div className="flex items-center md:items-start gap-[50px] relative md:w-[90%] flex-col flex-wrap md:flex-row">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <p className="text-[32px] font-[700] text-[#555555]">Send Us a Message</p>
            <div className="max-w-[410px] min-w-[350px] sm:min-w-[410px] h-[595px] bg-[#fff] flex items-center justify-center rounded-[12px]">
              <Contact_verify />
            </div>
          </div>
          <p className="text-[48px] font-[900] w-[90%] text-[#672013] max-w-[360px] leading-[62px] md:mt-[60px]">
            We Are Happy To Listen To You
          </p>
          <Image
            src={contactAbs}
            alt="Contact Image"
            className="static min-[983px]:absolute bottom-[0px] right-[100px]"
            height={250}
            width={250}
          />
        </div>
      </div>
      <div className="my-[30px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3160900692183!2d80.25904942415522!3d13.07914272520829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660a6b35f905%3A0xe30829c6a8a29ba9!2sCMC%20Maritime%20Academy%20-%20Chennai!5e0!3m2!1sen!2sin!4v1721993776196!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
          title="Google Map"
        />
      </div>
      <Footer />
    </>
  );
};

export default Page;
