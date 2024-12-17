//solo para form

import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css'
import { FormValues } from "../models";
import { Label } from "@radix-ui/react-label";



interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="flex items-center space-x-4 mb-2 w-full">
      <Label htmlFor={name} className="text-xl text-sky-300 flex-shrink-0 w-1/3">
        {label}
      </Label>
      <div className="flex-1">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              id={name}
              type={type}
              {...field}
              className={`form-control ${
                error ? "border-red-500" : "border-gray-300"
              } flex-1 border-b-2 p-2 focus:outline-none focus:border-sky-500 w-full`}
            />
          )}
        />    
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </div>
  );
};



export default InputForm;