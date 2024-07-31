"use client";
import { useState } from "react";

import MainFile from "@/app/home/index";
import { NextUIProvider } from "@nextui-org/system";
import Modal from "@/app/signup-form/page";
import About from "./about/page";
import Signup from "./signup-form/page";
export default function Home() {
  return (
    <div className="">
      <MainFile />
    </div>
  );
}
