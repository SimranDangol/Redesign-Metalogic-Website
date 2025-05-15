import { motion } from "framer-motion";
import TechItemCard from "./TechItemCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

type TechItem = {
  name: string;
  logo: string;
  color: string;
};

type Props = {
  techStack: TechItem[];
};

export default function TechStackGrid({ techStack }: Props) {
  return (
    <motion.div className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900">
          Our <span className="text-blue-600">Tech Stack</span>
        </h3>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          We work with cutting-edge technologies to deliver exceptional results.
        </p>
      </div>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6" variants={containerVariants}>
        {techStack.map((tech, index) => (
          <TechItemCard key={tech.name} {...tech} animate={index % 2 === 0} />
        ))}
      </motion.div>
    </motion.div>
  );
}
