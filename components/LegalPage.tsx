import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { site } from "@/lib/site";
import styles from "./LegalPage.module.css";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
};

// Gabarit des pages légales : titre, sommaire, puis une section par article.
export default function LegalPage({ title, intro, sections }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.head}>
          <span className="eyebrow">Informations légales</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Dernière mise à jour : {site.legalUpdatedAt}</p>
          <div className={`lead ${styles.intro}`}>{intro}</div>
        </div>

        <nav aria-labelledby="sommaire" className={styles.toc}>
          <h2 id="sommaire" className={styles.tocTitle}>
            Sommaire
          </h2>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.body}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-titre`} className={styles.section}>
              <h2 id={`${s.id}-titre`} className={styles.h2}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
