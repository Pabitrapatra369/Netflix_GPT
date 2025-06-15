import React from 'react'
import { Linkedin, Github } from "lucide-react";
const Footer = () => {
     const year = new Date().getFullYear();
  return (
    <div className='absolute font-bold z-20 text-white  '>
         <footer className="w-screen bg-[#141414] text-zinc-400">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand + Tagline */}
        <div className="col-span-1 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white tracking-tight">MovieFlix</h2>
          <p className="max-w-sm leading-relaxed">
            A Netflix-inspired movie streaming UI built with React & Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase font-medium text-zinc-300">Quick Links</span>
          <a href="#" className="hover:text-white transition-colors text-sm">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors text-sm">
            Browse
          </a>
          <a href="#" className="hover:text-white transition-colors text-sm">
            My List
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase font-medium text-zinc-300">Follow Me</span>
          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://www.linkedin.com/in/pabitra-patra/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/Pabitrapatra369/Netflix_GPT"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <p className="py-4 text-center text-xs sm:text-sm text-zinc-500">
          © {year} Pabitra Patra. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer