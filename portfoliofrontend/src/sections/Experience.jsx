import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../constants/experience";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Experience"
            subtitle="My Professional Journey"
          />
        </motion.div>

        <div className="mt-20">
          {experience.map((item) => (
            <TimelineItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}