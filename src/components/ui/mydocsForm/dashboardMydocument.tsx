"use client";

var IndosRegex = /^\d{2}[a-zA-Z]{2}\d{4}$/;
var passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/;
import { Select, ConfigProvider } from "antd";
import { useState } from "react";
import { Modal, Image, Upload, DatePicker } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import Images from "next/image";
import Icom from "@/asset/cmc_dashboard_upload_icon.png";
import UplFile from "@/asset/cmc_dashboard_upload_file_icon.png";
import Trash from "@/asset/cmc_dashboard_delete_upload_icon.png";
import "./style.css";
import ModalCloseIcon from "@/asset/cmc_course_item_modal_close.png";
import ImgCrop from "antd-img-crop";
import Siren from "@/asset/cmc_dashboard_mydocument_alert_medexp.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import moment from "moment";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { message } from "antd";
import { log } from "console";
// type FileType = Parameters<UploadProps["beforeUpload"]>[0];

// const getBase64 = (file: FileType): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
const formScehma = z.object({
  indos_no:z.string().min(1, { message: "Passport Number is required" }),
  Passportno: z.string().min(1, { message: "Passport Number is required" }),
  med_date: z.string().optional(), // Adjust based on actual validation needs
  coc_no: z.string().min(1, { message: "COC Number is required" }),
  coc_grade: z.string().optional(),
  cdc_no: z.string().min(1, { message: "CDC Number is required" }),
  year: z.string().optional(),
  month: z.string().optional(),
  date: z.string().optional(),
  expDate: z.string().optional(),
});

const DashboardMydocument = () => {
  // ...
  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      indos_no:"",
      Passportno: "",
      med_date: "",
      coc_no: "",
      coc_grade: "",
      cdc_no: "",
      year: "",
      month: "",
      date: "",
     
      expDate: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formScehma>) => {
    console.log(values);
  };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [MedicalFile, setMedicalFile] = useState<UploadFile[]>([]);
  const [cocFile, setCocFile] = useState<UploadFile[]>([]);
  const [cdcFile, setCdcFile] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModal] = useState<boolean>(false);

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage("");
    if (!file.url && !file.preview) {
      // file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setIsModal(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const MedicalChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setMedicalFile(newFileList);
  };
  const cocChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setCocFile(newFileList);
  };
  const cdcChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setCdcFile(newFileList);
  };
  const handleCancel = () => {
    setPreviewOpen(false);
    setPreviewImage("");
    setIsModal(false);
  };

  const handleManualPreview = () => {
    if (fileList.length > 0) {
      handlePreview(fileList[0]);
    } else {
      message.error("Nothig is Upload");
    }
  };
  const handlePassPreview = () => {
    if (MedicalFile.length > 0) {
      handlePreview(MedicalFile[0]);
    } else {
      message.error("Nothig is Upload");
    }
  };
  const handleCocPreview = () => {
    if (cocFile.length > 0) {
      handlePreview(cocFile[0]);
    } else {
      message.error("Nothig is Upload");
    }
  };
  const handleCdcPreview = () => {
    if (cdcFile.length > 0) {
      handlePreview(cdcFile[0]);
    } else {
      message.error("Nothig is Upload");
    }
  };
  // console.log(MedicalFile);
  var result="";
  if (fileList.length >= 1) {
    var value = fileList[0];
    result = value.name || (value.name as string);
    var url = value.url || (value.preview as string);
  }
  if (MedicalFile.length >= 1) {
    var medvalue = MedicalFile[0];
    var medresult = medvalue.name || (medvalue.name as string);
    var url = medvalue.url || (medvalue.preview as string);
  }
  if (cocFile.length >= 1) {
    var cocvalue = cocFile[0];
    var cocresult = cocvalue.name || (cocvalue.name as string);
    // var url = cocvalue.url || (cocvalue.preview as string);
  }
  if (cdcFile.length >= 1) {
    var cdcvalue = cdcFile[0];
    var cdcresult = cdcvalue.name || (cdcvalue.name as string);
    // var url = cocvalue.url || (cocvalue.preview as string);
  }
  const clearFile = () => {
    setFileList([]);
    setPreviewImage("");
    message.success("File cleared.");
  };
  const clearMedFile = () => {
    setMedicalFile([]);
    setPreviewImage("");
    message.success("File cleared.");
  };
  const clearCdcFile = () => {
    setCdcFile([]);
    setPreviewImage("");
    message.success("File cleared.");
  };
  const clearCocFile = () => {
    setCocFile([]);
    setPreviewImage("");
    message.success("File cleared.");
  };
  let dateFormat = "DD-MM-YYYY";
  return (
    <div className="flex items-center justify-start flex-col gap-[0px] w-[100%]">
      <Form
       
        {...form}
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[40px] w-[100%]"
        >
          <div className="  flex-col gap-[10px] md:gap-[20px] sm:flex-row sm:items-center flex ">
            <p className="text-[20px] font-[400] text-[#F9AB70]">INDoS No</p>
            <FormField
              control={form.control}
              name="indos_no"
              render={({ field }) => (
                <FormItem className="relative ">
                  <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                  <FormControl className="relative">
                    <Input
                      placeholder="Indos No"
                      {...field}
                      readOnly
                      type="text"
                      maxLength={20}
                      className="w-[192px]  h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        margin: "0px",
                      }}
                    />
                  </FormControl>
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-col gap-[10px] md:gap-[20px] flex justify-between min-[1088px]:flex-row w-[100%] mydoc-file">
            <div>
              <p className="text-[20px] font-[400] text-[#F9AB70]">
                Passport No
              </p>

              <FormField
                control={form.control}
                name="Passportno"
                render={({ field }) => (
                  <FormItem className="relative ">
                    <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                    <FormControl className="relative">
                      <Input
                        placeholder="Passport No"
                        {...field}
                        type="text"
                        maxLength={20}
                        className="max-w-[403px] w-[90%] lg:max-w-[403px] lg:w-[90%] xl:min-w-[403px]   h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          margin: "0px",
                        }}
                      />
                    </FormControl>
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-row ">
              <div className=" flex flex-col items-center justify-center">
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    onChange={handleChange}
                    showUploadList={false}
                    beforeUpload={(file) => {
                      console.log("File size in bytes:", file.size);
                      if (file.size < 2 * 1024 * 1024) {
                        console.log("File size is valid (below 2 MB).");
                        return true;
                      } else {
                        console.log("File size exceeds the limit of 2 MB.");
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
              <span className="hidden sm:block w-[3px] h-[35px] border-r border-dashed  border-[#7E7E7ED1]"></span>
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
                   File Size
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

              <Modal open={isModalOpen} centered footer={null}>
                <Image
                  alt="Preview"
                  style={{ width: "100%", height: "auto" }}
                  src={previewImage ? previewImage : ""}
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

          <div className="  flex-col gap-[10px] md:gap-[20px] flex justify-between min-[1088px]:flex-row w-[100%] mydoc-file">
            <div className="">
              <p className="text-[20px] font-[400] text-[#F9AB70]">
                Medical Fitness Expiry Date
              </p>

              <div className="flex flex-col gap-[20px] sm:flex-row sm:items-end">
                <FormField
                  control={form.control}
                  name="med_date"
                  render={({ field }) => (
                    <FormItem className="relative flex flex-col sm:gap-[20px] md:gap-[0px] sm:flex-row md:items-center max-w-[570px]">
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="date"
                          render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                              onChange={(date, dateString) => {
                                onChange(date ? dateString : ""); // Set the string format
                              }}
                              className="w-[244px] h-[37px] text-[20px] font-[500] text-[#672013] border border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                              onBlur={onBlur}
                              disabledDate={(current) =>
                                current && current > dayjs()
                              }
                              value={value ? moment(value, "DD-MM-YYYY") : null}
                              format={dateFormat}
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    </FormItem>
                  )}
                />

                <div className="flex items-end gap-[5px]">
                  <p className="text-[15px] font-[500] text-[#D32828]">
                    30 Days Left
                  </p>
                  <Images src={Siren} alt="Alert Icon" />
                </div>
              </div>
            </div>

            <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-row float-right ">
              <div className=" flex flex-col items-center justify-center">
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    onChange={MedicalChange}
                    showUploadList={false}
                    beforeUpload={(file) => {
                      console.log("File size in bytes:", file.size);
                      if (file.size < 2 * 1024 * 1024) {
                        console.log("File size is valid (below 2 MB).");
                        return true;
                      } else {
                        console.log("File size exceeds the limit of 2 MB.");
                        return false;
                      }
                    }}
                    maxCount={1}
                  >
                    {MedicalFile.length >= 1 ? (
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
              <span className="hidden sm:block w-[3px] h-[35px] border-r border-dashed  border-[#7E7E7ED1]"></span>
              <div className="flex gap-[10px] items-start">
                <Images
                  src={UplFile}
                  alt=""
                  className=" min-w-[20px] max-w-[20px]"
                />
                <div className="">
                  <p className="text-[500] text-[14px] max-w-[200px]">
                   No File Selected
                  </p>
                  <p className="text-[400] text-[12px] max-w-[200px] text-[#989692]">
                    File Size
                  </p>
                  <p
                    onClick={handlePassPreview}
                    className="cursor-pointer text-[14px] font-[500] text-[#FF6E00]"
                  >
                    Click to view
                  </p>
                </div>
                <Images
                  src={Trash}
                  alt=""
                  className="ml-[15px] min-w-[20px] max-w-[20px]"
                  onClick={clearMedFile}
                />
              </div>
            </div>
          </div>
          <div className="  flex-col gap-[10px] md:gap-[20px] flex justify-between min-[1088px]:flex-row w-[100%] mydoc-file">
            <div className="">
              <div className="flex gap-[20px] flex-col sm:flex-row sm:items-end">
                <div className="">
                  <p className="text-[20px] font-[400] text-[#F9AB70]">
                    COC No
                  </p>
                  <FormField
                    control={form.control}
                    name="coc_no"
                    render={({ field }) => (
                      <FormItem className="relative ">
                        <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                        <FormControl className="relative">
                          <Input
                            placeholder="COC No"
                            {...field}
                            type="text"
                            maxLength={20}
                            className="max-w-[227px] w-[90%] lg:max-w-[227px] lg:w-[90%] xl:min-w-[227px]   h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                            style={{
                              outline: "none",
                              boxShadow: "none",
                              margin: "0px",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <p className="text-[20px] font-[400] text-[#F9AB70]">
                    COC Grade
                  </p>
                  <FormField
                    control={form.control}
                    name="coc_grade"
                    render={({ field }) => (
                      <FormItem className="relative ">
                        <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                        <FormControl className="relative">
                          <Input
                            placeholder="COC Grade"
                            {...field}
                            type="text"
                            maxLength={20}
                            className="max-w-[143px] w-[90%] lg:max-w-[143px] lg:w-[90%] xl:min-w-[143px]   h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                            style={{
                              outline: "none",
                              boxShadow: "none",
                              margin: "0px",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-row float-right ">
              <div className=" flex flex-col items-center justify-center">
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    onChange={cocChange}
                    showUploadList={false}
                    beforeUpload={(file) => {
                      console.log("File size in bytes:", file.size);
                      if (file.size < 2 * 1024 * 1024) {
                        console.log("File size is valid (below 2 MB).");
                        return true;
                      } else {
                        console.log("File size exceeds the limit of 2 MB.");
                        return false;
                      }
                    }}
                    maxCount={1}
                  >
                    {cocFile.length >= 1 ? (
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
              <span className="hidden sm:block w-[3px] h-[35px] border-r border-dashed  border-[#7E7E7ED1]"></span>
              <div className="flex gap-[10px] items-start">
                <Images
                  src={UplFile}
                  alt=""
                  className=" min-w-[20px] max-w-[20px]"
                />
                <div className="">
                  <p className="text-[500] text-[14px] max-w-[200px]">
                    No File Selected
                  </p>
                  <p className="text-[400] text-[12px] max-w-[200px] text-[#989692]">
                    File Size
                  </p>
                  <p
                    onClick={handleCocPreview}
                    className="cursor-pointer text-[14px] font-[500] text-[#FF6E00]"
                  >
                    Click to view
                  </p>
                </div>
                <Images
                  src={Trash}
                  alt=""
                  className="ml-[15px] min-w-[20px] max-w-[20px]"
                  onClick={clearCocFile}
                />
              </div>
            </div>
          </div>
          <div className="flex-col gap-[10px] md:gap-[20px] flex justify-between min-[1088px]:flex-row w-[100%] mydoc-file">
            <div>
              <p className="text-[20px] font-[400] text-[#F9AB70]">CDC No</p>
              {/* <div className=" flex gap-[20px] min-[1088]:items-center gap-[10%] flex-col  min-[1088px]:justify-start min-[1088px]:flex-row w-[100%]"> */}
              <FormField
                control={form.control}
                name="cdc_no"
                render={({ field }) => (
                  <FormItem className="relative ">
                    <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                    <FormControl className="relative">
                      <Input
                        placeholder="CDC No"
                        {...field}
                        type="text"
                        maxLength={20}
                        className="max-w-[227px] w-[90%] lg:max-w-[227px] lg:w-[90%] xl:min-w-[227px]   h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          margin: "0px",
                        }}
                      />
                    </FormControl>
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    {/* <FormDescription>Nmae</FormDescription> */}
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-row ">
              <div className=" flex flex-col items-center justify-center">
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    // onPreview={handlePreview}
                    onChange={cdcChange}
                    showUploadList={false}
                    beforeUpload={(file) => {
                      console.log("File size in bytes:", file.size);
                      if (file.size < 2 * 1024 * 1024) {
                        console.log("File size is valid (below 2 MB).");
                        return true;
                      } else {
                        console.log("File size exceeds the limit of 2 MB.");
                        return false;
                      }
                    }}
                    maxCount={1}
                  >
                    {cdcFile.length >= 1 ? (
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
              <span className="hidden sm:block w-[3px] h-[35px] border-r border-dashed  border-[#7E7E7ED1]"></span>
              <div className="flex gap-[10px] items-start">
                <Images
                  src={UplFile}
                  alt=""
                  className=" min-w-[20px] max-w-[20px]"
                />
                <div className="">
                  <p className="text-[500] text-[14px] max-w-[200px]">
                    No File Selected
                  </p>
                  <p className="text-[400] text-[12px] max-w-[200px] text-[#989692]">
                   File Size
                  </p>
                  <p
                    onClick={handleCdcPreview}
                    className="cursor-pointer text-[14px] font-[500] text-[#FF6E00]"
                  >
                    Click to view
                  </p>
                </div>
                <Images
                  src={Trash}
                  alt=""
                  className="ml-[15px] min-w-[20px] max-w-[20px]"
                  onClick={clearCdcFile}
                />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[20px] font-[400] text-[#F9AB70] mb-[10px]">
              Sea Experience
            </p>
            <div className=" flex gap-[20px]">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute text-[#f9ab70] top-[-5px] bg-[#ffffff] rounded-[8px]  h-[23px] w-[45px] flex items-center justify-center z-[336] font-[400] text-[20px] font-light left-[25px]">
                      Years
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Years"
                        {...field}
                        type="text"
                        maxLength={9}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="max-w-[124px] w-[90%] lg:max-w-[124px] lg:w-[90%] xl:min-w-[124px]   h-[37px] text-[20px] font-[500] text-[#672013] border pl-[25px]  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}

                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute text-[#f9ab70] top-[-5px] bg-[#ffffff] rounded-[8px]  h-[23px] w-[45px] flex items-center justify-center z-[336] font-[400] text-[20px] font-light left-[25px]">
                      Months
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Month"
                        {...field}
                        type="text"
                        maxLength={9}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="max-w-[124px] w-[90%] lg:max-w-[124px] lg:w-[90%] xl:min-w-[124px]   h-[37px] text-[20px] font-[500] text-[#672013] pl-[25px] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}

                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expDate"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute text-[#f9ab70] top-[-5px] bg-[#ffffff] rounded-[8px]  h-[23px] w-[45px] flex items-center justify-center z-[336] font-[400] text-[20px] font-light left-[25px]">
                      Days
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Date"
                        {...field}
                        type="text"
                        maxLength={9}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="max-w-[124px] w-[90%] lg:max-w-[124px] lg:w-[90%] xl:min-w-[124px]   h-[37px] px-[25px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}

                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="w-[173px] h-[45px] rounded-[10px] bg-[#f9ab70] flex items-center justify-center text-[#ffffff] font-[700]"
            >
              Save
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default DashboardMydocument;
