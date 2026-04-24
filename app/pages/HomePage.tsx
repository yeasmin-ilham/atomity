"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Img1 from "../assets/aws.png";
import Img2 from "../assets/blue.png";
import Img3 from "../assets/cloud.png";
import Heptagon from "../components/Heptagon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CornerDir = { x: number; y: number };

const bars = [
  { label: "CPU",     h: "h-32", delay: 0.1 },
  { label: "GPU",     h: "h-12", delay: 0.2 },
  { label: "RAM",     h: "h-24", delay: 0.3 },
  { label: "PV",      h: "h-16", delay: 0.4 },
  { label: "Network", h: "h-20", delay: 0.5 },
  { label: "Cloud",   h: "h-10", delay: 0.6 },
];

const cornerVariants: Variants = {
  hidden: (dir: CornerDir) => ({
    opacity: 0,
    x: dir.x,
    y: dir.y,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};



export default function HomePage() {
  return (

    <div>

      {/* Navbar */}
      <Navbar/>

    <main className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl flex items-center justify-center">
        <div className="relative">

          {/* ── Center Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-primary-foreground"
          >
            <div className="grid grid-cols-6 gap-6 items-end h-40">
              {bars.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <motion.div
                    className={`w-5 sm:w-9 ${item.h} bg-primary rounded-md`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{
                      duration: 0.55,
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: 0.5 + item.delay,
                    }}
                  />
                  <motion.span
                    className="text-xs text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + item.delay }}
                  >
                    {item.label}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── AWS — top left ── */}
          <motion.div
            className="absolute -top-20 -left-20 md:-top-40 md:-left-40 lg:-top-50 lg:-left-50"
            custom={{ x: -40, y: -40 } satisfies CornerDir}
            variants={cornerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div>
              <Heptagon className="bg-gradient-to-r from-gradient-start to-gradient-end"/>
              <Image src={Img1} alt="AWS" className="object-cover w-7 sm:w-8 lg:w-14" />
            </motion.div>
          </motion.div>

          {/* ── Azure — top right ── */}
          <motion.div
            className="absolute -top-20 -right-20 md:-top-40 md:-right-40 lg:-top-50 lg:-right-50"
            custom={{ x: 40, y: -40 } satisfies CornerDir}
            variants={cornerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div>
              <Heptagon className="bg-gradient-to-r from-gradient-start to-gradient-end"/>
              <div className="flex flex-row items-center">
                <Image src={Img2} alt="Azure" className="object-cover w-5 sm:w-8 lg:w-11" />
                <p className="text-blue-500 text-xs md:text-[18px]">Azure</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Google Cloud — bottom left ── */}
          <motion.div
            className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 lg:-bottom-50 lg:-left-50"
            custom={{ x: -40, y: 40 } satisfies CornerDir}
            variants={cornerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div >
              <Heptagon className="bg-gradient-to-r from-gradient-start to-gradient-end"/>
              <Image src={Img3} alt="GCP" className="object-cover w-9 sm:w-11 lg:w-18" />
            </motion.div>
          </motion.div>

          {/* ── On-Premise — bottom right ── */}
          <motion.div
            className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 lg:-bottom-50 lg:-right-50"
            custom={{ x: 40, y: 40 } satisfies CornerDir}
            variants={cornerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.div>
              <Heptagon className="bg-gradient-to-r from-gradient-start to-gradient-end" />
              <p className="font-semibold text-[14px]">On-Premise</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </main>

    {/* Footer */}
    <Footer/>
    
    </div>
  );
}
