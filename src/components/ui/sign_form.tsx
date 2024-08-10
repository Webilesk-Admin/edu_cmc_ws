"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SignupIcon from "../../asset/cmc_signup_date_icon.png";
import PasswordEye from "../../asset/cmc_form_password_eye.png";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { message } from "antd";
import { useState } from "react";
import $ from "jquery";

// regex
var IndosRegex = /^\d{2}[a-zA-Z]{2}\d{4}$/;
var nameRegex = /^[a-zA-Z ]+$/;
var passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/;
var mobileRegex = /^[6-9]{1}[0-9]{9}$/;

const ProfileForm = () => {
  let [check, setCheck] = useState<string>("");
  let [showCpassword, setShowCpassword] = useState<boolean>(false);
  let [showPassword, setShowPassword] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  

  const showCpass = () => {
    setShowCpassword(!showCpassword);
  };
  const showPass = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (values: z.infer<typeof formScehma>) => {
    console.log(values);
  };
  // const checkboxed = (value) => {
  //   setCheck(value);
  // };
  const formScehma = z.object({
    name: z
      .string()
      .min(1, { message: "Enter Name" })
      .regex(nameRegex, { message: "Invalid Name" }),

    indosNumber: z
      .string()
      .min(1, { message: "Enter INDos Number" })
      .regex(IndosRegex, { message: "Invalid indosNumber format" }),
    email: z
      .string()
      .min(1, { message: "Enter email id" })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(1, { message: "Enter Password" })
      .regex(passwordRegex, { message: "Invalid Password" }),
    confirm_password: z
      .string()
      .min(1, { message: "Enter Confirm Password" })
      .regex(passwordRegex, { message: "Invalid Confirm Password" }),
    mobile_number: z
      .string()
      .min(1, { message: "Enter Mobile Number" })
      .regex(mobileRegex, { message: "Invalid Mobile Number" }),
    whats_number: z
      .string()
      .min(1, { message: "Enter WhatsApp Number" })
      .regex(mobileRegex, { message: "Invalid WhatsApp Number" }),
    date: z.string().nonempty("Date of Birth is required"),
  });

  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      name: "",
      indosNumber: "",
      email: "",
      date: "",
      mobile_number: "",
      whats_number: "",
      password: "",
      confirm_password: "",
    },
  });
  return (
    <div className="flex items-center justify-center flex-col gap-[0px] w-[100%]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[35px] md:items-center w-[90%]"
        >
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[20px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[234px] h-[61px]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] w-[44px] h-[17px] rounded-[8px] flex items-center justify-center py-[2px] px-[8px] z-[336] text-[12px] font-light left-[18px]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      type="text"
                      maxLength={20}
                      className=" w-[100%]  md:w-[234px] focus:ring-0 uppercase lg:min-w-[234px] min-h-[48px] rounded-[20px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  </FormControl>
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="indosNumber"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[234px]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[88px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    INDoS Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="INDoS Number"
                      {...field}
                      type="text"
                      maxLength={8}
                      className="w-[100%] md:w-[234px] focus:ring-0 uppercase lg:min-w-[234px] min-h-[48px] rounded-[20px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  </FormControl>
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#D32828] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[20px] md:ml-[10px]">
            <RadioGroup.Root
              className="flex  gap-2.5 ml-[10px] w-[234px] "
              // onValueChange={checkboxed}
            >
              <div className="flex items-center">
                <RadioGroup.Item
                  className=" w-[25px] h-[25px] rounded-full  border border-[#F9AB70] hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-[#F9AB70] outline-none cursor-default"
                  value="Male"
                  id="r1"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#F9AB70]" />
                </RadioGroup.Item>
                <label
                  className="text-white text-[15px] leading-none pl-[15px]"
                  htmlFor="r1"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <RadioGroup.Item
                  className=" w-[25px] h-[25px] rounded-full  border border-[#F9AB70] focus:shadow-[0_0_0_2px] focus:shadow-[#F9AB70] outline-none cursor-default"
                  value="Female"
                  id="r2"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#F9AB70]" />
                </RadioGroup.Item>
                <label
                  className="text-white text-[15px] leading-none pl-[15px]"
                  htmlFor="r2"
                >
                  Female
                </label>
              </div>
            </RadioGroup.Root>
            <div className="">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="relative w-[90%] md:w-[100%]">
                    <FormLabel className="absolute text-[#fff] top-[-9px] bg-[#F9AB70] rounded-[8px]  w-[43px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                      Date
                    </FormLabel>
                    <FormControl>
                      {/* <Popover>
                        <PopoverTrigger asChild className="bg-[#fff]">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[100%] md:w-[199px] justify-start focus:ring-0 uppercase min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp",
                              !date && "text-muted-foreground"
                            )}
                          >
                            {date ? (
                              format(date, "d/M/y")
                            ) : (
                              <span className="text-[#949daa] text-[18px] font-[400] absolute top-[10px] left-[30px]">
                                date
                              </span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#fff]">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover> */}
                      <Input
                        placeholder="date"
                        {...field}
                        type="date"
                        maxLength={20}
                        className=" w-[100%]  md:w-[234px] focus:ring-0 uppercase lg:min-w-[234px] min-h-[48px] rounded-[20px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                        style={{ outline: "none", boxShadow: "none" }}
                      />
                    </FormControl>
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                    <Image
                      src={SignupIcon}
                      alt=""
                      className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[10px] right-[20px]"
                    />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex md:justify-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[100%]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[43px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    E-Mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      {...field}
                      type="text"
                      style={{ outline: "none", boxShadow: "none" }}
                      className="md:max-w-[399px]  w-[100%]  focus:ring-0 uppercase lg:min-w-[399px] min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                    />
                  </FormControl>
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[40px] gap-[40px] md:gap-[20px]">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[234px]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[65px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      maxLength={9}
                      style={{ outline: "none", boxShadow: "none" }}
                      className="w-[100%] md:w-[234px] focus:ring-0  min-h-[48px] password-input rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                    />
                  </FormControl>
                  <Image
                    src={PasswordEye}
                    alt=""
                    className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[10px] right-[20px] cursor-pointer"
                    onClick={showPass}
                  />

                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[234px]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[110px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      {...field}
                      type={showCpassword ? "text" : "password"}
                      maxLength={9}
                      style={{ outline: "none", boxShadow: "none" }}
                      id="c_pass"
                      className="w-[100%] md:w-[234px]  focus:ring-0  password-input min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                    />
                  </FormControl>
                  <Image
                    src={PasswordEye}
                    alt=""
                    className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[10px] right-[20px] cursor-pointer"
                    onClick={showCpass}
                  />
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-[40px]  md:gap-[20px]">
            <FormField
              control={form.control}
              name="mobile_number"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[234px]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[92px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    Mobile Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mobile Number"
                      {...field}
                      type="text"
                      maxLength={10}
                      style={{ outline: "none", boxShadow: "none" }}
                      className="  w-[100%] md:w-[234px] focus:ring-0 uppercase  min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                    />
                  </FormControl>
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whats_number"
              render={({ field }) => (
                <FormItem className="relative w-[90%] md:w-[100%]">
                  <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px]  w-[99px] h-[17px] flex items-center justify-center z-[336] text-[12px] font-light left-[18px]">
                    WhatApp Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What`s Number"
                      {...field}
                      type="text"
                      maxLength={10}
                      style={{ outline: "none", boxShadow: "none" }}
                      className="w-[100%] md:w-[234px]   focus:ring-0 uppercase min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                    />
                  </FormControl>
                  {/* <FormDescription>Nmae</FormDescription> */}
                  <FormMessage className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[-20px] left-[20px]" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-[0px]">
            <button
              type="submit"
              className="w-[184px] h-[52px] rounded-[50px] bg-[#F9AB70] flex items-center justify-center text-[20px] font-[400] mt-[20px]"
            >
              Login
            </button>
            <p className="text-[16px] mt-[15px] font-[400] text-[#fff]">
              Already have an account?
              <Link href="/login-form">
                <span className="font-[600] text-[#F9AB70] cursor-pointer ">
                  Log in
                </span>
              </Link>
            </p>
          </div>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
};
export default ProfileForm;
