"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Cake } from "../data/cakes";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <Link href={`/recipe/${cake.id}`} className="group">
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100"
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative h-64 w-full">
          <Image
            src={cake.image}
            alt={cake.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <motion.h3
            className="text-2xl font-heading font-semibold text-bakery-brown mb-3"
            whileHover={{ color: "#ea580c" }}
            transition={{ duration: 0.2 }}
          >
            {cake.name}
          </motion.h3>
          <p className="text-base text-gray-600 leading-relaxed font-body">
            {cake.description}
          </p>
          {cake.allergen && cake.allergen.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cake.allergen.map((allergen, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full border border-orange-200"
                >
                  {allergen}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
