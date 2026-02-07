
'use client';

import { Translations } from '../app/data';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Avicena Fahmi. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com/AvicenaFahmiWibisono/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://id.linkedin.com/in/avicena-fahmi-785679208" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/avicenaazz/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
