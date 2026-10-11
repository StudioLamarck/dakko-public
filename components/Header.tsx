import Link from "next/link";
import { AppIcon } from "./Logo";
import { storesAvailable } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span aria-hidden="true" className={styles.progress} />
      <Link href="/" aria-label="Kodakian, accueil" className={styles.brand}>
        <AppIcon size={40} className={styles.icon} />
        <span className={styles.name}>Kodakian</span>
      </Link>
      <nav aria-label="Navigation principale" className={styles.nav}>
        <Link href="/#comment" className={styles.link}>
          Comment ça marche
        </Link>
        <Link href="/#revelation" className={styles.link}>
          La révélation
        </Link>
        <Link href="/#faq" className={styles.link}>
          Questions
        </Link>
        <Link href="/#telecharger" className={styles.cta}>
          {storesAvailable ? "Télécharger" : "Bientôt disponible"}
        </Link>
      </nav>
    </header>
  );
}
