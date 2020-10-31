import styles from "./inscription.module.scss"
import Link from "next/link"
import {motion} from "framer-motion"

export default function Inscription() {
    return (
        <motion.main initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.conteneurPage}>
            <h1>Qu'est-ce que tu attends ?</h1>
            <Link href="https://admission.sram.qc.ca/"><a>Soumettre ma demande d'admission.</a></Link>
        </motion.main>
    )
}
