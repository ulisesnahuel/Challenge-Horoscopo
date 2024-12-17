
import { Link } from "react-router-dom"
import DamaImage from '../assets/images/dama.png'; 



export const Inicio = () => {

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <img 
          src={DamaImage} 
          alt="Pisces" 
          className="w-64 h-auto mb-16"
        />
        <Link
          to="/genero"
          className="w-64 bg-[#fe6d1a] text-white py-3 px-6 rounded-full text-center font-semibold "
        >
          INGRESAR
        </Link>
      </div>
    </main>
  );
}
