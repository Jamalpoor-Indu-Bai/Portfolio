import React from 'react'
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { skills } from "../constants/skills";
const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle title="Skills" subtitle="My Technical Skills" />
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill)=>(
                <Card key={skill.name} className="group flex flex-col items-center justify-center p-6">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
  <img
    src={skill.icon}
    alt={skill.name}
    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
  />
</div>
                    <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                    <p className="mt-2 text-gray-400">{skill.category}</p>
                    <p className="mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">{skill.level}</p>
                </Card>
            ))}
        </div>

      </Container>
    </section>
  );
};

export default Skills
