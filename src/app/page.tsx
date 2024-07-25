"use client";
import MainFile from "@/app/home/index";
import { NextUIProvider } from "@nextui-org/system";
import About from "./about/page";
import Signup from "./signup-form/page";
export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        {/* <MainFile /> */}
        <Signup />
      </div>
    </NextUIProvider>
  );
}
