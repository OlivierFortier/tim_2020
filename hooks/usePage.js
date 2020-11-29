import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function usePage() {
  const router = useRouter();
  const [page, setPage] = useState("accueil");

  useEffect(() => {
    if (router.pathname === "/") setPage("accueil");

    if (router.pathname === "/introduction") setPage("introduction");

    if (router.pathname === "/cours") setPage("cours");

    if (router.pathname.includes("/professeurs")) setPage("professeurs");

    if (router.pathname.includes("/etudiants")) setPage("étudiants");

    if (router.pathname.includes("/futur")) setPage("futur");

    if (router.pathname === "/inscription") setPage("inscription");
  }, [router]);

  return {
    page,
  };
}
