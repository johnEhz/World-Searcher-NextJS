import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-700 bg-gray-50 dark:bg-[#1d272f] text-neutral-800 dark:text-neutral-300">
      <ul className="flex py-12">
        <li className="border-r border-neutral-300 dark:border-neutral-500 pr-4 mr-4">
          <Link href="https://www.linkedin.com/in/john-eh/" target="blank" >
            <FaLinkedinIn size={23} className="hover:text-blue-600 hover:scale-110 transition-all"/>
          </Link>
        </li>
        <li className="border-r border-neutral-300 dark:border-neutral-500 pr-4 mr-4">
          <Link href="https://github.com/johnEhz" target="blank">
            <FaGithub size={23} className="hover:text-gray-500 hover:scale-110 transition-colors" />
          </Link>
        </li>
        <li>
          <Link href="mailto:johnhdz.160@gmail.com" target="blank">
            <SiGmail size={23} className="hover:text-red-700 hover:scale-110 transition-colors" />
          </Link>
        </li>
      </ul>
      <div className="h-12 border-t border-neutral-200 dark:border-neutral-700 w-full text-center flex items-center justify-center bg-gray-100 dark:bg-[#1b252d] text-sm">
        By JDev {"</>"}
      </div>
    </footer>
  );
};

export default Footer;
