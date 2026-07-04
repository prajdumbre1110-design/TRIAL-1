"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4"
        >
          Finance • Investment Operations • Financial Reporting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Prajakta Dumbre
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 mt-6"
        >
          Senior Finance Professional | Fund Accounting | Investment Operations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-8"
        >
          Finance professional with 5+ years of experience across Fund
          Accounting, Financial Reporting, Reconciliations, Alternative
          Investments, and Investment Operations, helping global financial
          institutions deliver accurate and timely reporting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experience"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition"
          >
            View Experience
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-gray-500 px-8 py-4 font-semibold hover:border-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}