"use client";

import { motion } from "framer-motion";

interface Step {
  step: string;
  title: string;
  description: string;
}

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((phase, index) => (
        <motion.div
          key={phase.step}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 + 0.3, ease: "easeOut" }}
              className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-700 origin-left"
            />
          )}

          <div className="relative text-center">
            {/* Step circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b] text-white text-2xl font-bold mb-4"
            >
              {phase.step}
            </motion.div>

            <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
            <p className="text-gray-400">{phase.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
