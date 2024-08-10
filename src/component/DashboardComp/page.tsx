"use client";
import React from "react";
import { Header } from "@/component";
import ImgCrop from "antd-img-crop";
import { Modal, Upload, message } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import Profile from "@/asset/cmc_dashboard_profile_img.png";
import EditIcon from "@/asset/cmc_dashboard_profile_edit_icon.png";
import ProfileIcon from "@/asset/cmc_dashboard_user_icon.png";
import CartIcon from "@/asset/cmc_dashboard_cart_icon.png";
import MyCourseIcon from "@/asset/cmc_dashboard_my_course_icon.png";
import PaymentIcon from "@/asset/cmc_dashboard_payment_icon.png";
import MyDocsIcon from "@/asset/cmc_dashboard_my_docs_icon.png";
import CourseCerIcon from "@/asset/cmc_dashboard_course_cerf_icon.png";
import TestimonialIcon from "@/asset/cmc_dashboard_testimonial_icon.png";
import LogoutIcon from "@/asset/cmc_dashboard_logout_icon.png";
import Image from "next/image";
import ModalIcon1 from "@/asset/cmc_modal_course_item_modal_doc_icon.png";
import UploadIcon from "@/asset/cmc_profile_modal_upload_icon.png";
import WebCamIcon from "@/asset/cmc_profile_modal_webcam_icon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useRef } from "react";
import ModalCloseIcon from "@/asset/cmc_course_item_modal_close.png";
import "./style.css";
import { Camera } from "react-camera-pro";
import { Manuale } from "next/font/google";
// type FileType = Parameters<UploadProps["beforeUpload"]>[0];

// const getBase64 = (file: FileType): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
// const Page = ({ DashCount }) => {
const Page = () => {
//   let dashCount: number = DashCount;
//   let path = useRouter();
//   let [modal2Open, setModal2Open] = useState<boolean>(false);
//   const openModal = () => {
//     setModal2Open(true);
//   };

//   // Camera
//   const camera = useRef(null);
//   const [image, setImage] = useState<string | null>(null);
//   const [cameraComp, setCameraComp] = useState<boolean>(false);
//   const takePhoto = () => {
//     setCameraComp(true);
//     // setImage(camera.current.takePhoto());
//   };

//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState<string>("");
//   const [fileList, setFileList] = useState<UploadFile[]>([]);
//   const [isModalOpen, setIsModal] = useState<boolean>(false);

//   const handlePreview = async (file: UploadFile) => {
//     setPreviewImage("");
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj as FileType);
//     }
//     setPreviewImage(file.url || (file.preview as string));
//     setPreviewOpen(true);
//     setIsModal(true);
//   };

//   const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const handleCancel = () => {
//     setPreviewOpen(false);
//     setPreviewImage("");
//     setIsModal(false);
//   };
//   console.log(fileList);

//   const handleManualPreview = () => {
//     if (fileList.length > 0) {
//       handlePreview(fileList[0]);
//     } else {
//       message.error("Nothig is Upload");
//     }
//   };

//   const clearFile = () => {
//     setFileList([]);
//     setPreviewImage("");
//     message.success("File cleared.");
//   };
  return (
    // <>
    //   <div className="hidden md:block">
    //     <div className="min-w-[337px] max-w-[337px] rounded-r-[30px] bg-[#F9AB70] min-h-[88vh]  flex flex-col items-center gap-[20px] pt-[20px] justify-start">
    //       <p className="text-[#672013] text-[20px] font-[700] ">
    //         Welcome{" "}
    //         <span className="text-[20px] font-[700] ">STEVE ROGERS!</span>
    //       </p>
    //       <div className="flex flex-col items-center justify-center gap-[5px]">
    //         <Image src={Profile} alt="" />
    //         <div
    //           className="flex gap-[10px] items-center cursor-pointer"
    //           onClick={openModal}
    //         >
    //           <Image src={EditIcon} alt="" />
    //           <p className="text-[16px] font-[500] text-[#ffffff]">
    //             Change Photo
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col ml-[0px] justify-center items-end w-[100%] ">
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 1 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/profile")}
    //         >
    //           <Image src={ProfileIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">Profile</p>
    //         </div>

    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 2 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/cart")}
    //         >
    //           <Image src={CartIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">Cart</p>
    //         </div>
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 3 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/mycourse")}
    //         >
    //           <Image src={MyCourseIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">
    //             My Courses
    //           </p>
    //         </div>
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 4 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/payment")}
    //         >
    //           <Image src={PaymentIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">Payments </p>
    //         </div>
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 5 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/myDocuments")}
    //         >
    //           <Image src={MyDocsIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">
    //             My Documents
    //           </p>
    //         </div>
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer ${
    //             dashCount == 6 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/courseCertficate")}
    //         >
    //           <Image src={CourseCerIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">
    //             {" "}
    //             Course Certificate
    //           </p>
    //         </div>
    //         <div
    //           className={`h-[67px] pl-[20px] w-[310px] flex items-center  justify-start gap-[10px] cursor-pointer  ${
    //             dashCount == 7 ? "bg-[#ffffff] rounded-l-[30px] " : ""
    //           }`}
    //           onClick={() => path.push("/dashboard/testimonial-up")}
    //         >
    //           <Image src={TestimonialIcon} alt="" />
    //           <p className="text-[20px] font-[500] text-[#672013]">
    //             Testimonial
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex items-center  justify-center gap-[10px] mb-[20px] cursor-pointer">
    //         <Image src={LogoutIcon} alt="" />
    //         <p className="text-[20px] font-[500] text-[#FF2700]">Logout</p>
    //       </div>
    //     </div>
    //     <Modal
    //       className="max-w-[1127px] flex items-center min-w-[90%]  justify-center xl:min-w-[1127px] profile-modal"
    //       centered
    //       open={modal2Open}
    //       // onOk={() => setModal2Open(false)}
    //       // onCancel={() => setModal2Open(false)}
    //       footer={null}
    //     >
    //       <div className="flex flex-col itmes-start gap-[30px]">
    //         <div className="flex gap-[20px]">
    //           <ImgCrop rotationSlider>
    //             <Upload
    //               action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    //               onPreview={handlePreview}
    //               onChange={handleChange}
    //               showUploadList={false}
    //               beforeUpload={(file) => {
    //                 console.log("File size in bytes:", file.size);
    //                 if (file.size < 2 * 1024 * 1024) {
    //                   console.log("File size is valid (below 2 MB).");
    //                   return true;
    //                 } else {
    //                   console.log("File size exceeds the limit of 2 MB.");
    //                   return false;
    //                 }
    //               }}
    //               maxCount={1}
    //             >
    //               {fileList.length >= 1 ? (
    //                 <div className="flex flex-col items-center justify-center ">
    //                   <button disabled>
    //                     <Image src={UploadIcon} alt="" />
    //                   </button>
    //                   <button
    //                     disabled
    //                     className="text-[14px] text-[#12B28C] font-[500]"
    //                   ></button>
    //                 </div>
    //               ) : (
    //                 <button>
    //                   <Image src={UploadIcon} alt="" />
    //                 </button>
    //               )}
    //             </Upload>
    //           </ImgCrop>

    //           <p className="text-[24px] font-[400] text-[#FD6D00]">
    //             Upload from Device
    //           </p>
    //         </div>
    //         <div className="flex gap-[20px] cursor-pointer" onClick={takePhoto}>
    //           <Image src={WebCamIcon} alt="" />
    //           <p className="text-[24px] font-[400] text-[#FD6D00]">
    //             Take a Photo
    //           </p>
    //         </div>
    //       </div>
    //       <div className=" flex gap-[20px]">
    //         <button
    //           className="w-[173px] h-[45px] text-[20px] font-[700] text-[#F9AB70] rounded-[10px] border-0.4  border-[#00000033]"
    //           onClick={handleManualPreview}
    //         >
    //           Preview
    //         </button>
    //         <button className="w-[173px] h-[45px] text-[20px] font-[700] text-[#ffffff] rounded-[10px] bg-[#f9ab70]">
    //           Save
    //         </button>
    //       </div>
    //       <Image
    //         src={ModalCloseIcon}
    //         alt=""
    //         className="absolute right-[10px] top-[10px] max-w-[32px]  lg:max-w-[52px] lg:max-h-[52px] cursor-pointer"
    //         onClick={() => setModal2Open(false)}
    //       />
    //       <div>
    //         {cameraComp ? (
    //           <Camera
    //             ref={camera}
    //             errorMessages={{
    //               noCameraAccessible:
    //                 "please Check the Device camera is not found",
    //             }}
    //             facingMode="user"
    //           />
    //         ) : (
    //           ""
    //         )}

    //         {/* <img src={image} alt="Taken photo" /> */}
    //       </div>
    //     </Modal>
    //     <Modal
    //       // onCancel={handleCancel}
    //       open={isModalOpen}
    //       centered
    //       // onOk={() => setModal2Open(false)}
    //       // onCancel={() => setModal2Open(false)}
    //       footer={null}
    //     >
    //       <Image
    //         alt="Preview"
    //         style={{ width: "100%", height: "auto" }}
    //         src={fileList.length >= 1 ? previewImage : ""}
    //         width={200}
    //         height={200}
    //       />
    //       <Image
    //         src={ModalCloseIcon}
    //         alt=""
    //         className="absolute right-[10px] top-[10px] max-w-[32px]  lg:max-w-[52px] lg:max-h-[52px] cursor-pointer"
    //         onClick={() => (setIsModal(false), handleCancel)}
    //       />
    //     </Modal>
    //   </div>
    // </>

    <div></div>
  );
};

export default Page;
