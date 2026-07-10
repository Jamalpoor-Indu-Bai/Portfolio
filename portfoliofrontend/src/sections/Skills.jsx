import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { skills } from "../constants/skills";
import { motion } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
} from "../animations/variants";

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <Container>

       <motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <SectionTitle
    title="Skills"
    subtitle="Technologies I Work With"
  />
</motion.div>

        <motion.div
  className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

          {skills.map((skill) => (
  <motion.div
    key={skill.category}
    variants={fadeInUp}
    className="h-full"
  >
    <Card className="h-full flex flex-col">
              <h3 className="text-2xl font-bold text-green-500 0 mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
  {skill.technologies.map((tech) => {
    const Icon = tech.icon;

    return (
      <motion.div
        key={tech.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Badge>
  <i className={`${tech.icon} text-xl`}></i>
  <span>{tech.name}</span>
</Badge>
      </motion.div>
    );
  })}
</div>

            </Card>
  </motion.div>
          ))}

        </motion.div>

      </Container>
    </section>
  );
};

export default Skills;