"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Heptagon from "../components/Heptagon";
import HoverCard from "../components/HoverCard";

export default function ProductPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const items = [
    { id: "one", color: "bg-foreground" },
    { id: "two", color: "bg-muted" },
    { id: "three", color: "bg-accent" },
    { id: "four", color: "bg-secondary-foreground" },
  ];

  return (
    <section> 

      <div className="min-h-screen bg-secondary flex flex-col items-center justify-center p-6 gap-30">
            
             {/* Title */}
        <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-semibold text-center font-sans">
          Atomity <span className="text-sky-600"> Products</span>
        </h1>

        <div className="flex gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Heptagon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Heptagon className={item.color} />
                <p className="pt-2 text-muted font-medium">Hover for details</p>
              </motion.div>

              {/* Hover Card */}
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50"
                  >
                    <HoverCard />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}