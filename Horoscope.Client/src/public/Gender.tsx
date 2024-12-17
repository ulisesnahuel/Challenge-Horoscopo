import { Header } from "@/components/layouts/Header"
import { ProgressDots } from "@/components/progress-dots"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MaleImage from '../assets/images/gen-1.png';
import BiGenderImage from '../assets/images/gen-2.png'; 
import FemaleImage from '../assets/images/gen-3.png'; 
import { useGender } from "@/context/GenderContext"; 
import { Button } from "@/components/ui/button";


export const GeneroPage = () => {

  const { selectedGender, setSelectedGender } = useGender(); 
  const navigate = useNavigate(); 

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender); 
  };

  const handleContinue = () => {
    if (selectedGender) {
      navigate("/datos"); 
    }
  };
  return (
    <main className="min-h-screen flex flex-col ">
      <Header title="Tu Género" showBack={true} />
      <div className="flex-1 p-4 mt-12">
        <ProgressDots total={3} current={0} />
        <h2 className="text-2xl text-center text-sky-600 opacity-50 mb-12 font-bold">
        INGRESA TU GÉNERO
        </h2>
        <div className="flex justify-center gap-8 mb-12">
          <div
            className={`h-24 w-24 flex items-center justify-center ${selectedGender === 'Male' ? 'rounded-full border-4 border-blue-400' : ''}`}
            onClick={() => handleGenderSelect('Male')} 
          >
            <img
              src={MaleImage}
              alt="Género 1"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div
            className={`h-24 w-24 flex items-center justify-center ${selectedGender === 'BiGender' ? 'rounded-full border-4 border-purple-400' : ''}`}
            onClick={() => handleGenderSelect('BiGender')} 
          >
            <img
              src={BiGenderImage}
              alt="Género 2"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div
            className={`h-24 w-24 flex items-center justify-center ${selectedGender === 'Female' ? 'rounded-full border-4 border-pink-400' : ''}`}
            onClick={() => handleGenderSelect('Female')} 
          >
            <img
              src={FemaleImage}
              alt="Género 3"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleContinue} 
            className="bg-[#fe6d1a] text-white py-3 px-6 rounded-full text-center font-semibold mt-20 hover:bg-[#fe6d1a] hover:opacity-90 disabled:opacity-50"
            disabled={!selectedGender} 
          >
            INGRESAR
          </Button>
        </div>
      </div>
    </main>
  );
}

