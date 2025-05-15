import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Smartphone, ArrowRight } from "lucide-react";

import { Card, CardContent } from "../../ui/card";

// Service card & tech stack types
type ServiceCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  gradient: string;
};

type TechItem = {
  name: string;
  logo: string;
  color: string;
};

const MotionCard = motion(Card);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const techStackVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Dummy data
const servicesData: ServiceCard[] = [
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

const techStack: TechItem[] = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-100",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-gray-100",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-100",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-blue-100",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "bg-orange-100",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "bg-orange-100",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "bg-blue-100",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "bg-yellow-100",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "bg-blue-100",
  },
  {
    name: "Sass",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    color: "bg-pink-100",
  },
];

const processSteps = [
  {
    title: "Step 1",
    subtitle: "Fill Out a Form",
    description: "Give us a sense of your business and marketing needs",
  },
  {
    title: "Step 2",
    subtitle: "Get a free consultation",
    description: "Give us a sense of your business and marketing needs",
  },
  {
    title: "Step 3",
    subtitle: "Get a quote",
    description:
      "See a transparent development and marketing plan based on your unique needs",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Our Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive{" "}
            <span className="text-blue-600">Digital Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We deliver end-to-end technology services to transform your
            business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <MotionCard
              key={index}
              className={`group relative overflow-hidden border ${service.borderColor} rounded-xl shadow-sm ${service.color}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <motion.div
                  className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient} shadow-lg`}
                  variants={iconVariants}
                >
                  {service.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>

        {/* HOW IT WORKS Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            HOW IT WORKS
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 mb-12">
            Elevate your business to unprecedented success through the
            synergistic collaboration and expertise offered by our agency,
            propelling your brand to new heights.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Our <span className="text-blue-600">Tech Stack</span>
            </h3>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver exceptional
              results.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center p-6 rounded-xl ${tech.color} shadow-sm`}
                variants={techStackVariants}
                whileHover="hover"
                animate={index % 2 === 0 ? pulseAnimation : {}}
              >
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project CTA Section */}
        <motion.div
          className="mt-32 text-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Do you have a project in mind?
          </h2>
          <p className="max-w-2xl mx-auto text-xl mb-8">
            Reach out to us. Let's uncover how we can bring additional value to
            your business
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Your Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
