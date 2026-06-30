import React from 'react'
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

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
            <SectionTitle
    title="About Me"
    subtitle="Know More About Me"
        />

<div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div>
    <h3 className="text-4xl leading-tight font-bold text-white">
  Passionate Full Stack Java Developer
</h3>

<p className="mt-6 text-lg leading-8 text-gray-400">
  I am a passionate Full Stack Java Developer who enjoys
  building scalable, responsive, and user-friendly web
  applications. I love solving real-world problems through
  clean code and modern technologies.
</p>

<p className="mt-6 text-lg leading-8 text-gray-400">
  My expertise includes Java, Spring Boot, React,
  MySQL, REST APIs, and Data Structures &
  Algorithms. I continuously learn new technologies
  to become a better software engineer.
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
    <Card>
        <FaGraduationCap className="text-3xl text-emerald-400" />

<h4 className="mt-4 text-xl font-semibold text-white">
  Education
</h4>

<p className="mt-2 text-gray-400">
 B.Tech in Computer Science Engineering
</p>

<p className="text-gray-500">
  VMEG, Hyderabad • 2023 - 2027
</p>

</Card>
<Card>
<FaLaptopCode className="text-3xl text-emerald-400" />

<h4 className="mt-4 text-xl font-semibold text-white">
  Experience
</h4>

<p className="mt-2 text-3xl font-bold text-emerald-400">
  Java Full Stack
</p>

<p className="text-gray-500">
  Building Real Projects
</p>

</Card>


<Card>
<FaFolderOpen className="text-3xl text-emerald-400" />

<h4 className="mt-4 text-xl font-semibold text-white">
  Projects
</h4>

<p className="mt-2 text-3xl font-bold text-emerald-400">
 5+
</p>

<p className="text-gray-500">
  Completed Projects
</p>


</Card>



<Card>
<FaCode className="text-3xl text-emerald-400" />

<h4 className="mt-4 text-xl font-semibold text-white">
  DSA
</h4>

<p className="mt-2 text-3xl font-bold text-emerald-400">
 300+
</p>

<p className="text-gray-500">
  Problems Solved
</p>


</Card>
</div>

</div>
        </Container>
    </section>
  );
};

export default About
