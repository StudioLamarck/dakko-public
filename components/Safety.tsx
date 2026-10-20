import styles from "./Safety.module.css";

export default function Safety() {
  return (
    <section id="donnees" aria-label="Stockage et conservation des photos" className={styles.section}>
      <span className="eyebrow">Tes photos, en sécurité</span>
      <div className={`reveal ${styles.card}`}>
        <div className={styles.item}>
          <div className={styles.badge}>
            <svg viewBox="0 0 3 2" role="img" aria-label="Drapeau français" className={styles.flag}>
              <rect width="1" height="2" x="0" fill="#000091" />
              <rect width="1" height="2" x="1" fill="#FFFFFF" />
              <rect width="1" height="2" x="2" fill="#E1000F" />
            </svg>
          </div>
          <div className={styles.copy}>
            <h3 className={styles.title}>Stockées en France, nulle part ailleurs.</h3>
            <p className={styles.text}>
              Tes photos sont hébergées exclusivement sur des serveurs situés en France. Elles ne quittent jamais
              le territoire.
            </p>
          </div>
        </div>
        <span aria-hidden="true" className={styles.divider} />
        <div className={styles.item}>
          <div aria-hidden="true" className={`${styles.badge} ${styles.days}`}>
            <span className={styles.daysValue}>30</span>
            <span className={styles.daysUnit}>JOURS</span>
          </div>
          <div className={styles.copy}>
            <h3 className={styles.title}>Effacées 30 jours après.</h3>
            <p className={styles.text}>
              30 jours après la fin de l’événement, toutes les photos sont supprimées définitivement. Pense à
              télécharger l’album d’ici là.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
