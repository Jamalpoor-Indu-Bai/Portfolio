import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button';
import profileImage from '../assets/profileImage.jpg';
import socials from '../constants/socials';
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  floatingAnimation,
} from "../animations/variants";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" >
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              {/* left side */}
                <motion.div
  variants={fadeInLeft}
  initial="hidden"
  animate="visible"
  className="text-center lg:text-left"
>
                    <p className="text-lg font-medium text-emerald-400">
  Hello, I'm
</p>

<h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
  Indu Bai
  <span className="block text-emerald-400">
    Jamalpur
  </span>
</h1>

<h2 className="mt-6 text-2xl font-semibold text-gray-300">
  Full Stack Java Developer
</h2>

<p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
  I build scalable, responsive, and user-friendly web applications using Java, Spring Boot, React, and MySQL. I enjoy solving real-world problems through clean architecture and intuitive user experiences.
</p>


<motion.div
  className="mt-10 flex flex-wrap gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.1,
    duration: 0.5,
  }}
>
  <Button
    text="View Projects"
    variant="primary"
    icon={<FaArrowRight />}
    onClick={() => {
  document
    .getElementById("projects")
    ?.scrollIntoView({ behavior: "smooth" });
}}
  />

<a href="/InduBai_Resume(1).pdf" download>
  <Button
    text="Download Resume"
    variant="secondary"
    icon={<HiOutlineDownload />}
  />
  </a>
  </motion.div>

  <motion.div
  className="mt-10 flex items-center gap-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.1
  }}
>
    {socials.map((social)=>(
      <a
      key={social.name}
      href={social.url}
      target={social.name !== "email" ? "_blank" : undefined}
      rel={social.name !== "email" ? "noopener noreferrer" : undefined}
      aria-label={social.name}
      className="text-3xl text-gray-400 transition-colors duration-300 hover:text-emerald-400"
    >
      {social.name === "github" && <FaGithub />}
      {social.name === "linkedin" && <FaLinkedin />}
      {social.name === "email" && <MdEmail />}
    </a>
  ))}
  </motion.div>

                </motion.div>

                {/* right side */}
                <motion.div
  variants={fadeInRight}
  initial="hidden"
  animate="visible"
>
                    <motion.div
  className="flex justify-center"
  animate={floatingAnimation.animate}
  
>
  <div className="relative h-80 w-80">
    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl"></div>

    {/* Image */}
    <img
      src={profileImage}
      alt="Indu Bai"
      className="relative h-80 w-80 rounded-full object-cover border-4 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-transform duration-500 hover:scale-105"
    />
  </div>
</motion.div>

                </motion.div>

            </div>
        </Container>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <p className="text-sm tracking-widest uppercase text-gray-400">
        Scroll
    </p>

    <p className="text-2xl text-emerald-400">
        ↓
    </p>
</div>
    </section>
  );
};

export default Hero
