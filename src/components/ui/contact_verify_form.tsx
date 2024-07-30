"use client";
// Site_key for recapcha 6Lej3xgqAAAAAEb259LUdnM_icwCWriQ3cAdMi7R
// secret key 6Lej3xgqAAAAABWRLA6Sq7RZoZ_MfEjciwLDZTHG
var mobileRegex = /^[6-9]{1}[0-9]{9}$/;
var nameRegex = /^[a-zA-Z ]+$/;
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
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
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

const formScehma = z.object({
  name: z
    .string()
    .min(1, { message: "Enter Name" })
    .regex(nameRegex, { message: "Invalid name" }),
  mobile: z
    .string()
    .min(1, { message: "Enter Mobile No" })
    .regex(mobileRegex, { message: "Invalid Mobile No" }),
  email: z.string().min(1, { message: "Enter Email" }).email("Invalid Email"),
});

const ProfileForm = () => {
  // ...
  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      text_area: "",
    },
  });
  let [captacha, setCaptcha] = useState<string | null>();
  const onSubmit = (values: z.infer<typeof formScehma>, event: FormEvent) => {
    captacha ? console.log(values) : event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-[0px] w-[100%]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[5px] w-[90%] ml-[10px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className=" text-[#F9AB70] top-[-8px] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-[700] left-[25px]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Indos No"
                    {...field}
                    type="text"
                    style={{ outline: "none" }}
                    className="max-w-[255px] w-[255px]   min-h-[48px] rounded-[10px]  border  border-[rgba(103, 32, 19, 0.49)] shadow-contact  p-[10px]  shadow-contact  text-[18px] font-[400]"
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}
                <FormMessage className="absolute text-[#FF3131] font-[600] text-[14px] top-[-6px] left-[170px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className=" text-[#F9AB70] top-[-8px] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-[700] left-[25px]">
                  Mobile Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mobile number"
                    {...field}
                    type="text"
                    maxLength={10}
                    style={{ outline: "none" }}
                    className="max-w-[255px] w-[255px]  min-h-[48px] rounded-[10px]  border  border-[rgba(103, 32, 19, 0.49)] shadow-box  p-[10px]  shadow-contact  text-[18px] font-[400] "
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}

                <FormMessage className="absolute text-[#FF3131] font-[600] text-[14px]  top-[-6px] left-[140px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className=" text-[#F9AB70] top-[-8px] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-[700] left-[25px]">
                  E-Mail
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    type="text"
                    style={{ outline: "none" }}
                    className="max-w-[255px] w-[255px]  min-h-[48px] rounded-[10px]  border  border-[rgba(103, 32, 19, 0.49)] shadow-contact  p-[10px]   text-[18px] font-[400]"
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}

                <FormMessage className="absolute text-[#FF3131] font-[600] text-[14px]  top-[-6px] left-[170px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text_area"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className=" text-[#F9AB70] top-[-8px] rounded-[8px]  py-[2px] px-[8px] z-[336] text-[14px] font-[700] left-[25px]"></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add your comments..."
                    {...field}
                    style={{ outline: "none" }}
                    className="max-w-[350px] h-[113px] w-[90%] min-h-[48px] rounded-[10px]  border  border-[rgba(103, 32, 19, 0.49)] shadow-contact shadow-contact  p-[10px]   text-[18px] font-[400]"
                  />
                </FormControl>
                {/* <FormDescription>Nmae</FormDescription> */}

                <FormMessage className="absolute text-[#FF3131] font-[600] text-[14px]  top-[-8px] left-[10px]" />
              </FormItem>
            )}
          />
          <div className="mt-[10px]">
            <ReCAPTCHA
              sitekey="6Lej3xgqAAAAAEb259LUdnM_icwCWriQ3cAdMi7R"
              onChange={setCaptcha}
            />
          </div>
          <button
            type="submit"
            className="text-[#fff] max-w-[350px] w-[90%] h-[45px]  rounded-[8px] bg-[#F9AB70] flex items-center justify-center text-[14px] font-[700] mt-[20px]"
          >
            Login
          </button>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
};
export default ProfileForm;
