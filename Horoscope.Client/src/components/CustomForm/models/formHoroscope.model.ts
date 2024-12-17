
import {z} from "zod"
// import {SubmitHandler, useForm} from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod";
export const schema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(50, "El nombre no debe exceder los 100 caracteres"),
  email: z.string().email("Debe ser un correo válido"),
  // gender: z.enum(["male", "female", "bigender"], {
  //   required_error: "El género es obligatorio",
  // }),
   birthdate: z.string().refine(
    (date) => !isNaN(new Date(date).getTime()), 
        { message: "La fecha de nacimiento debe ser válida" }
   ),
});

export type FormValues = z.infer<typeof schema>;

// const CustomForm = () => {    
//     const {control,handleSubmit,formState:{errors}} = useForm<FormValues>({
//         resolver: zodResolver(schema)
//     })

//     const onSubmit:SubmitHandler<FormValues> = (data) => {
        
//     }
// }