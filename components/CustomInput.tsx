import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Control, FieldPath, Form } from 'react-hook-form';
import { Input } from "@/components/ui/input"
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  type?: string;
};

const CustomInput = ({control,name,type="text", label,placeholder}: CustomInput) => {
  return (
                        <FormField
                            control={control}
                            name={name}
                            render={({ field }) => (
                                <div className="form-item">
                                    <FormLabel className="form-label">
                                        {label}
                                    </FormLabel>
                                    <div className="flex w-full flex-col">
                                        <FormControl>
                                            <Input
                                                type={type || "text"} 
                                                placeholder={placeholder}
                                                className="input-class"
                                                {...field}
                                                value={field.value ?? ""}
                                            />
                                        </FormControl>
                                        <FormMessage className="form-message mt-2">

                                        </FormMessage>
                                    </div>
                               </div>
                            )}
                            />
  )
}

export default CustomInput