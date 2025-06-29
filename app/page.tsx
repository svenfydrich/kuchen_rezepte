"use client";
import { cakes } from "./data/cakes";
import CakeCard from "./components/CakeCard";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="home-page min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
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
          <motion.div
            className="w-[90%] h-[3px] bg-bakery-brown mx-auto mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
          <motion.p
            className="text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Hier findest du die Rezepte der Kuchen, die ich mitgebracht habe.
          </motion.p>
          <motion.p
            className="text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            Alle rein pflanzlich, und kinderleicht. Also naja wenn sogar ich es
            hinbekomme die Kuchen zu backen, sollte das schon klappen.
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
                delay: 1.5 + index * 0.3,
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
          className="text-center mt-[10vh] pt-8 border-t border-orange-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 3.0, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg text-gray-600 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          >
            <motion.a
              href="https://veganbacken.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-bakery-brown"
              whileHover={{ color: "#d2691e" }}
              transition={{ duration: 0.2 }}
            >
              Hier
            </motion.a>
            {
              " findest du noch weitere vegane Backrezepte. (Kann eigentlich nicht backen lol)"
            }
          </motion.p>
          <div className="relative w-fit mx-auto mt-15 mb-5">
            <div className="absolute -top-10 -left-15 bg-white text-bakery-brown px-3 py-1 rounded-full shadow text-sm font-heading flex items-center">
              Was geht?
              <span className="block w-0 h-0 border-t-8 border-t-white border-l-8 border-l-transparent border-r-8 border-r-transparent absolute left-15 top-full"></span>
            </div>
            <motion.img
              src="/images/gustav.png"
              alt="Nein das bin nicht ich, das ist Gustav. Er hat mir geholfen."
              width={80}
              height={80}
              className="rounded-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                rotate: 360,
                scale: [1, 1.18, 0.92, 1.18, 1],
                transition: {
                  rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                  scale: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                },
              }}
              whileTap={{
                rotate: 360,
                scale: [1, 1.18, 0.92, 1.18, 1],
                transition: {
                  rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                  scale: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                },
              }}
            />
          </div>
          <motion.p
            className="text-lg text-gray-600 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.0, delay: 4.0, ease: "easeOut" }}
          >
            Mit 💚 gebacken
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
}
