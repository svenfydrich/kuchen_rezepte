"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { use } from "react";
import { getCakeById } from "../../data/cakes";
import { notFound } from "next/navigation";

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RecipePage({ params }: RecipePageProps) {
  const { id } = use(params);
  const cake = getCakeById(id);

  if (!cake) {
    notFound();
  }

  const fullSizeImage = cake.image.replace("-card.jpg", ".jpg");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-bakery-warm hover:text-bakery-brown mb-8 transition-colors duration-200 font-body text-lg"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zurück zu allen Kuchen
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative h-96 w-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={fullSizeImage}
                alt={cake.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </motion.div>

            <div className="p-8">
              <motion.h1
                className="text-4xl md:text-5xl font-heading font-bold text-bakery-brown mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {cake.name}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-8 font-body leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {cake.description}
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="bg-bakery-cream rounded-lg p-6 text-center border border-orange-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-heading font-bold text-bakery-brown">
                    {cake.prepTime}
                  </div>
                  <div className="text-base text-gray-600 font-body">
                    Vorbereitungszeit
                  </div>
                </motion.div>
                <motion.div
                  className="bg-bakery-cream rounded-lg p-6 text-center border border-orange-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-heading font-bold text-bakery-brown">
                    {cake.cookTime}
                  </div>
                  <div className="text-base text-gray-600 font-body">
                    Backzeit
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  className="text-3xl font-heading font-bold text-bakery-brown mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Zutaten
                </motion.h2>
                <ul className="space-y-3">
                  {cake.ingredients.map((ingredient, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start font-body"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="w-3 h-3 bg-bakery-warm rounded-full mt-2 mr-4 flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      ></motion.span>
                      <span className="text-lg text-gray-700">
                        {ingredient}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  className="text-3xl font-heading font-bold text-bakery-brown mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Zubereitung
                </motion.h2>
                <ol className="space-y-6">
                  {cake.instructions.map((instruction, index) => (
                    <motion.li
                      key={index}
                      className="flex font-body"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="bg-bakery-warm text-bakery-brown rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-5 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {index + 1}
                      </motion.span>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {instruction}
                      </span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
