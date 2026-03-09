"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "1. Éditeur du site",
    content: [
      "Le site **airhh.fr** est édité par :",
      "**AIRHH** — Agence de communication",
      "Forme juridique : [À compléter]",
      "Siège social : Compiègne, France",
      "E-mail : hello@airhh.fr",
      "Téléphone : +33 1 23 45 67 89",
      "SIRET : [À compléter]",
      "N° TVA intracommunautaire : [À compléter]",
    ],
  },
  {
    title: "2. Directeur de la publication",
    content: [
      "Le directeur de la publication est le représentant légal de la société AIRHH.",
      "Contact : hello@airhh.fr",
    ],
  },
  {
    title: "3. Hébergement",
    content: [
      "Ce site est hébergé par :",
      "**Vercel Inc.**",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "Site web : vercel.com",
    ],
  },
  {
    title: "4. Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, sons, logiciels…) est la propriété exclusive d'AIRHH ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l'autorisation préalable et écrite d'AIRHH est interdite et engagerait la responsabilité civile et/ou pénale de son auteur.",
    ],
  },
  {
    title: "5. Données personnelles",
    content: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.",
      "Les données collectées via le formulaire de contact sont utilisées uniquement dans le but de répondre à vos demandes et ne sont pas transmises à des tiers.",
      "Pour exercer vos droits, contactez-nous à : **hello@airhh.fr**",
    ],
  },
  {
    title: "6. Cookies",
    content: [
      "Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies.",
      "Vous pouvez configurer votre navigateur pour refuser les cookies. Certaines fonctionnalités du site pourraient alors ne pas être disponibles.",
    ],
  },
  {
    title: "7. Limitation de responsabilité",
    content: [
      "AIRHH s'efforce de fournir des informations aussi précises que possible sur ce site. Cependant, elle ne pourra être tenue responsable des omissions, inexactitudes et des manques dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires.",
      "Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres sites internet. AIRHH n'est pas responsable du contenu de ces sites tiers.",
    ],
  },
  {
    title: "8. Droit applicable",
    content: [
      "Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.",
    ],
  },
];

function parseMarkdown(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <Link
            href="/"
            className="flex w-fit items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-10 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              className="w-4 h-4 stroke-current group-hover:-translate-x-0.5 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>

          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            Informations légales
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            Mentions légales
          </h1>
          <p className="text-gray-400 mt-4 text-sm">
            Dernière mise à jour : mars 2026
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.06,
                ease: "easeOut",
              }}
              className="border-l-2 border-primary/30 pl-6"
            >
              <h2
                className="text-lg font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif" }}
              >
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((line, j) => (
                  <p key={j} className="text-gray-500 leading-relaxed text-sm">
                    {parseMarkdown(line)}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-400 text-sm">
            Des questions ?{" "}
            <a
              href="mailto:hello@airhh.fr"
              className="text-primary hover:underline font-medium"
            >
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
