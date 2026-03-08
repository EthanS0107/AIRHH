"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import AnimatedBlobs from "../ui/AnimatedBlobs";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <AnimatedBlobs />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              Contactez-nous
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              Prêt à donner un{" "}
              <span className="gradient-text">nouveau souffle</span> à votre
              marque ?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Réservez un appel découverte gratuit de 30 minutes. Nous
              analyserons ensemble vos besoins et vous proposerons une stratégie
              sur-mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="mailto:hello@airhh.fr" size="lg">
                Réserver un audit gratuit
              </Button>
              <Button href="tel:+33123456789" variant="secondary" size="lg">
                +33 1 23 45 67 89
              </Button>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass-light rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jean"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean@entreprise.fr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Entreprise
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Parlez-nous de votre projet..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 resize-none"
                />
              </div>

              <Button className="w-full" size="lg">
                Envoyer ma demande
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
