import { Header } from "@/components/layouts/Header"
import HoroscopeImage from '../assets/images/sign/boton_acuario.png';
import { Button } from "@/components/ui/button";
import { useNavigate,useLocation } from "react-router-dom"
import { GetHoroscope } from "@/models";

import AriesImage from '../assets/images/sign/boton_aries.png';
import TaurusImage from '../assets/images/sign/boton_tauro.png';
import GeminiImage from '../assets/images/sign/boton_geminis.png';
import CancerImage from '../assets/images/sign/boton_cancer.png';
import LeoImage from '../assets/images/sign/boton_leo.png';
import VirgoImage from '../assets/images/sign/boton_virgo.png';
import LibraImage from '../assets/images/sign/boton_libra.png';
import ScorpioImage from '../assets/images/sign/boton_escorpio.png';
import SagittariusImage from '../assets/images/sign/boton_sagitario.png';
import CapricornImage from '../assets/images/sign/boton_capricornio.png';
import AquariusImage from '../assets/images/sign/boton_acuario.png';
import PiscesImage from '../assets/images/sign/boton_piscis.png';
import { NotFound } from "./NotFound";

const signImages: { [key: string]: string } = {
  Aries: AriesImage,
  Taurus: TaurusImage,
  Gemini: GeminiImage,
  Cancer: CancerImage,
  Leo: LeoImage,
  Virgo: VirgoImage,
  Libra: LibraImage,
  Scorpio: ScorpioImage,
  Sagittarius: SagittariusImage,
  Capricorn: CapricornImage,
  Aquarius: AquariusImage,
  Pisces: PiscesImage,
};

export const HoroscopoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data }: { data: GetHoroscope } = location.state || {};

  if (!data) {
    return <NotFound></NotFound>; 
  }

  const { name, horoscopeMessage, daysUntilBirthday, sign } = data;

  const message = horoscopeMessage.replace(/^[^\-\:]*[\-\:]\s*/, "").trim();
  const signImage = signImages[sign as keyof typeof signImages] || HoroscopeImage; 


  return (
    <main className="min-h-screen flex flex-col">
      <Header title="Tu Horóscopo" backUrl="/datos" />
      <div className="flex-1 p-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <img
            src={signImage}
            alt="Pisces"
            width={350}
            height={50}
            className="text-blue-300"
          />
        </div>
        <div className="space-y-6 text-center mb-8">
          <h2 className="text-2xl">¡Hola {name}!</h2>
          <p className="text-lg max-w-lg">{message}</p>
          <p className="text-xl">
            {daysUntilBirthday === 0 ? (
              <>¡Feliz Cumpleaños! </>
            ) : (
              `Faltan ${daysUntilBirthday} días para tu cumpleaños.`
            )}
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/inicio")}
            className="bg-[#fe6d1a] text-white py-3 px-6 rounded-full text-center font-semibold mt-20 hover:bg-[#fe6d1a] hover:opacity-90 disabled:opacity-50"
          >
            CONTINUAR
          </Button>
        </div>
      </div>
    </main>
  );
}

