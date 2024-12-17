import { Header } from "@/components/layouts/Header"
import { ProgressDots } from "@/components/progress-dots"
import { useEffect } from "react"
import { GetHoroscope, PostHoroscope } from "@/models"
import { SearchHoroscopeAsync } from "@/services"
import { useApi } from "@/hooks/useApi"
import { FormValues,schema } from "@/components/CustomForm/models"
import { zodResolver } from "@hookform/resolvers/zod";
import {useGender} from "@/context/GenderContext"
import InputForm from "@/components/CustomForm/components/CustomInput"

import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { SubmitHandler,useForm } from "react-hook-form"
import toast from 'react-hot-toast';

export const DatosPage = () => { 

  const { selectedGender } = useGender();

  const navigate = useNavigate();

  const { control,handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit", //onBlur
    defaultValues: {
      name: "", 
      email: "",
      // gender: "",
      birthdate: "",
     }
  });

  useEffect(() => {
    if (!selectedGender) {
      navigate('/genero');  
    }
  }, [selectedGender, navigate]);

  const { loading, data, error, fetch } = useApi<GetHoroscope, PostHoroscope>(SearchHoroscopeAsync);




  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    const postData: PostHoroscope = {
      name: formData.name,
      email: formData.email,
      gender: selectedGender!.toString(),
      birthDate: new Date(formData.birthdate), 
    };
    fetch(postData); 
  };

  useEffect(() => {
    if (data) {
      navigate("/horoscopo", { state: { data } }); 
    }else{
    }
    if (error) { 
      toast.error("¡Hubo un problema con el servidor!"); 
    }
  }, [data,error]);
  

  return (
    <main className="min-h-screen flex flex-col">
      <Header title="Tus Datos" backUrl="/genero" />
      <div className="flex-1 p-4 mt-12">
        <ProgressDots total={3} current={1} />
        <h2 className="text-2xl text-center text-sky-600 opacity-50 mb-12 font-bold">
          INGRESA TUS DATOS
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">

          <InputForm
            name="name"
            control={control}
            label="Nombre:"
            type="text"
            error={errors.name}
          ></InputForm>
          <InputForm
            name="email"
            control={control}
            label="EMail:"
            type="email"
            error={errors.email}
          ></InputForm>



          <InputForm
            name="birthdate"
            control={control}
            type="date"
            label="Fecha de Nacimiento:"
            error={errors.birthdate}
          />

          <div className=" flex justify-center p-4 flex gap-3">
            <Button
              onClick={() => navigate("/genero")}
              type="button"
              className="flex-1 bg-sky-700 text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-sky-700 hover:opacity-90 disabled:opacity-50"
              >
              VOLVER
            </Button>
            <Button
              type="submit" 
              disabled={loading}
              className="flex-1 bg-[#fe6d1a] text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-[#fe6d1a] hover:opacity-90 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="animate-spin mr-2">
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  </span>
                  CARGANDO...
                </div>
              ) : (
                "CONTINUAR"
              )}
            </Button>

            
          </div>
        </form>
      </div>
    </main>
  );
}

