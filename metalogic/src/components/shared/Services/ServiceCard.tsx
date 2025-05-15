import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

const MotionCard = motion(Card);

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  gradient: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export default function ServiceCard({
  icon,
  title,
  description,
  color,
  borderColor,
  gradient,
}: ServiceCardProps) {
  return (
    <MotionCard
      className={`group relative overflow-hidden border ${borderColor} rounded-xl shadow-sm ${color}`}
      variants={cardVariants}
      whileHover="hover"
    >
      <CardContent className="p-8 flex flex-col h-full">
        <motion.div
          className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient} shadow-lg`}
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </MotionCard>
  );
}
