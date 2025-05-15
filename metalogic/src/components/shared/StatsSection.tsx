import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default StatsSection;
