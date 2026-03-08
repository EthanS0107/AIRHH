"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const reasons = [
  {
    title: "Approche sur-mesure",
    description:
      "Chaque entreprise est unique. Nous construisons des stratégies personnalisées qui reflètent votre identité et vos ambitions.",
  },
  {
    title: "L'humain d'abord",
    description:
      "HH = Human to Human. Nous plaçons la relation humaine au cœur de chaque projet pour créer des connexions authentiques.",
  },
  {
    title: "Résultats mesurables",
    description:
      "Pas de blabla, des chiffres. Nous pilotons chaque action avec des KPIs clairs pour garantir un ROI tangible.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Pourquoi nous ?"
          title="L'agence qui connecte l'humain à l'impact"
          subtitle="Nous combinons créativité, stratégie et technologie pour transformer votre vision en résultats concrets."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <GlassCard key={i} delay={i * 0.15}>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo 1 */}
            <svg
              width="120"
              height="32"
              viewBox="0 0 120 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 hover:text-foreground transition-colors"
            >
              <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="currentColor" />
              <text
                x="40"
                y="22"
                fontFamily="sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="currentColor"
              >
                Nom1
              </text>
            </svg>
            {/* Logo 2 */}
            <svg
              width="110"
              height="32"
              viewBox="0 0 110 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 hover:text-foreground transition-colors"
            >
              <circle cx="16" cy="16" r="16" fill="currentColor" />
              <circle cx="16" cy="16" r="6" fill="var(--background)" />
              <text
                x="40"
                y="22"
                fontFamily="sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="currentColor"
              >
                Nom2
              </text>
            </svg>
            {/* Logo 3 */}
            <svg
              width="130"
              height="32"
              viewBox="0 0 130 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 hover:text-foreground transition-colors"
            >
              <rect
                x="0"
                y="4"
                width="24"
                height="24"
                rx="4"
                fill="currentColor"
              />
              <rect
                x="8"
                y="12"
                width="8"
                height="8"
                rx="2"
                fill="var(--background)"
              />
              <text
                x="36"
                y="22"
                fontFamily="sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="currentColor"
              >
                Nom3
              </text>
            </svg>
            {/* Logo 4 */}
            <svg
              width="120"
              height="32"
              viewBox="0 0 120 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 hover:text-foreground transition-colors"
            >
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16H0Z"
                fill="currentColor"
              />
              <text
                x="40"
                y="22"
                fontFamily="sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="currentColor"
              >
                Nom4
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
