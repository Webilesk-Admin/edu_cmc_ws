"use client";
import MainFile from "@/app/home/index";
import { CourseCard } from "@/component";
import LoginForm from "./login-form/page";
import { NextUIProvider } from "@nextui-org/system";
export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        {/* <MainFile /> */}
        <LoginForm />
      </div>
    </NextUIProvider>
  );
}
