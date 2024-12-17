import { createContext, useContext, useState, ReactNode } from "react";

interface GenderContextType {
  selectedGender: string | null;
  setSelectedGender: (gender: string) => void;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <GenderContext.Provider value={{ selectedGender, setSelectedGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export const useGender = (): GenderContextType => {
  const context = useContext(GenderContext);
  if (!context) {
    throw new Error("useGender must be used within a GenderProvider");
  }
  return context;
};
