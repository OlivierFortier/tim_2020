import styles from "./Navigation.module.scss";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navigation() {
  // obtenir la section actuelle
  const router = useRouter()

  // selon la section actuelle, changer le width de la barre
  const [progresBarre, setProgresBarre] = useState("0%");

  useEffect(()=>{
    if(router.pathname === "/") setProgresBarre(ancienProgres => "0%");
    if(router.pathname === "/introduction") setProgresBarre(ancienProgres => "10%");
    if(router.pathname === "/cours") setProgresBarre(ancienProgres => "30%");
    if(router.pathname.includes("/professeurs")) setProgresBarre(ancienProgres => "50%");
    if(router.pathname.includes("/etudiants")) setProgresBarre(ancienProgres => "70%");
    if(router.pathname.includes("/futur")) setProgresBarre(ancienProgres => "90%");
    if(router.pathname === "/inscription") setProgresBarre(ancienProgres => "100%");
  },[router.pathname])

  return (
    <footer className={styles.conteneurNavigation}>
      <span className={styles.barreNavigation}>
        <Link href="/">
          <button className={styles.boutonUneSection}>01</button>
        </Link>
        <Link href="/introduction">
          <button className={styles.boutonUneSection}>02</button>
        </Link>
        <Link href="/cours">
          <button className={styles.boutonUneSection}>03</button>
        </Link>
        <Link href="/professeurs">
          <button className={styles.boutonUneSection}>04</button>
        </Link>
        <Link href="/etudiants">
          <button className={styles.boutonUneSection}>05</button>
        </Link>
        <Link href="/futur">
          <button className={styles.boutonUneSection}>06</button>
        </Link>
        <Link href="/inscription">
          <button className={styles.boutonUneSection}>07</button>
        </Link>
        <span style={{ width: progresBarre }} className={styles.ligneProgres}></span>
      </span>
    </footer>
  );
}
