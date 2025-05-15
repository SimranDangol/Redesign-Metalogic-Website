"use client";

import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
} from "lucide-react";

import ServiceCard from "./ServiceCard";
import TechStackGrid from "./TechStackGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const servicesData = [
  {
    icon: <Code className="text-blue-600" />,
    title: "Web Development",
    description: "Custom web solutions tailored to your needs.",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: <Globe className="text-green-600" />,
    title: "SEO Optimization",
    description: "Boost your visibility on search engines.",
    color: "bg-green-50",
    borderColor: "border-green-200",
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: <Smartphone className="text-purple-600" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps using modern tech.",
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    gradient: "from-purple-500 to-purple-700",
  },
];

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-blue-100" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-gray-100" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-100" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-100" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-orange-100" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-100" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-blue-100" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "bg-yellow-100" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "bg-blue-100" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "bg-pink-100" },
];

export default function Service() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Our Expertise</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive <span className="text-blue-600">Digital Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We deliver end-to-end technology services to transform your business.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <TechStackGrid techStack={techStack} />
      </div>
    </section>
  );
}
