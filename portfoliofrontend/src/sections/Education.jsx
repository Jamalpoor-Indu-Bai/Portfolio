import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { education } from "../constants/education";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

const Education = () => {
  return (
    <section id="education" className="py-28">
      <Container>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Education"
            subtitle="My Academic Journey"
          />
        </motion.div>

        <div className="relative mt-20 max-w-4xl mx-auto">

          {/* Timeline */}
          <div className="absolute left-5 top-0 h-full w-px bg-[#30363d]" />

          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-10 pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] top-8 h-4 w-4 rounded-full bg-[#3fb950] border-4 border-[#0d1117]" />

              <Card className="border border-[#30363d] hover:border-[#3fb950] transition-all duration-300">

                <span className="inline-flex rounded-full bg-[#21262d] border border-[#30363d] px-3 py-1 text-xs font-medium text-[#8b949e]">
                  {item.stage}
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-[#f0f6fc]">
                  {item.institute}
                </h3>

                <p className="mt-2 text-[#8b949e]">
                  {item.degree}
                </p>

                <p className="mt-1 text-sm text-[#8b949e]">
                  {item.duration}
                </p>

                <p className="mt-4 text-lg font-semibold text-[#3fb950]">
                  {item.score}
                </p>

                <p className="mt-5 border-l-2 border-[#30363d] pl-4 italic text-[#8b949e]">
                  {item.quote}
                </p>

              </Card>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Education;