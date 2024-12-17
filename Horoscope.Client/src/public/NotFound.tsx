import { Link } from "react-router-dom";
import NotFoundImage from '../assets/images/dama.png'; 

export const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Imagen de Not Found */}
        <img 
          src={NotFoundImage} 
          alt="Not Found" 
          className="w-64 h-auto mb-8" 
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        404 - Página no encontrada

        </h1>
        <Link
          to="/"
          className="bg-[#fe6d1a] text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-orange-600"
        >
          Volver
        </Link>
      </div>
    </main>
  );
};
