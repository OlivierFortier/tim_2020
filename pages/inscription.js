import styles from "./inscription.module.scss"
import Link from "next/link"

export default function Inscription() {
    return (
        <main className={styles.conteneurPage}>
            <h1>Qu'est-ce que tu attends ?</h1>
            <Link href="https://admission.sram.qc.ca/"><a>soumettre ma demande d'admission.</a></Link>
        </main>
    )
}
