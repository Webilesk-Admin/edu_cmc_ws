import React from "react";
import { FieldPath, Control } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"; // Ensure this path is correct

// Define formSchema with Zod (or import it if it's defined elsewhere)
const formSchema = z.object({
  // Define schema fields here
});

// Define the type for form values
type FormValues = z.infer<typeof formSchema>;

interface LoginFormFieldProps {
  name: FieldPath<FormValues>;
  label: string;
  placeholder: string;
  description?: string; // Make description optional
  inputType?: string; // Make inputType optional
  formControl: Control<FormValues>;
}

const LoginFormField: React.FC<LoginFormFieldProps> = ({
  name,
  label,
  placeholder,
  inputType = "text", // Default value for inputType
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
              type={inputType}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LoginFormField;
