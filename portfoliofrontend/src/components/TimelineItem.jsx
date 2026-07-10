import { motion } from "framer-motion";

export default function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-16 pb-16"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-[#30363d]" />

      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-1
          top-2
          h-6
          w-6
          rounded-full
          border-4
          border-[#0d1117]
          bg-emerald-400
          shadow-[0_0_20px_rgba(16,185,129,0.8)]
        "
      />

      {/* Card */}
      <div
        className="
          rounded-2xl
          border
          border-[#30363d]
          bg-[#161b22]
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-emerald-400
          hover:shadow-[0_0_30px_rgba(16,185,129,.2)]
        "
      >
        <h3 className="text-2xl font-bold text-white">
          {item.role}
        </h3>

        <p className="mt-1 text-lg text-emerald-400">
          {item.company}
        </p>

        <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-400">
          <span>📅 {item.duration}</span>
          <span>💻 {item.type}</span>
        </div>

        <ul className="mt-6 space-y-3">
          {item.description.map((point, index) => (
            <li
              key={index}
              className="flex gap-3 text-gray-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-emerald-500/20
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
      </div>
    </motion.div>
  );
}