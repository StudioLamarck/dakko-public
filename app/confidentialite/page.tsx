import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Kodakian",
  description:
    "Les données que traite l’application Kodakian, pourquoi, combien de temps, et comment exercer vos droits.",
};

const { publisher } = site;
const mail = <a href={`mailto:${publisher.email}`}>{publisher.email}</a>;

const sections: LegalSection[] = [
  {
    id: "essentiel",
    title: "L’essentiel",
    content: (
      <ul>
        <li>
          <strong>Personne ne voit vos photos avant la révélation</strong>, ni vous, ni l’organisateur, ni nous.
          Nos outils d’administration ne permettent jamais d’afficher une photo.
        </li>
        <li>
          <strong>Vos photos sont supprimées 29 jours après la révélation</strong>, et plus tôt si l’événement est
          annulé ou si vous les supprimez.
        </li>
        <li>
          <strong>Pas de publicité, pas de revente.</strong> Nous ne vendons ni ne partageons vos données à des
          fins commerciales, et l’Application ne contient aucun traceur publicitaire.
        </li>
        <li>
          <strong>Hébergement en France</strong>, chez OVH.
        </li>
        <li>
          <strong>Vous pouvez supprimer votre compte à tout moment</strong> depuis l’Application ou par e-mail.
        </li>
      </ul>
    ),
  },
  {
    id: "responsable",
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement de vos données est {publisher.name}, {publisher.legalForm} (SIREN{" "}
          {publisher.siren}), dont le siège est situé {publisher.address}.
        </p>
        <p>Pour toute question sur vos données ou pour exercer vos droits, écrivez-nous à {mail}.</p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Les données que nous traitons",
    content: (
      <>
        <p>Nous ne collectons que ce dont l’Application a besoin pour fonctionner :</p>
        <dl>
          <div>
            <dt>Compte</dt>
            <dd>
              <p>
                L’identifiant technique transmis par Apple ou Google, votre adresse e-mail (avec Apple, il peut
                s’agir d’une adresse relais si vous masquez la vôtre), votre nom d’affichage et, si vous en
                ajoutez une, votre photo de profil.
              </p>
              <p>
                Avec Google, la photo de votre compte Google est reprise comme photo de profil tant que vous n’en
                avez pas choisi ou retiré une vous-même.
              </p>
            </dd>
          </div>
          <div>
            <dt>Événements</dt>
            <dd>
              Nom, dates, fuseau horaire, nombre de poses et date de révélation des événements ; pour chaque
              participant, son rôle, sa date d’arrivée, le nombre de poses utilisées, son choix d’être prévenu de
              la révélation et la date de sa première ouverture de l’album.
            </dd>
          </div>
          <div>
            <dt>Photos</dt>
            <dd>
              <p>
                Le fichier de chaque photo, sa miniature, l’heure de prise selon votre téléphone, l’heure de
                réception par nos serveurs, ses dimensions et sa taille.
              </p>
              <p>
                Les photos sont réencodées par l’Application avant l’envoi, ce qui retire leurs métadonnées,{" "}
                <strong>dont la position GPS</strong>.
              </p>
            </dd>
          </div>
          <div>
            <dt>Notifications</dt>
            <dd>
              Le jeton de notification de votre téléphone et sa plateforme (iOS ou Android) et, sur iPhone, les
              jetons des Live Activities affichées pendant la prise de photos.
            </dd>
          </div>
          <div>
            <dt>Sécurité</dt>
            <dd>
              Vos sessions de connexion (conservées sous une forme hachée, inutilisable en cas de fuite) et votre adresse IP, utilisée
              pour limiter les tentatives de saisie de codes d’accès.
            </dd>
          </div>
          <div>
            <dt>Mesure d’usage</dt>
            <dd>
              Les jours où vous utilisez l’Application, sa version et la plateforme de votre téléphone. Ces
              informations servent uniquement à produire des statistiques internes (nombre d’utilisateurs actifs,
              versions en circulation) ; nous n’utilisons aucun outil de mesure d’audience tiers.
            </dd>
          </div>
          <div>
            <dt>Support</dt>
            <dd>Les échanges que vous avez avec nous par e-mail.</dd>
          </div>
        </dl>
        <h3>Autorisations du téléphone</h3>
        <ul>
          <li>
            <strong>Appareil photo :</strong> pour prendre les photos, scanner un QR code d’invitation et, si vous
            le souhaitez, prendre votre photo de profil.
          </li>
          <li>
            <strong>Photothèque :</strong> pour choisir une photo de profil et enregistrer les photos d’un album
            révélé. L’Application ne lit pas le reste de votre photothèque.
          </li>
          <li>
            <strong>Notifications :</strong> pour vous prévenir de la révélation, de l’arrivée d’un participant ou
            de l’annulation d’un événement.
          </li>
        </ul>
        <p>Vous pouvez retirer ces autorisations à tout moment dans les réglages de votre téléphone.</p>
      </>
    ),
  },
  {
    id: "finalites",
    title: "Pourquoi et sur quelle base",
    content: (
      <dl>
        <div>
          <dt>Fournir le service</dt>
          <dd>
            Gérer votre compte, vos événements, vos photos, les albums et les notifications. Base légale :
            l’exécution du contrat que constituent les{" "}
            <Link href="/conditions">conditions générales d’utilisation</Link>.
          </dd>
        </div>
        <div>
          <dt>Protéger le service</dt>
          <dd>
            Sécuriser les connexions, limiter les tentatives de codes d’accès, traiter les signalements de
            contenus. Base légale : notre intérêt légitime à assurer la sécurité de l’Application et de ses
            utilisateurs.
          </dd>
        </div>
        <div>
          <dt>Améliorer l’Application</dt>
          <dd>
            Mesurer l’usage de l’Application à partir de statistiques internes. Base légale : notre intérêt
            légitime à faire évoluer le service.
          </dd>
        </div>
        <div>
          <dt>Vous répondre</dt>
          <dd>Traiter vos demandes de support et l’exercice de vos droits. Base légale : notre intérêt légitime et nos obligations légales.</dd>
        </div>
        <div>
          <dt>Respecter la loi</dt>
          <dd>Répondre aux demandes des autorités habilitées. Base légale : nos obligations légales.</dd>
        </div>
      </dl>
    ),
  },
  {
    id: "visibilite",
    title: "Qui peut voir vos données",
    content: (
      <>
        <h3>Les participants de vos événements</h3>
        <ul>
          <li>votre nom d’affichage et votre photo de profil ;</li>
          <li>avant la révélation, le nombre de photos que vous avez prises, jamais les photos elles-mêmes ;</li>
          <li>après la révélation, vos photos, avec votre nom et l’heure de la prise.</li>
        </ul>
        <p>
          Votre photo de profil n’est visible que par vous et par les membres de vos événements. Les participants
          d’un événement ne voient pas votre adresse e-mail.
        </p>
        <h3>Notre équipe</h3>
        <p>
          Nos outils d’administration ne montrent que des informations techniques (nombres, états, tailles) : ils
          n’affichent jamais une photo, une miniature ni une photo de profil. L’accès aux serveurs est réservé à
          un nombre restreint d’administrateurs, pour la maintenance, la sécurité ou une obligation légale.
        </p>
        <h3>Nos prestataires</h3>
        <p>Nous faisons appel à quelques prestataires techniques, qui agissent sur nos instructions :</p>
        <dl>
          <div>
            <dt>OVH (France)</dt>
            <dd>Hébergement des serveurs, de la base de données et des photos, en France.</dd>
          </div>
          <div>
            <dt>Cloudflare</dt>
            <dd>Acheminement sécurisé des échanges entre l’Application et nos serveurs.</dd>
          </div>
          <div>
            <dt>Apple et Google</dt>
            <dd>Connexion à votre compte, et remise des notifications (Apple Push Notification service, Firebase Cloud Messaging).</dd>
          </div>
          <div>
            <dt>Expo (650 Industries)</dt>
            <dd>
              Relais des notifications vers Apple et Google. Une notification contient le nom de l’événement et,
              le cas échéant, le nom d’un participant, mais jamais d’image ni d’aperçu de photo.
            </dd>
          </div>
          <div>
            <dt>Vercel</dt>
            <dd>Hébergement du Site.</dd>
          </div>
        </dl>
        <p>
          Certains de ces prestataires sont établis hors de l’Union européenne, notamment aux États-Unis. Ces
          transferts sont encadrés par des garanties appropriées : décision d’adéquation de la Commission
          européenne (Data Privacy Framework UE–États-Unis) ou clauses contractuelles types. Vos photos, elles,
          restent stockées en France.
        </p>
        <p>Nous ne vendons ni ne louons vos données, et nous ne les partageons avec aucun annonceur.</p>
      </>
    ),
  },
  {
    id: "conservation",
    title: "Durées de conservation",
    content: (
      <>
        <dl>
          <div>
            <dt>Photos et miniatures</dt>
            <dd>
              Jusqu’à 29 jours après la révélation. Elles sont supprimées plus tôt si vous les supprimez, si vous
              quittez l’événement ou en êtes retiré, si l’événement est annulé ou si vous supprimez votre compte.
            </dd>
          </div>
          <div>
            <dt>Photos en attente sur le téléphone</dt>
            <dd>
              Jusqu’à leur envoi : la copie locale est effacée dès que nos serveurs confirment la réception. Les
              données d’un événement expiré sont aussi effacées du téléphone.
            </dd>
          </div>
          <div>
            <dt>Compte, profil et événements</dt>
            <dd>
              Tant que votre compte existe. À sa suppression, vos données de profil et de connexion sont effacées,
              et ce qui reste nécessaire au fonctionnement des événements des autres participants est anonymisé.
            </dd>
          </div>
          <div>
            <dt>Sessions de connexion</dt>
            <dd>60 jours au plus sans utilisation, puis effacées dans les 30 jours qui suivent leur expiration.</dd>
          </div>
          <div>
            <dt>Mesure d’usage</dt>
            <dd>
              Tant que votre compte existe. Seules des statistiques globales et anonymes (par exemple, le nombre
              d’utilisateurs actifs par jour) sont conservées ensuite.
            </dd>
          </div>
          <div>
            <dt>Adresse IP</dt>
            <dd>Le temps de la limitation des tentatives de code d’accès, soit 10 minutes.</dd>
          </div>
          <div>
            <dt>Sauvegardes</dt>
            <dd>
              Les sauvegardes de la base de données sont conservées 14 jours. La copie de sauvegarde des photos
              suit les suppressions : une photo supprimée en disparaît la nuit suivante.
            </dd>
          </div>
          <div>
            <dt>Échanges avec le support</dt>
            <dd>Le temps nécessaire au traitement de votre demande.</dd>
          </div>
        </dl>
      </>
    ),
  },
  {
    id: "droits",
    title: "Vos droits et la suppression du compte",
    content: (
      <>
        <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
        <ul>
          <li>
            <strong>accès</strong> à vos données et <strong>rectification</strong> : vous pouvez modifier votre nom
            d’affichage et votre photo de profil directement dans l’Application ;
          </li>
          <li>
            <strong>effacement</strong> : vous pouvez supprimer vos photos d’un album révélé, quitter un événement
            ou supprimer votre compte ;
          </li>
          <li>
            <strong>opposition</strong> aux traitements fondés sur notre intérêt légitime, et{" "}
            <strong>limitation</strong> d’un traitement ;
          </li>
          <li>
            <strong>portabilité</strong> : les photos d’un album révélé peuvent être enregistrées sur votre
            téléphone, et nous pouvons vous transmettre vos autres données sur demande ;
          </li>
          <li>
            <strong>directives</strong> sur le sort de vos données après votre décès.
          </li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez-nous à {mail} depuis l’adresse associée à votre compte, ou en indiquant
          votre nom d’affichage. Nous vous répondrons dans un délai d’un mois.
        </p>
        <h3>Supprimer votre compte</h3>
        <p>
          Dans l’Application, ouvrez <strong>Mon compte</strong> et choisissez de supprimer votre compte. Si vous n’avez plus accès à l’Application, envoyez votre demande à {mail}. La suppression entraîne :
        </p>
        <ul>
          <li>la suppression de vos photos dans tous les albums, fichiers compris ;</li>
          <li>
            la transmission des événements que vous organisez au participant arrivé le plus tôt, ou leur
            annulation s’il n’y en a pas ;
          </li>
          <li>
            l’effacement de votre profil, de votre photo de profil, de vos identifiants de connexion, de vos
            sessions et de vos jetons de notification ;
          </li>
          <li>pour un compte Apple supprimé depuis l’Application, la révocation de l’accès accordé à Kodakian.</li>
        </ul>
        <p>La suppression est définitive.</p>
        <h3>Réclamation</h3>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL, 3
          place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou sur <a href="https://www.cnil.fr">cnil.fr</a>.
        </p>
      </>
    ),
  },
  {
    id: "mineurs",
    title: "Mineurs et photos d’enfants",
    content: (
      <>
        <p>
          L’Application est réservée aux personnes d’au moins 13 ans. Un mineur doit avoir l’accord d’un parent ou
          de son représentant légal pour l’utiliser.
        </p>
        <p>
          Les événements en famille peuvent donner lieu à des photos d’enfants. Les participants s’engagent à
          obtenir l’accord des parents avant de les photographier. Si une photo de vous ou de votre enfant figure
          dans un album, vous pouvez demander à son auteur ou à l’organisateur de la supprimer, ou nous écrire à{" "}
          {mail}.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    title: "Sécurité",
    content: (
      <ul>
        <li>Tous les échanges sont chiffrés (HTTPS).</li>
        <li>
          Les photos sont stockées dans un espace privé, joignable uniquement par nos serveurs, sous des noms
          impossibles à deviner.
        </li>
        <li>
          Après la révélation, l’Application reçoit des liens d’accès valables une heure, et nos serveurs
          revérifient vos droits à chaque ouverture d’une photo : un lien ne sert plus à rien pour un participant
          retiré, un album expiré ou un événement annulé.
        </li>
        <li>Les photos et les liens d’accès n’apparaissent jamais dans les notifications.</li>
        <li>L’heure de révélation est contrôlée par nos serveurs, jamais par l’horloge de votre téléphone.</li>
      </ul>
    ),
  },
  {
    id: "site",
    title: "Le site web",
    content: (
      <p>
        Le Site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni de publicité. Son
        hébergeur, Vercel, traite les données techniques nécessaires à l’affichage des pages, comme votre adresse
        IP.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modifications",
    content: (
      <p>
        Nous pouvons mettre à jour cette politique pour suivre l’évolution de l’Application ou de la loi. La date
        de dernière mise à jour figure en haut de cette page. En cas de changement important, nous vous
        préviendrons dans l’Application.
      </p>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro={
        <p>
          Kodakian repose sur une promesse : personne ne voit les photos avant la révélation. Cette page explique
          quelles données nous traitons pour la tenir, et comment vous gardez la main dessus.
        </p>
      }
      sections={sections}
    />
  );
}
