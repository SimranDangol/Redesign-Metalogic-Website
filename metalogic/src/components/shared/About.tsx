import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0642A6] to-[#011B45]">
        <HeroSection />
      </div>

      {/* Other sections */}
      <div className="bg-white">
        <StatsSection />
        <ApproachSection />
        <FoundationSection />
        <TimelineSection />
        <MissionSection />
      </div>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#0642A6] to-[#011B45] absolute z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-transparent to-[rgba(0,0,0,0.2)] z-10" />
      </div>

      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Driving Innovations <br />
            And Empowering Business
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="my-8 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            MetaLogic envisions a future where technology serves as a catalyst
            for limitless human potential, fostering innovation and empowering
            organizations to thrive in a transformative digital era.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { count: "32+", title: "Projects Completed" },
    { count: "50+", title: "Satisfied Clients" },
    { count: "18+", title: "Experts" },
  ];

  return (
    <div className="py-8 relative">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4"
      >
        <div className="bg-white rounded-xl shadow-lg py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-5xl font-bold text-[#009688]">
                  {stat.count}
                </span>
                <span className="text-gray-700 mt-2">{stat.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Approach Section
const ApproachSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-[#F6E7F7] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#D14D8B] font-medium"
            >
              OUR APPROACH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold mt-2 text-[#011B45]"
            >
              Where Vision Meets Execution
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-[#011B45]/80 leading-relaxed"
          >
            At MetaLogic, we navigate the digital landscape with innovation,
            collaboration, and a dedicated focus on client success. Rooted in a
            commitment to pioneering solutions and anticipating future needs,
            our client relationships go beyond transactions. Understanding
            unique challenges, we craft solutions that align effortlessly with
            business objectives. With a user-centric design philosophy, agile
            methodologies, and a commitment to continuous learning, we promise
            transformative success at MetaLogic Software Pvt. Ltd.
          </motion.p>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-[#F8C3DC] filter blur-3xl"></div>
      <div className="absolute right-0 top-20 w-72 h-72 rounded-full bg-[#F0A6D4] filter blur-3xl"></div>
    </motion.div>
  );
};

// Foundation Section
const FoundationSection = () => {
  return (
    <div className="py-24 bg-white text-[#011B45]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="text-red-500 font-medium">OUR FOUNDATION</span>
          <h2 className="text-4xl font-bold mt-2">
            Bridging Futures Since 2023
          </h2>
          <p className="text-gray-700 max-w-2xl mt-4">
            We strive for excellence in every aspect of our work, from the
            quality of our code to the user experience of our products.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Timeline Section
const TimelineSection = () => {
  const timelineItems = [
    {
      number: "1",
      title: "2023 Founded",
      description:
        "In 2023, MetaLogic: a beacon of innovation. Youthful, unwavering commitment to exceptional software. Fresh perspective, building a legacy of quality and excellence.",
    },
    {
      number: "2",
      title: "Visionary Leadership",
      description:
        "MetaLogic: Founded by forward-thinking visionaries, we harness cutting-edge technologies to build solutions that drive business growth and innovation.",
    },
    {
      number: "3",
      title: "Future-Ready Solutions",
      description:
        "Our team continuously explores emerging technologies to ensure our clients stay ahead of the curve in the rapidly evolving digital landscape.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

type TimelineItemProps = {
  item: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex items-center ${
        isEven ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`relative ${
            isEven ? "text-left" : "text-right md:order-2"
          }`}
        >
          <div className="text-8xl font-light text-gray-200">{item.number}</div>
          <h3 className="text-2xl font-bold text-[#011B45] mt-4">
            {item.title}
          </h3>
          <p className="text-gray-600 mt-2 max-w-md">{item.description}</p>
        </div>

        <div className={`${isEven ? "md:order-2" : ""}`}>
          <div className="relative">
            {/* Timeline line */}
            {index < 2 && (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"
                style={{ top: "50%", height: "200%" }}
              ></motion.div>
            )}

            {/* Circle indicator */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.2,
              }}
              className="w-8 h-8 rounded-full bg-blue-500 relative z-10 mx-auto"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Mission Section
const MissionSection = () => {
  return (
    <div className="py-24 bg-white text-[#011B45]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-200 rounded-lg aspect-square"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-500 rounded-lg aspect-square"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-red-500 rounded-lg aspect-square"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-200 rounded-lg aspect-square"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-red-500 font-medium">OUR MISSION</span>
            <h2 className="text-4xl font-bold mt-2">
              Dedication to innovation
            </h2>
            <p className="text-gray-700 mt-8 leading-relaxed">
              We believe that every project is an opportunity to create
              something remarkable – a chance to push boundaries, challenge
              norms, and exceed expectations. We approach each endeavor with
              curiosity and creativity, striving to craft solutions that not
              only meet your needs but also propel you ahead of the curve.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
