import Link from "next/link";
import { Header } from "@/component";
import Image from "next/image";
import NotFoundImg from "@/asset/cmc_not_found_page_img.png";
import NotFoundIcon from "@/asset/cmc_not_found_page_icon.png";
export default function NotFound() {
  return (
    <div>
      {/* <Header UserType={"user"} /> */}
      <div className="mt-[60px] md:mt-[110px] flex flex-col gap-[20px] items-center justify-center">
        <p className="text-[40px] font-[600] mt-[30px] text-center">
          &ldquo;Sorry, there&apos;s a problem. Kindly reach out to our administrator.&ldquo;
        </p>
        <Image src={NotFoundImg} alt="" />
        <div className="flex gap-[10px] border-b-2  border-[#000]">
          <Image src={NotFoundIcon} alt="" />
          <Link href={"/"}>
            <p className="text-[24px] font-[500] text-[#F9AB70]">Go Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
