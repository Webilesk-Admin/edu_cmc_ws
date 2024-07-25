import { fork } from "child_process";
import React from "react";
import { Form, useForm, FieldPath, Control } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FilePath } from "tailwindcss/types/config";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from ".

interface loginFormFieldProps {
  name: FieldPath<z.infer<typeof formScehma>>;
  label: string;
  placeholder: string;
  description: string;
  inputType: string;
  formControl: Control<z.infer<typeof formScehma>, any>;
}
const loginFormField: React.FC<loginFormFieldProps> = ({
  name,
  label,
  placeholder,
  inputType,
  formControl,
  description,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={inputType || "text"}
              placeholder={placeholder}
              {...field}
            ></Input>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
