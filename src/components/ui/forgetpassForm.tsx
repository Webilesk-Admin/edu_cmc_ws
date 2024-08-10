"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button, Radio, ConfigProvider } from "antd";
import { InputOTP } from "antd-input-otp";
import Notfon from "@/asset/cmc_not_found_page_icon.png";
import Otpicon from "@/asset/cmc_forgetpassword_sendOTP_buuton_icon.png";
import { Input } from "@/components/ui/input";
import PasswordEye from "../../asset/cmc_form_password_eye.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Regex patterns
const IndosRegex = /^\d{2}[a-zA-Z]{2}\d{4}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/;

// Validation schemas
const formSchema = z.object({
  indosNumber: z
    .string()
    .min(1, { message: "Enter INDos Number" })
    .regex(IndosRegex, { message: "Invalid indosNumber format" }),
  sendOtp: z.string().nonempty({ message: "Please select a value" }),
});

const passwordSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Enter Password" })
    .regex(passwordRegex, { message: "Invalid Password" }),
  cpassword: z
    .string()
    .min(1, { message: "Enter C Password" })
    .regex(passwordRegex, { message: "Invalid Password" }),
});

const ForgetForm = () => {
  const [otpStatus, setOtpStatus] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  let [showCpassword, setShowCpassword] = useState<boolean>(false);
  let [showPassword, setShowPassword] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      indosNumber: "",
      sendOtp: "",
    },
  });

  const form1 = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      cpassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setOtpStatus(true);
  };

  const onSubmi = (values: z.infer<typeof passwordSchema>) => {
    console.log(values);
  };

  const handleFinish = () => {
    console.log(value);
    setOtpShow(true);
    setPasswordField(true);
  };
  const showPass = () => {
    setShowPassword(!showPassword);
  };
  const showCpass = () => {
    setShowCpassword(!showCpassword);
  };
  return (
    <div
      className={`max-w-[551px] w-[95%] lg:min-w-[551px] ${
        passwordField
          ? "h-[454px]"
          : otpStatus
          ? "h-[503px]"
          : "h-[568px] lg:min-h-[568px]"
      } flex flex-col items-center justify-center gap-[50px] m-[10px] lg:ml-[80px] glass-morph mt-[50px] md:mt-[0px]`}
    >
      {!passwordField && (
        <div className="flex items-center justify-center flex-col gap-[0px]">
          <p className="text-[30px] font-[400] text-[#fff] my-[20px]">
            Forgot Your Password?
          </p>
          {!otpStatus && (
            <Form
              
              {...form}
            >
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[40px] items-center"
              >
                <FormField
                  control={form.control}
                  name="indosNumber"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute text-[#fff] w-[118px] h-[17px] flex justify-center items-center top-[-3px] bg-[#F9AB70] rounded-[8px] py-[2px] px-[8px] z-[336] text-[14px] font-light left-[25px]">
                        Indos Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Indos No"
                          {...field}
                          type="text"
                          maxLength={8}
                          style={{ outline: "none", boxShadow: "none" }}
                          className="max-w-[333px] w-[330px] focus:ring-0 uppercase lg:min-w-[333px] min-h-[48px] rounded-[50px] outline-none p-[10px] px-[30px] text-[#ffffff] text-[18px] font-[400] log-inp"
                        />
                      </FormControl>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sendOtp"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <ConfigProvider
                          theme={{
                            components: {
                              Radio: {
                                colorBorder: "#ffffff",
                                colorBgContainer: "transparent",
                              },
                            },
                          }}
                        >
                          <style>{`
                          .ant-radio-wrapper { border-radius: 50%; color: White; font-size: 18px; font-weight: 500; }
                          .ant-radio-inner { border-radius: 50%; width: 20px !important; height: 20px !important; }
                          .ant-radio-checked .ant-radio-inner { background-color: #F9AB70 !important; border: none; }
                          .ant-radio-inner::after { border-radius: 50%; }
                          .ant-radio-checked .ant-radio-inner::after { background-color: #fff; }
                        `}</style>
                          <Radio.Group
                            style={{ width: "100%" }}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="flex flex-col gap-[30px]"
                          >
                            <Radio value="A">Mobile Number</Radio>
                            <Radio value="B">Email</Radio>
                          </Radio.Group>
                        </ConfigProvider>
                      </FormControl>
                      <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-center flex-col gap-[0px]">
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-[184px] h-[52px] rounded-[50px] bg-[#F9AB70] flex items-center justify-center text-[18px] text-[#ffffff] font-[600] mt-[20px]"
                    >
                      Send OTP
                    </button>
                    <Image
                      src={Otpicon}
                      alt=""
                      className="absolute right-[13px] bottom-[17px]"
                    />
                  </div>
                </div>
              </form>
            </Form>
          )}
          {otpStatus && (
            <div className="flex items-center justify-center flex-col gap-[0px]">
              <div className="relative">
                <label className="absolute text-[#fff] w-[118px] h-[17px] flex justify-center items-center top-[-3px] bg-[#F9AB70] rounded-[8px] py-[2px] px-[8px] z-[336] text-[14px] font-light left-[25px]">
                  Indos Number
                </label>
                <Input
                  readOnly
                  placeholder="Indos No"
                  type="text"
                  maxLength={8}
                  value="12DD3434"
                  style={{ outline: "none", boxShadow: "none" }}
                  className="max-w-[333px] w-[330px] focus:ring-0 uppercase lg:min-w-[333px] min-h-[48px] rounded-[50px] outline-none p-[10px] px-[30px] text-[#ffffff] text-[18px] font-[400] log-inp"
                />
              </div>
              <div className="m-[10px] flex flex-col items-center gap-[15px]">
                <p className="text-[14px] font-[500] text-[#ffffff] mt-[10px]">
                  OTP has been sent to
                  <span className="font-[600] text-[#F9AB70]"> 7709083141</span>
                </p>
                <p className="text-[16px] font-[700] text-[#ffffff]">
                  Enter OTP
                </p>
                <InputOTP
                  onChange={setValue}
                  value={value}
                  length={4}
                  placeholder="-"
                  inputType="numeric"
                />
                <button
                  className="w-[74px] h-[32px] rounded-[5px] bg-[#F9AB70] flex items-center justify-center text-[14px] text-[#ffffff] font-[400]"
                  onClick={handleFinish}
                >
                  Submit
                </button>
                <div>
                  <p className="text-[14px] font-[500] text-[#ffffff]">
                    Expires in <span className="text-[#12B28C]">01:00</span>
                  </p>
                </div>
                <div
                  className="border-b-2 border-[#000] flex gap-[5px] items-center cursor-pointer"
                  onClick={() => setOtpStatus(false)}
                >
                  <Image src={Notfon} alt="" />
                  <p className="text-[18px] font-[500] text-[#F9AB70]">Back</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {passwordField && (
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] font-[400] text-[#ffffff]">
              HELLO, STEVE ROGER!
            </p>
            <p className="text-[30px] font-[600] text-[#f9ab70]">
              INDoS No 22DS2111
            </p>
          </div>
          <Form
            
            {...form1}
          >
            <form
              onSubmit={form1.handleSubmit(onSubmi)}
              className="flex flex-col gap-[30px]"
            >
              <FormField
                control={form1.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px] w-[92px] h-[17px] flex justify-center items-center z-[336] text-[14px] font-light left-[25px]">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        maxLength={9}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="max-w-[333px] w-[330px] lg:min-w-[333px] min-h-[48px] rounded-[50px] focus:ring-offset-0 focus:ring-0 p-[10px] px-[28px] text-[#ffffff] text-[18px] font-[400] log-inp"
                      />
                    </FormControl>
                    <Image
                      src={PasswordEye}
                      alt=""
                      className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[10px] right-[20px] cursor-pointer"
                      onClick={showPass}
                    />
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] top-[-24px] right-[20px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form1.control}
                name="cpassword"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute text-[#fff] top-[-2px] bg-[#F9AB70] rounded-[8px] flex justify-center items-center w-[144px] h-[17px] z-[336] text-[14px] font-light left-[25px]">
                      Confirm New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm New Password"
                        {...field}
                        type={showCpassword ? "text" : "password"}
                        maxLength={9}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="max-w-[333px] w-[330px] lg:min-w-[333px] min-h-[48px] rounded-[50px] focus:ring-offset-0 focus:ring-0 p-[10px] px-[28px] text-[#ffffff] text-[18px] font-[400] log-inp"
                      />
                    </FormControl>
                    <Image
                      src={PasswordEye}
                      alt=""
                      className="absolute text-[#FF3131] font-[600] text-[12px] bottom-[10px] right-[20px] cursor-pointer"
                      onClick={showCpass}
                    />
                    <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] top-[-24px] right-[20px]" />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center flex-col gap-[0px]">
                <button
                  type="submit"
                  className="w-[293px] h-[52px] rounded-[50px] bg-[#F9AB70] flex items-center justify-center text-[18px] text-[#ffffff] font-[600] mt-[20px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ForgetForm;
