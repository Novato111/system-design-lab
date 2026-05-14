"use client";

import { motion } from "framer-motion";

export function VerticalMarquee() {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 top-0 z-50 flex w-7 items-center overflow-hidden bg-gradient-to-b from-[#e65300] via-[#ff5c00] to-[#ff7a1a] shadow-xl">
      <motion.div
        className="flex flex-col"
        // Animating from -50% to 0% makes it flow downwards continuously 
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          duration: 12, // Adjust for faster/slower speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Half 1 */}
        <div className="flex flex-col">
          {[...Array(15)].map((_, i) => (
            <span
              key={`first-${i}`}
              className="py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90"
              style={{ writingMode: "vertical-rl" }}
            >
              Launching soon !
            </span>
          ))}
        </div>
        {/* Half 2 (Exact duplicate for seamless looping) */}
        <div className="flex flex-col">
          {[...Array(15)].map((_, i) => (
            <span
              key={`second-${i}`}
              className="py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90"
              style={{ writingMode: "vertical-rl" }}
            >
              Launching soon !
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}