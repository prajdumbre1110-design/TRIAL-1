"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Prajakta Dumbre
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}