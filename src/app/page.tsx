"use client";
import { useState } from "react";

import MainFile from "@/app/home/index";
import { NextUIProvider } from "@nextui-org/system";
import Modal from "@/app/signup-form/page";
import About from "./about/page";
import Signup from "./signup-form/page";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <MainFile />
    </div>
  );
}
