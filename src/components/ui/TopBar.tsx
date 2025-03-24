"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-yellow-500 text-black py-2 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
          <span className="font-semibold">Have any question?</span>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 inline-block" />
            <span>
              <a href="tel:+919833709566" className="hover:underline">+919833709566</a> | 
              <a href="tel:+919323255600" className="hover:underline">+919323255600</a> | 
              <a href="tel:+918450960483" className="hover:underline">+918450960483</a>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 inline-block" />
            <a href="mailto:pillaiafficies@mes.ac.in" className="hover:underline">pillaiafficies@mes.ac.in</a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right font-semibold">
          <Link href="https://fifacies.pimsr.ac.in/wp-content/uploads/2024/09/PILLAI-2024-2025-1.pdf" target="_blank" className="hover:underline">
            DOWNLOAD BROCHURE
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="https://fifacies.pimsr.ac.in/admissions/faqs/" target="_blank" className="hover:underline">
            FAQs
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="https://fifacies.pimsr.ac.in/" target="_blank" className="hover:underline">
          Know More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
