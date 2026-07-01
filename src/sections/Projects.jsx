import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { projects } from "../constants/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Some Of My Recent Work"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group flex h-full flex-col overflow-hidden"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      text={tech}
                    />
                  ))}
                </div>

                <div className="mt-auto pt-8 flex flex-wrap gap-4">
  {project.github && (
    <Button
      text="GitHub"
      variant="secondary"
      href={project.github}
      icon={<FaGithub />}
    />
  )}

  {project.live && (
    <Button
      text="Live Demo"
      variant="primary"
      href={project.live}
      icon={<FiExternalLink />}
    />
  )}
</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;