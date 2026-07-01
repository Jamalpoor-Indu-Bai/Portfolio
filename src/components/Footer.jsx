import React from "react";
import Container from "./Container";
import socials from "../constants/socials";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <Container>
        <div className="flex flex-col items-center text-center justify-around gap-6 lg:flex-row">

            {/* Copyright */}

          <p className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Indu Bai Jamalpur.
            All rights reserved.
          </p>

          {/* Social Icons */}

          <div className="mt-6 flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== "email" ? "_blank" : undefined}
                rel={
                  social.name !== "email"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.name}
                className="text-2xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-emerald-400"
              >
                {social.name === "github" && <FaGithub />}
                {social.name === "linkedin" && <FaLinkedin />}
                {social.name === "email" && <MdEmail />}
              </a>
            ))}
          </div>

          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;