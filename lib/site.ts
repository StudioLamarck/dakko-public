// Liens externes du site. `null` = pas encore disponible : l'élément est
// affiché sans lien (badges « Bientôt sur… », liens du pied de page).
export const site = {
  name: "Kodakian",
  // URL publique, utilisée pour les balises Open Graph. Sur Vercel, le domaine
  // de production est détecté automatiquement.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Kodakian transforme les téléphones de tes invités en appareils jetables partagés. Les photos restent cachées, et l’album se révèle le lendemain pour tout le monde.",
  stores: {
    appStore: null as string | null,
    googlePlay: null as string | null,
  },
  links: {
    terms: "/conditions" as string | null,
    privacy: "/confidentialite" as string | null,
    contact: "mailto:kodakian@studiolamarck.fr" as string | null,
    studio: null as string | null,
  },
  // Éditeur de l'app et du site, repris dans les pages légales.
  publisher: {
    name: "Studio Lamarck",
    legalForm: "association déclarée régie par la loi du 1er juillet 1901",
    rna: "W751284906",
    siren: "106 993 579",
    address: "70, rue Damrémont, 75018 Paris, France",
    email: "kodakian@studiolamarck.fr",
  },
  // Dernière mise à jour des conditions et de la politique de confidentialité.
  legalUpdatedAt: "11 octobre 2026",
};

export const storesAvailable = Boolean(site.stores.appStore || site.stores.googlePlay);
