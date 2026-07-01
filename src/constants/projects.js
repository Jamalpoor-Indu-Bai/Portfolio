import portfolioImg from "../assets/projects/portfolio.png";
import neurofleetImg from "../assets/projects/neurofleet.png";
import tripnovaImg from "../assets/projects/tripnova.png";
import skill4shineImg from "../assets/projects/skill4shine.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Modern responsive portfolio built using React and Tailwind CSS to showcase my projects, skills, and achievements.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    github: "",
    live: "",
    image: portfolioImg,
    featured: true,
  },
  {
    id: 2,
    title: "NeuroFleet-X",
    description:
      "Fleet management platform with AI-powered ETA prediction and real-time vehicle tracking.",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "Google Maps API"
    ],
    github: "https://github.com/Jamalpoor-Indu-Bai/NeuroFleetX_Project",
    live: "https://neurofleet-x.netlify.app/",
    image: neurofleetImg,
    featured: true,
  },
  {
    id: 3,
    title: "TripNova",
    description:
      "AI-powered travel planner that generates personalized itineraries based on user preferences and budget.",
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "OpenAI API"
    ],
    github: "https://github.com/Jamalpoor-Indu-Bai/ai-trip-planner",
    live: "https://trip-nova.netlify.app/",
    image: tripnovaImg,
    featured: true,
  },
  {
    id: 4,
    title: "Skill4Shine",
    description:
      "Interview preparation platform with coding practice, aptitude tests, and learning resources.",
    technologies: [
      "React",
      "Django",
      "Flask",
      "MySQL"
    ],
    github: "https://github.com/Skill4Shine/skill4shine",
    live: "https://skill4shine.vercel.app/",
    image: skill4shineImg,
    featured: true,
  }
];

export default projects;