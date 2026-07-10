import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { fadeInUp } from "../animations/variants";

export default function ExperienceCard({ experience }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      rounded-2xl
      border
      border-[#30363d]
      bg-[#161b22]
      p-8
      transition-all
      duration-300
      hover:border-emerald-500/50
      hover:shadow-[0_0_35px_rgba(63,185,80,.18)]
      "
    >
      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/15">
          <FaBriefcase
            className="text-emerald-400"
            size={26}
          />
        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            {experience.role}
          </h3>

          <p className="text-lg text-emerald-400">
            {experience.company}
          </p>

        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-gray-400">

        <div className="flex items-center gap-2">
          <MdDateRange />
          {experience.duration}
        </div>

        <div className="flex items-center gap-2">
          {/* <HiOutlineLocationMarker /> */}
          {experience.type}
        </div>

      </div>

      <ul className="mt-8 space-y-3">

        {experience.description.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-300"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>

            {point}
          </li>
        ))}

      </ul>

      <div className="mt-8 flex flex-wrap gap-3">

        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="
            rounded-full
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-3
            py-1
            text-sm
            text-emerald-300
            "
          >
            {tech}
          </span>
        ))}

      </div>

    </motion.div>
  );
}