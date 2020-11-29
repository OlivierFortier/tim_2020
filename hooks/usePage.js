import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function usePage() {
  const router = useRouter();

  const [page, setPage] = useState("accueil");
  const [pagePrecedente, setPagePrecedente] = useState("accueil");
  const [pageSuivante, setPageSuivante] = useState("accueil");

  useEffect(() => {
    if (router.pathname === "/") {
      setPage("/accueil");
      setPagePrecedente("/accueil");
      setPageSuivante("/introduction");
    }

    if (router.pathname === "/introduction") {
      setPage("/introduction");
      setPagePrecedente("/accueil");
      setPageSuivante("/cours");
    }

    if (router.pathname === "/cours") {
      setPage("/cours");
      setPagePrecedente("/introduction");
      setPageSuivante("/professeurs");
    }

    if (router.pathname.includes("/professeurs")) {
      setPage("/professeurs");
      setPagePrecedente("/cours");
      setPageSuivante("/professeurs/grille");
      if (router.pathname == "/professeurs/grille") {
        setPage("/professeurs/grille");
        setPagePrecedente("/professeurs");
        setPageSuivante("/etudiants");
      }
      if (router.pathname === "/professeurs/[slug]") {
        setPage("/professeurs/[slug]");
        setPagePrecedente("/professeurs/grille");
        setPageSuivante("/etudiants");
      }
    }

    if (router.pathname.includes("/etudiants")) {
      setPage("/etudiants");
      setPagePrecedente("/professeurs");
      setPageSuivante("/futur");
      if (router.pathname === "/etudiants/gallerie") {
        setPage("/etudiants/gallerie");
        setPagePrecedente("/etudiants");
        setPageSuivante("/futur");
      }
      if (router.pathname === "/etudiants/projets") {
        setPage("/etudiants/projets");
        setPagePrecedente("/etudiants");
        setPageSuivante("/futur");
      }
      if (router.pathname === "/etudiants/[slug]") {
        setPage("/etudiants/[slug]");
        setPagePrecedente("/etudiants/projets");
        setPageSuivante("/futur");
      }
    }

    if (router.pathname.includes("/futur")) {
      setPage("/futur");
      setPagePrecedente("/etudiants");
      setPageSuivante("/inscription");
      if (router.pathname === "/futur/[slug]") {
        setPage("/futur/[slug]");
        setPagePrecedente("/futur");
        setPageSuivante("/inscription");
      }
    }

    if (router.pathname === "/inscription") {
      setPage("/inscription");
      setPagePrecedente("/futur");
      setPageSuivante("/inscription");
    }
  }, [router]);

  return {
    page,
    pagePrecedente,
    pageSuivante,
  };
}
