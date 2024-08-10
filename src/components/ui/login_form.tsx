"use client";

var IndosRegex = /^\d{2}[a-zA-Z]{2}\d{4}$/;
var passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9}$/;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
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

const formScehma = z.object({
  indosNumber: z
    .string()
    .min(1, { message: "Enter INDos Number" })
    .regex(IndosRegex, { message: "Invalid indosNumber format" }),
  password: z
    .string()
    .min(1, { message: "Enter Password" })
    .regex(passwordRegex, { message: "Invalid Password" }),
});

const ProfileForm = () => {
  // ...
  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      indosNumber: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formScehma>) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-[0px]">
      <Form
        
        {...form}
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[40px]"
        >
          <FormField
            control={form.control}
            name="indosNumber"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute text-[#fff] w-[88px] h-[17px] flex justify-center items-center top-[-6px] bg-[#F9AB70] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-light left-[25px]">
                  IndosNumber
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Indos No"
                    {...field}
                    type="text"
                    maxLength={8}
                    style={{ outline: "none", boxShadow: "none" }}
                    className="max-w-[333px] w-[330px] focus:ring-0 uppercase lg:min-w-[333px]   min-h-[48px] rounded-[50px] outline-none p-[10px] px-[20px] text-[#ffffff] text-[18px] font-[400] log-inp"
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}
                <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute text-[#fff] top-[-8px] bg-[#F9AB70] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-light left-[25px]">
                  password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Indos No"
                    {...field}
                    type="password"
                    maxLength={9}
                    style={{ outline: "none", boxShadow: "none" }}
                    className="max-w-[333px] w-[330px] lg:min-w-[333px]  min-h-[48px] rounded-[50px] focus:ring-offset-0 focus:ring-0   p-[10px] px-[20px]  text-[#ffffff] text-[18px] font-[400] log-inp"
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}
                <Link href="/forgetPass">
                  <p className="text-[14px] font-[400] text-[#fff] absolute right-[10px] bottom-[-30px] cursor-pointer">
                    Forget Password?
                  </p>
                </Link>
                <FormMessage className="absolute text-[#FF3131] font-[600] text-[16px] bottom-[-30px] left-[20px]" />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-center flex-col gap-[0px]">
            <button
              type="submit"
              className="w-[184px] h-[52px] rounded-[50px] bg-[#F9AB70] flex items-center justify-center text-[20px] font-[400] mt-[20px]"
            >
              Login
            </button>
            <p className="text-[16px] mt-[15px] font-[400] text-[#fff]">
              Don’t have an account?{" "}
              <Link href="/signup-form">
                <span className="font-[600] text-[#F9AB70] cursor-pointer ">
                  Sign in
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
