import { motion } from "framer-motion";

type TechItemProps = {
  name: string;
  logo: string;
  color: string;
  animate?: boolean;
};

const techStackVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

export default function TechItemCard({ name, logo, color, animate }: TechItemProps) {
  return (
    <motion.div
      className={`flex flex-col items-center p-6 rounded-xl ${color} shadow-sm`}
      variants={techStackVariants}
      whileHover="hover"
      animate={animate ? pulseAnimation : {}}
    >
      <div className="h-16 w-16 mb-4 flex items-center justify-center">
        <img src={logo} alt={name} className="h-full w-full object-contain" />
      </div>
      <span className="font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}
