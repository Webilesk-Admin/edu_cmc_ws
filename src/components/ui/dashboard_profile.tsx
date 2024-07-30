"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import SignupIcon from "../../asset/cmc_signup_date_icon.png";
import PasswordEye from "../../asset/cmc_form_password_eye.png";
import Image from "next/image";
import { CaretDownOutlined } from "@ant-design/icons";
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
import { Select, ConfigProvider } from "antd";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { message, DatePicker } from "antd";
import { useState } from "react";
import $ from "jquery";
import { Dropdown } from "react-day-picker";

// regex
var IndosRegex = /^\d{2}[a-zA-Z]{2}\d{4}$/;
var nameRegex = /^[a-zA-Z ]+$/;
var passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/;
var mobileRegex = /^[6-9]{1}[0-9]{9}$/;

const ProfileForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectVal, setSelectVal] = useState<string>("");

  const selected = (value) => {
    console.log(value);
    setSelectVal(value);
  };

  const formScehma = z.object({
    name: z
      .string()
      .min(1, { message: "Enter Name" })
      .regex(nameRegex, { message: "Invalid Name" }),

    email: z
      .string()
      .min(1, { message: "Enter email id" })
      .email(" Enter valid email."),

    mobile_number: z
      .string()
      .min(1, { message: "Enter Mobile Number" })
      .regex(mobileRegex, { message: "Invalid Mobile Number" }),
    whats_number: z
      .string()
      .min(1, { message: "Enter WhatsApp Number" })
      .regex(mobileRegex, { message: "Invalid WhatsApp Number" }),
    date: z
      .string()
      .nonempty("Date of Birth is required")
      .refine((value) => !isNaN(Date.parse(value)), {
        message: "Please select a valid date",
      }),
    address_1: z.string().min(1, { message: "Enter the Address" }),
    area: z.string().min(1, { message: "Enter the Area" }),
    city: z.string().min(1, { message: "Enter the City" }),
    state: z.string().nonempty({ message: "Please select a value" }),
    country: z.string().nonempty({ message: "Please select a value" }),
  });

  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      mobile_number: "",
      whats_number: "",
      area: "",
      city: "",
      state: "",
      country: "",
      address_1: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formScehma>) => {
    console.log(values);
  };
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" flex flex-col  gap-[30px] md:gap-[40px] ">
            <div className="max-w-[700px]  flex-col gap-[10px] md:gap-[20px] sm:flex-row flex">
              <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                Name
              </p>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative ">
                    <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]"></FormLabel>
                    <FormControl className="relative">
                      <Input
                        placeholder="Name"
                        {...field}
                        type="text"
                        maxLength={20}
                        className=" md:w-[403px] max-w-[300px] lg:min-w-[403px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
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
            <div className="max-w-[700px]  flex-col gap-[10px] md:gap-[20px] sm:flex-row flex">
              <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                Email
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative  ">
                    <FormControl>
                      <Input
                        placeholder="email"
                        {...field}
                        type="text"
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          margin: "0px",
                        }}
                        className="md:w-[403px] max-w-[300px] lg:min-w-[403px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-[20px] flex-wrap flex-col md:flex-row">
              <div className="max-w-[700px]  flex-col gap-[10px] md:gap-[0px] sm:flex-row flex">
                <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                  Date
                </p>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="relative flex flex-col sm:gap-[20px]  md:gap-[0px] sm:flex-row md:items-center max-w-[570px] ">
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="date"
                          render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                              onChange={(date, dateString) => {
                                onChange(dateString); // Set the string format
                              }}
                              className="w-[244px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                              onBlur={onBlur}
                              value={value ? moment(value) : null} // Use moment for controlled component
                              format="DD-MM-YYYY" // Format to display in the picker
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-[10px] sm:gap-[20px]  md:gap-[0px] sm:flex-row md:items-center max-w-[570px] ">
                    <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[50px]">
                      Age
                    </FormLabel>
                    <Input
                      placeholder="Age"
                      {...field}
                      type="text"
                      maxLength={10}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        margin: "0px",
                      }}
                      className="w-[75px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                    />
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-[700px]  flex-col gap-[10px] md:gap-[0px] sm:flex-row flex">
              <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                Mobile Number
              </p>
              <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-[10px] sm:gap-[20px]  md:gap-[0px] sm:flex-row max-w-[570px] ">
                    {/* <FormLabel className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                      Mobile Number
                    </FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Mobile Number"
                        {...field}
                        type="text"
                        maxLength={10}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          margin: "0px",
                        }}
                        className="w-[244px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px] "
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-[700px]  flex-col gap-[10px] md:gap-[0px] sm:flex-row flex">
              <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px]">
                Mobile Number
              </p>
              <FormField
                control={form.control}
                name="whats_number"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-[10px] sm:gap-[20px]  md:gap-[0px] sm:flex-row max-w-[570px]  ">
                    <FormControl>
                      <Input
                        placeholder="What`s Number"
                        {...field}
                        type="text"
                        maxLength={10}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          margin: "0px",
                        }}
                        className="w-[244px] h-[37px] text-[20px] font-[500] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]  "
                      />
                    </FormControl>
                    {/* <FormDescription>Nmae</FormDescription> */}
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px] " />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex justify-between flex-col md:flex-row  ">
              <p className="text-[20px] font-[400] text-[#F9AB70] w-[300px] lg:min-w-[300px] ">
                Address
              </p>
              <div className="flex mt-[10px] md:mt-[0px] md:justify-end lg:justify-start flex-wrap  gap-[30px] md:gap-[30px] ">
                <FormField
                  control={form.control}
                  name="address_1"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[88px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        Address Line 1
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address 1"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      {/* <FormDescription>Nmae</FormDescription> */}
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_2"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[95px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        Address Line 2
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address 2"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      {/* <FormDescription>Nmae</FormDescription> */}
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] right-[20px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address_3"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[95px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        Address Line 3
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address 3"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      {/* <FormDescription>Nmae</FormDescription> */}
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[30px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        Area
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Area"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      {/* <FormDescription>Nmae</FormDescription> */}
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="relative ">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[30px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        City
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="City"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      {/* <FormDescription>Nmae</FormDescription> */}
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-[0px] relative md:mt-[-20px]">
              {/* <div className="w-[300px] lg:min-w-[300px]"> */}
              <p className="text-[20px] hidden md:block select-none font-[400] text-[#fff] w-[300px] lg:min-w-[300px] ">
                Address
              </p>
              {/* </div> */}
              <div className="flex flex-wrap md:justify-end lg:justify-start gap-[20px]">
                <div className="mt-[10px] relative">
                  <p className="absolute text-[#f9ab70] bg-[#ffffff] w-[30px] h-[20px] flex justify-center items-center top-[-10px]   z-[336] text-[14px] font-[400] left-[25px]">
                    State
                  </p>
                  <FormField
                    control={form.control}
                    name="state" // Ensure this matches the name in your schema
                    render={({ field }) => (
                      <FormItem className="relative">
                        <ConfigProvider
                          theme={{
                            components: {
                              Select: {
                                optionSelectedBg: "#F9AB70",
                                optionSelectedColor: "#672013",
                                colorBorder: "none",
                                colorText: "#672013",
                                fontSize: "20px",
                                paddingXS: 10,
                                optionPadding: "8px",
                                borderRadius: 12,
                                optionSelectedFontWeight: "500",
                              },
                            },
                          }}
                        >
                          <Select
                            className="rounded-[12px]"
                            showSearch
                            style={{
                              width: "244px",
                              height: "37px",
                              border: "1px solid rgba(0, 0, 0, 0.16)",
                              fontWeight: "500",
                              paddingLeft: "13px",
                            }}
                            placeholder="Select the Search"
                            optionFilterProp="label"
                            //   optionActiveBg="#F9AB70"
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? "")
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? "").toLowerCase()
                                )
                            }
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                            options={[
                              {
                                value: "1",
                                label: "TAMIL NADU",
                              },
                              {
                                value: "2",
                                label: "KARNATAKA",
                              },
                              {
                                value: "3",
                                label: "KERALA",
                              },
                              {
                                value: "4",
                                label: "ANDHRA PRADESH",
                              },
                              {
                                value: "5",
                                label: "MUMBAI",
                              },
                              {
                                value: "6",
                                label: "HARYANA",
                              },
                            ]}
                          />
                        </ConfigProvider>
                        <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-[10px] relative">
                  <p className="absolute text-[#f9ab70] bg-[#ffffff] w-[40px] h-[20px] flex justify-center items-center top-[-10px]   z-[336] text-[14px] font-[400] left-[25px]">
                    Country
                  </p>
                  <FormField
                    control={form.control}
                    name="country" // Ensure this matches the name in your schema
                    render={({ field }) => (
                      <FormItem className="relative">
                        <ConfigProvider
                          theme={{
                            components: {
                              Select: {
                                optionSelectedBg: "#F9AB70",
                                optionSelectedColor: "#672013",
                                colorBorder: "none",
                                colorText: "#672013",
                                fontSize: "20px",
                                paddingXS: 10,
                                optionPadding: "8px",
                                borderRadius: 12,
                                optionSelectedFontWeight: "500",
                              },
                            },
                          }}
                        >
                          <Select
                            className="rounded-[12px]"
                            showSearch
                            style={{
                              width: "244px",
                              height: "37px",
                              border: "1px solid rgba(0, 0, 0, 0.16)",
                              fontWeight: "500",
                              paddingLeft: "13px",
                            }}
                            placeholder="Select the Search"
                            optionFilterProp="label"
                            //   optionActiveBg="#F9AB70"
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? "")
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? "").toLowerCase()
                                )
                            }
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                            options={[
                              {
                                value: "1",
                                label: "INDIA",
                              },
                            ]}
                          />
                        </ConfigProvider>
                        <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[30px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        State
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="State"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                       <FormDescription>Nmae</FormDescription>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                    </FormItem>
                  )}
                />  */}
                {/* <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#f9ab70] bg-[#ffffff] w-[30px] h-[20px] flex justify-center items-center top-[-4px]   z-[336] text-[14px] font-[400] left-[25px]">
                        Country
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Country"
                          {...field}
                          type="text"
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-[244px] h-[37px] text-[20px] font-[500] pl-[25px] py-[6px] text-[#672013] border  border-[rgba(0, 0, 0, 0.16)] rounded-[12px]"
                        />
                      </FormControl>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                    </FormItem>
                  )}
                /> */}
              </div>
            </div>
            {/* <FormLabel className="absolute text-[#fff] w-[88px] h-[17px] flex justify-center items-center top-[-6px] bg-[#F9AB70] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-light left-[25px]"> */}
            <div className="flex items-center justify-center mt-[20px] md:mt-[0px]">
              <button
                type="submit"
                className="w-[173px] h-[45px] rounded-[10px] bg-[#f9ab70] flex items-center justify-center text-[#ffffff] font-[700]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ProfileForm;
