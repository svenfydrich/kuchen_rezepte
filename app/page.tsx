"use client";
import { cakes } from "./data/cakes";
import CakeCard from "./components/CakeCard";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="home-page min-h-screen h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 py-8 h-full">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold text-bakery-brown mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Sven&apos;s Kuchenrezepte
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Hier findest du die Rezepte der Kuchen, die ich mitgebracht habe.
          </motion.p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <CakeCard cake={cake} />
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          className="text-center mt-60 pt-8 border-t border-orange-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-600 font-body">Mit 💚 gebacken</p>
        </motion.footer>
      </div>
    </div>
  );
}
