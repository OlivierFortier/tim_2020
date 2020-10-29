import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//hook personnalisé qui permet d'avoir la prochaine page ou la précédente page ainsi que la liste des pages
export function usePage() {
  const router = useRouter();

  //à modifier si on ajoute des pages, malheureusement ce n'est pas faisable automatiquement
  const listePages = [
    "/",
    "/introduction",
    "/cours",
    "/professeurs",
    "/professeurs/grille",
    "/etudiants",
    "/exemplecontentful",
  ];

  const [page, setPage] = useState(null);
  const [prochainePage, setProchainePage] = useState(null);
  const [anciennePage, setAnciennePage] = useState(null);

  useEffect(() => {
    switch (router.pathname) {
      case listePages[0]:
        setAnciennePage(0);
        setPage(0);
        setProchainePage(1);
        break;

      case listePages[1]:
        setAnciennePage(0);
        setPage(1);
        setProchainePage(2);
        break;

      case listePages[2]:
        setAnciennePage(1);
        setPage(2);
        setProchainePage(3);
        break;

      case listePages[3]:
        setAnciennePage(2);
        setPage(3);
        setProchainePage(4);
        break;

      case listePages[4]:
        setAnciennePage(3);
        setPage(4);
        setProchainePage(5);
        break;

      case listePages[5]:
        setAnciennePage(4);
        setPage(5);
        setProchainePage(6);
        break;

      case listePages[6]:
        setAnciennePage(5);
        setPage(6);
        setProchainePage(6);
        break;
    }
  }, [page, anciennePage, prochainePage, router.pathname]);

  return {
    listePages,
    anciennePage,
    prochainePage,
  };
}
