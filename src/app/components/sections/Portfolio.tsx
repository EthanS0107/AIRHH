"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    title: "Lancement de Marque — Nom1",
    category: "Stratégie & Branding",
    description:
      "Création complète de l'identité visuelle et du positionnement pour une startup tech innovante.",
    color: "from-indigo-500 to-purple-600",
    image: "/placeholder-1.svg",
  },
  {
    title: "Campagne Social Media — Nom2",
    category: "Social Media",
    description:
      "Stratégie de contenu multiplateforme ayant généré +200% d'engagement en 3 mois.",
    color: "from-purple-500 to-pink-500",
    image: "/placeholder-2.svg",
  },
  {
    title: "Refonte Digitale — Nom3",
    category: "Web Design",
    description:
      "Site vitrine sur-mesure avec une UX optimisée, augmentant les conversions de 35%.",
    color: "from-blue-500 to-indigo-600",
    image: "/placeholder-3.svg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Portfolio"
          title="Nos dernières réalisations"
          subtitle="Chaque projet est une histoire. Découvrez comment nous avons aidé nos clients à se démarquer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-8xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white font-semibold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Voir le projet →
                  </motion.span>
                </div>
              </div>

              {/* Info */}
              <span className="text-sm font-semibold text-primary mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
