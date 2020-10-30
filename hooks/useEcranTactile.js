import { useEffect, useState } from "react";

export function useEcranTactile() {
  const [ecranTactile, setEcranTactile] = useState(null);

  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      console.log("yeet");
      setEcranTactile(true);
    } else {
      setEcranTactile(false);
    }
  }, []);

  return {
    ecranTactile,
  };
}
