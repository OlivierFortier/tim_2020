import { createContext, useContext, useState } from "react";

const ContexteEtatScroll = createContext();
const ContexteSetEtatScroll = createContext();

export function useEtatScroll() {
  return useContext(ContexteEtatScroll);
}

export function useSetEtatScroll() {
  return useContext(ContexteSetEtatScroll);
}

export function FournisseurScroll({ children }) {

  const [arreterScroll, setArreterScroll] = useState(false);

  return (
    <ContexteEtatScroll.Provider value={arreterScroll}>
      <ContexteSetEtatScroll.Provider value={setArreterScroll}>
        {children}
      </ContexteSetEtatScroll.Provider>
    </ContexteEtatScroll.Provider>
  );
}
