import React from "react";
import { motion } from "framer-motion";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

import {
  fadeInLeft,
  fadeInUp,
  staggerContainer,
} from "../animations/variants";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaFolderOpen,
  FaCode,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-28">
      <Container>

        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            title="About Me"
            subtitle="Know More About Me"
          />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl font-bold leading-tight text-white">
              Passionate Full Stack Java Developer
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I am a passionate Full Stack Java Developer who enjoys building
              scalable, responsive, and user-friendly web applications. I love
              solving real-world problems through clean code and modern
              technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My expertise includes Java, Spring Boot, React, MySQL, REST APIs,
              and Data Structures & Algorithms. I continuously learn new
              technologies to become a better software engineer.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <FaGraduationCap className="text-3xl text-green-500" />

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Backend Systems
                </h4>

                <p className="mt-2 text-gray-400">
                  Building scalable backend applications using Java, Spring
                  Boot, and REST APIs.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <FaLaptopCode className="text-3xl text-green-500" />

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Scalable APIs
                </h4>

                <p className="mt-2 text-gray-400">
                  Designing secure and efficient REST APIs with Spring Security,
                  JPA, and Hibernate.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <FaFolderOpen className="text-3xl text-green-500" />

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Full Stack Projects
                </h4>

                <p className="mt-2 text-gray-400">
                  Developed AI-powered applications using React, Spring Boot,
                  and MySQL.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <FaCode className="text-3xl text-green-500" />

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Problem Solving
                </h4>

                <p className="mt-2 text-gray-400">
                  Solved 300+ coding problems focusing on Data Structures,
                  Algorithms, and OOP concepts.
                </p>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;