"use client";

import { Header, DashboardComp } from "@/component";
import Badge from "../../../asset/cmc_dashboard_coursecerficate_badge.png";
import Cap from "../../../asset/cmc_dashboard_courescerficate_cap.png";
import { Select, ConfigProvider } from "antd";
import { useState } from "react";
import { Modal, Image, Upload, message } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import Images from "next/image";
import Icom from "@/asset/cmc_dashboard_upload_icon.png";
import UplFile from "@/asset/cmc_dashboard_upload_file_icon.png";
import Trash from "@/asset/cmc_dashboard_delete_upload_icon.png";
import "./style.css";
import ModalCloseIcon from "@/asset/cmc_course_item_modal_close.png";
import ImgCrop from "antd-img-crop";
import { $ } from "jquery";

type FileType = Parameters<UploadProps["beforeUpload"]>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const page = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModal] = useState<boolean>(false);

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage("");
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setIsModal(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleCancel = () => {
    setPreviewOpen(false);
    setPreviewImage("");
    setIsModal(false);
  };
  console.log(fileList);

  const handleManualPreview = () => {
    if (fileList.length > 0) {
      handlePreview(fileList[0]);
    } else {
      message.error("Nothig is Upload");
    }
  };
  if (fileList.length >= 1) {
    var value = fileList[0];
    var result = value.name || (value.name as string);
    var url = value.url || (value.preview as string);
  }
  const clearFile = () => {
    setFileList([]);
    setPreviewImage("");
    message.success("File cleared.");
  };
  return (
    <div>
      <Header UserType={"user"} ActiveLink={0} Color={""} />
      <div className="flex justify-center items-start w-full mt-[60px] md:mt-[110px] h-[80vh] h-full">
        <div className="w-full 2xl:w-[87%]  flex  relative">
          <div className="sticky top-[110px] z-10">
            <DashboardComp DashCount={6} />
          </div>

          <div className="overflow-y-scroll  w-[100%] h-[88vh] scroll-side">
            <div className="flex flex-col bg-transparent  gap-[20px] p-[20px] relative">
              <div className="flex justify-between ">
                <p className="text-[24px] font-[500] text-[#672013] mt-[20px]">
                  Course Certficate
                </p>
                <Images src={Cap} alt="" />
              </div>
              <div className="relative flex course-cer-main flex-col  min-[986px]:flex-row gap-[30px] min-[926px]:gap-[0px] min-[926px]:items-start mt-[20px] md:mt-[0px] items-center justify-between 2xl:w-[80%]">
                <div className="w-[310px] h-[448px] border-0.4 border-dark border-dashed  md:ml-[-22px] mt-[-10px] rounded-[5px] flex flex-col items-center justify-center gap-[25px] items-center justify-center p-[10px]">
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">PPF</p>
                    </div>
                    <p className="text-[16px] font-[500] text-[#12B28C]">
                      Uploaded
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">POFF</p>
                    </div>

                    <p className="text-[16px] font-[500] text-[#FF2700]">
                      Missing
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">CMRF</p>
                    </div>
                    <p className="text-[16px] font-[500] text-[#12B28C]">
                      Uploaded
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">CMRF</p>
                    </div>
                    <p className="text-[16px] font-[500] text-[#12B28C]">
                      Uploaded
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">ISOFR</p>
                    </div>
                    <p className="text-[16px] font-[500] text-[#FF2700]">
                      Missing
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-[90%]">
                    <div className=" flex items-center gap-[10px]">
                      <Images
                        src={Badge}
                        alt=""
                        className="max-w-[26px] max-h-[26px]"
                      />
                      <p className="text-[24px] font-[500]">KOMPRSK</p>
                    </div>
                    <p className="text-[16px] font-[500] text-[#12B28C]">
                      Uploaded
                    </p>
                  </div>
                </div>
                <div>
                  <ConfigProvider
                    theme={{
                      components: {
                        Select: {
                          optionSelectedBg: "#F9AB70",
                          optionSelectedColor: "#672013",
                          colorBorder: "none",
                          colorText: "#000",
                          fontSize: "20px",
                          paddingXS: 10,
                          optionPadding: "8px",
                          optionMargin: "20px",
                          borderRadius: 24,
                          optionSelectedFontWeight: "500",
                        },
                      },
                    }}
                  >
                    <Select
                      className="rounded-[24px]"
                      showSearch
                      style={{
                        width: "301px",
                        height: "48px",
                        //   border: "1px solid rgba(0, 0, 0, 0.16)",
                        background: "#F9AB70B0",
                        fontWeight: "500",
                        paddingLeft: "13px",
                        margin: "30px",
                      }}
                      placeholder="Choose Certficate"
                      optionFilterProp="label"
                      //   optionActiveBg="#F9AB70"
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      // onChange={(value) => {}}
                      options={[
                        {
                          value: "1",
                          label: "PPF",
                        },
                        {
                          value: "2",
                          label: "POFF",
                        },
                        {
                          value: "3",
                          label: "CMRF",
                        },
                        {
                          value: "4",
                          label: "CMRF",
                        },
                        {
                          value: "5",
                          label: "ISOFR",
                        },
                        {
                          value: "6",
                          label: "KOMP",
                        },
                      ]}
                    />
                  </ConfigProvider>
                  <div className="flex items-center justify-center mt-[170px] gap-[20px] flex-col course-cer-file min-[1103px]:flex-row ">
                    <div className=" flex flex-col items-center justify-center">
                      <ImgCrop rotationSlider>
                        <Upload
                          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          onPreview={handlePreview}
                          onChange={handleChange}
                          showUploadList={false}
                          beforeUpload={(file) => {
                            console.log("File size in bytes:", file.size);
                            if (file.size < 2 * 1024 * 1024) {
                              console.log("File size is valid (below 2 MB).");
                              return true;
                            } else {
                              console.log(
                                "File size exceeds the limit of 2 MB."
                              );
                              return false;
                            }
                          }}
                          maxCount={1}
                        >
                          {fileList.length >= 1 ? (
                            <div className="flex flex-col items-center justify-center ">
                              <button disabled>
                                <Images
                                  src={Icom}
                                  alt="Upload Icon"
                                  className="w-[44px]"
                                />
                              </button>
                              <button
                                disabled
                                className="text-[14px] text-[#12B28C] font-[500]"
                              >
                                File is uploaded
                              </button>
                            </div>
                          ) : (
                            <button>
                              <Images
                                src={Icom}
                                alt="Upload Icon"
                                className="w-[44px]"
                              />
                            </button>
                          )}
                        </Upload>
                      </ImgCrop>

                      <p className="text-[14px] font-[500] text-[#FF6E00]">
                        Click to Upload
                        <span className="text-[14px] font-[400] text-[#000] ml-[5px]">
                          or drag and drop
                        </span>
                      </p>
                      <span className="text-[14px] font-[400] text-[#000]">
                        (Max. File size: 2 MB)
                      </span>
                    </div>
                    <span className="w-[3px] h-[35px] border-r border-dashed  border-[#7E7E7ED1]"></span>
                    <div className="flex gap-[10px] items-start">
                      <Images
                        src={UplFile}
                        alt=""
                        className=" min-w-[20px] max-w-[20px]"
                      />
                      <div className="">
                        <p className="text-[500] text-[14px] max-w-[200px]">
                          {fileList.length >= 1 ? result : "No File Selected"}
                        </p>
                        <p className="text-[400] text-[12px] max-w-[200px] text-[#989692]">
                          {fileList.length >= 1
                            ? (value.size / 1024).toFixed(2) + "Kb"
                            : "File Size"}
                        </p>
                        <p
                          onClick={handleManualPreview}
                          className="cursor-pointer text-[14px] font-[500] text-[#FF6E00]"
                        >
                          Click to view
                        </p>
                      </div>
                      <Images
                        src={Trash}
                        alt=""
                        className="ml-[15px] min-w-[20px] max-w-[20px]"
                        onClick={clearFile}
                      />
                    </div>

                    <Modal
                      // onCancel={handleCancel}
                      open={isModalOpen}
                      centered
                      // onOk={() => setModal2Open(false)}
                      // onCancel={() => setModal2Open(false)}
                      footer={null}
                    >
                      <Image
                        alt="Preview"
                        style={{ width: "100%", height: "auto" }}
                        src={fileList.length >= 1 ? previewImage : ""}
                        preview={false}
                      />
                      <Images
                        src={ModalCloseIcon}
                        alt=""
                        className="absolute right-[10px] top-[10px] max-w-[32px]  lg:max-w-[52px] lg:max-h-[52px] cursor-pointer"
                        onClick={() => (setIsModal(false), handleCancel)}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[20px] md:mt-[0px]">
                <button
                  type="submit"
                  className="w-[173px] h-[45px] rounded-[10px] bg-[#f9ab70] flex items-center justify-center text-[#ffffff] font-[700]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
