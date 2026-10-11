import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation — Kodakian",
  description: "Les règles d’utilisation de l’application Kodakian, l’appareil photo jetable partagé.",
};

const { publisher } = site;
const mail = <a href={`mailto:${publisher.email}`}>{publisher.email}</a>;

const sections: LegalSection[] = [
  {
    id: "objet",
    title: "Objet",
    content: (
      <>
        <p>
          Les présentes conditions générales d’utilisation (les « Conditions ») encadrent l’utilisation de
          l’application mobile Kodakian pour iOS et Android (l’« Application ») et du site qui la présente (le
          « Site »).
        </p>
        <p>
          En créant un compte, vous acceptez ces Conditions sans réserve. Si vous ne les acceptez pas, vous ne
          devez pas utiliser l’Application.
        </p>
      </>
    ),
  },
  {
    id: "editeur",
    title: "Éditeur et hébergement",
    content: (
      <>
        <p>L’Application et le Site sont édités par :</p>
        <dl>
          <div>
            <dt>Éditeur</dt>
            <dd>
              <p>
                {publisher.name}, {publisher.legalForm}
              </p>
              <p>RNA {publisher.rna} · SIREN {publisher.siren}</p>
            </dd>
          </div>
          <div>
            <dt>Siège</dt>
            <dd>{publisher.address}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{mail}</dd>
          </div>
          <div>
            <dt>Directeur de la publication</dt>
            <dd>Le président de l’association {publisher.name}</dd>
          </div>
          <div>
            <dt>Hébergement de l’Application</dt>
            <dd>OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Les données sont hébergées en France.</dd>
          </div>
          <div>
            <dt>Hébergement du Site</dt>
            <dd>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</dd>
          </div>
        </dl>
      </>
    ),
  },
  {
    id: "service",
    title: "Le service",
    content: (
      <>
        <p>
          Kodakian transforme les téléphones des invités d’un événement (une soirée, une fête de famille…) en
          appareils photo jetables partagés :
        </p>
        <ul>
          <li>
            un organisateur crée un événement, choisit le nombre de poses par participant (12, 24, 27 ou 36) et le
            moment de la révélation ;
          </li>
          <li>les participants rejoignent l’événement avec un code d’accès ou un QR code ;</li>
          <li>
            chacun photographie à l’aveugle : aucune photo n’est visible avant la révélation, ni par son auteur, ni
            par l’organisateur, ni par nous ;
          </li>
          <li>
            à la date prévue, l’album se révèle pour tous les participants. Il reste disponible pendant 29 jours,
            puis il est définitivement supprimé.
          </li>
        </ul>
        <p>
          L’Application est gratuite et sans publicité. Nous pouvons faire évoluer ses fonctionnalités à tout
          moment. Si un service payant était un jour proposé, il ferait l’objet de conditions particulières que
          vous seriez libre d’accepter ou non.
        </p>
      </>
    ),
  },
  {
    id: "compte",
    title: "Accès et compte",
    content: (
      <>
        <p>
          L’Application est réservée aux personnes âgées d’au moins <strong>13 ans</strong>. Si vous êtes mineur,
          vous devez avoir l’accord d’un parent ou de votre représentant légal avant de l’utiliser.
        </p>
        <p>
          La connexion se fait avec votre compte Apple ou Google. Vous choisissez un nom d’affichage, visible des
          autres participants de vos événements, et vous pouvez ajouter une photo de profil. Ce nom ne doit pas
          usurper l’identité d’une autre personne ni porter atteinte aux droits d’autrui.
        </p>
        <p>
          Vous êtes responsable de l’accès à votre téléphone et à votre compte Apple ou Google. Si vous pensez
          que votre compte Kodakian est utilisé sans votre accord, écrivez-nous à {mail}.
        </p>
      </>
    ),
  },
  {
    id: "evenements",
    title: "Événements, photos et albums",
    content: (
      <>
        <h3>L’organisateur</h3>
        <p>
          L’organisateur peut modifier son événement dans les limites prévues par l’Application, partager le code
          d’accès, retirer un participant et annuler l’événement. Retirer un participant supprime ses photos.
          Annuler l’événement supprime définitivement toutes les photos, et les participants en sont prévenus.
        </p>
        <h3>Les participants</h3>
        <p>
          Chaque participant dispose d’un nombre limité de poses, fixé par l’organisateur. Une pose utilisée ne se
          récupère pas, même si l’envoi de la photo échoue. Un participant peut quitter un événement : ses photos
          sont alors supprimées.
        </p>
        <h3>Les photos</h3>
        <ul>
          <li>
            Les photos ne sont jamais enregistrées dans la photothèque de votre téléphone pendant l’événement. Elles
            sont envoyées sur nos serveurs, puis effacées du téléphone.
          </li>
          <li>
            Une photo prise sans réseau attend sur le téléphone et part dès que la connexion revient. Si
            l’Application est supprimée ou le téléphone perdu avant l’envoi, la photo est perdue.
          </li>
          <li>
            Après la révélation, chaque participant peut supprimer ses propres photos, et l’organisateur n’importe
            quelle photo de l’album. Une photo supprimée disparaît pour tout le monde, définitivement.
          </li>
        </ul>
        <h3>L’album</h3>
        <p>
          Après la révélation, tous les participants peuvent consulter l’album et enregistrer ses photos sur leur
          téléphone. Les copies ainsi enregistrées échappent ensuite à notre contrôle. L’album et ses photos sont
          supprimés de nos serveurs <strong>29 jours après la révélation</strong> : pensez à le télécharger
          avant.
        </p>
      </>
    ),
  },
  {
    id: "contenus",
    title: "Vos contenus et votre responsabilité",
    content: (
      <>
        <p>
          Vous restez responsable des photos que vous prenez et partagez avec Kodakian, ainsi que de votre nom
          d’affichage et de votre photo de profil. En particulier, vous vous engagez à :
        </p>
        <ul>
          <li>
            respecter le droit à l’image et la vie privée des personnes que vous photographiez, et ne pas
            photographier une personne qui s’y oppose ;
          </li>
          <li>
            obtenir l’accord des parents ou des représentants légaux avant de photographier un enfant, ou vous
            assurer que l’organisateur l’a obtenu ;
          </li>
          <li>
            ne partager aucun contenu illicite : contenu pédopornographique, violent, haineux, discriminatoire,
            harcelant, diffamatoire, à caractère sexuel diffusé sans le consentement des personnes concernées, ou
            portant atteinte aux droits d’un tiers (droit d’auteur, marques…).
          </li>
        </ul>
        <p>
          Les photos restent invisibles jusqu’à la révélation, y compris pour nous, et nos outils d’administration
          ne permettent pas de les afficher. Nous n’exerçons donc aucun contrôle préalable sur les contenus.
        </p>
        <h3>Signaler un contenu</h3>
        <p>
          Si une photo vous concerne ou vous semble illicite, demandez d’abord à son auteur ou à l’organisateur de
          la supprimer depuis l’album. Vous pouvez aussi nous écrire à {mail}, en précisant l’événement concerné.
          Nous examinerons rapidement chaque signalement et pourrons retirer un participant, annuler un événement
          ou suspendre un compte. Nous coopérons avec les autorités lorsque la loi l’exige.
        </p>
      </>
    ),
  },
  {
    id: "licence",
    title: "Droits sur les contenus",
    content: (
      <>
        <p>
          Vous conservez tous vos droits sur vos photos. Pour faire fonctionner le service, vous accordez à{" "}
          {publisher.name} une autorisation gratuite, non exclusive et mondiale de stocker, de copier
          techniquement (réduction de taille, miniatures, réencodage) et d’afficher vos photos aux participants de
          l’événement concerné. Cette autorisation prend fin quand la photo est supprimée de nos serveurs.
        </p>
        <p>
          En rejoignant un événement, vous acceptez que vos photos soient visibles par tous ses participants après
          la révélation, avec votre nom d’affichage et l’heure de la prise, et que ces participants puissent les
          enregistrer pour leur usage personnel.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: (
      <p>
        L’Application, le Site, leurs textes, graphismes, logos et code sont la propriété de {publisher.name} ou de
        ses partenaires. Toute reproduction ou réutilisation sans autorisation est interdite, en dehors de
        l’usage normal de l’Application.
      </p>
    ),
  },
  {
    id: "disponibilite",
    title: "Disponibilité et responsabilité",
    content: (
      <>
        <p>
          Nous faisons de notre mieux pour que l’Application fonctionne en continu et que vos photos soient
          conservées jusqu’à l’expiration de l’album. Le service est toutefois fourni gratuitement et en l’état :
          il peut être interrompu, notamment pour maintenance, et nous ne pouvons pas garantir l’absence de
          panne ou de perte de données.
        </p>
        <p>Dans les limites permises par la loi, {publisher.name} n’est pas responsable :</p>
        <ul>
          <li>des contenus partagés par les utilisateurs ;</li>
          <li>des photos qui n’ont pas pu être envoyées depuis le téléphone ;</li>
          <li>de l’usage que font les participants des photos qu’ils ont enregistrées ;</li>
          <li>
            de la disparition des photos à l’expiration de l’album, ou après leur suppression par l’organisateur ou
            par leur auteur.
          </li>
        </ul>
        <p>Rien dans ces Conditions ne limite les droits que la loi vous accorde en tant que consommateur.</p>
      </>
    ),
  },
  {
    id: "resiliation",
    title: "Suppression du compte et suspension",
    content: (
      <>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis l’Application (« Mon compte »), ou en nous
          écrivant à {mail}. Vos photos sont alors supprimées de tous les albums. Les événements que vous
          organisez sont confiés au participant arrivé le plus tôt, ou annulés s’il n’y en a pas. Le détail figure
          dans la <Link href="/confidentialite#droits">politique de confidentialité</Link>.
        </p>
        <p>
          Nous pouvons suspendre ou supprimer un compte qui ne respecte pas ces Conditions, en particulier en cas
          de contenu illicite, après vous en avoir informé lorsque c’est possible.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Données personnelles",
    content: (
      <p>
        Les données que nous traitons, leur durée de conservation et vos droits sont décrits dans notre{" "}
        <Link href="/confidentialite">politique de confidentialité</Link>. Nous ne vendons ni ne partageons vos
        données à des fins commerciales.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modification des Conditions",
    content: (
      <p>
        Nous pouvons modifier ces Conditions, par exemple pour suivre l’évolution de l’Application ou de la loi. En
        cas de changement important, nous vous en informerons dans l’Application avant son entrée en vigueur. Si
        vous continuez à utiliser l’Application ensuite, vous acceptez les nouvelles Conditions ; sinon, vous
        pouvez supprimer votre compte.
      </p>
    ),
  },
  {
    id: "droit",
    title: "Droit applicable et litiges",
    content: (
      <p>
        Ces Conditions sont soumises au droit français. En cas de difficulté, écrivez-nous d’abord à {mail} :
        nous chercherons une solution amiable. À défaut, le litige sera porté devant les tribunaux compétents
        selon les règles du droit français.
      </p>
    ),
  },
];

export default function ConditionsPage() {
  return (
    <LegalPage
      title="Conditions générales d’utilisation"
      intro={
        <p>
          Les règles du jeu de Kodakian : ce que vous pouvez attendre de nous, et ce que nous attendons de vous
          quand vous photographiez vos proches.
        </p>
      }
      sections={sections}
    />
  );
}
