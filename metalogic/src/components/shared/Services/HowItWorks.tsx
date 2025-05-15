import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Fill Out a Form",
    subtitle: "Give us a sense of your business and marketing needs",
    icon: "/icons/form.png",
  },
  {
    id: 2,
    title: "Get a free consultation",
    subtitle: "Give us a sense of your business and marketing needs",
    icon: "/icons/consultation.png",
  },
  {
    id: 3,
    title: "Get a quote",
    subtitle:
      "See a transparent development and marketing plan based on your unique needs",
    icon: "/icons/quote.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#031B4E] mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Elevate your business to unprecedented success through the synergistic
          collaboration and expertise offered by our agency, propelling your
          brand to new heights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-[#031B4E] font-semibold text-lg mb-1">
                Step {step.id}
              </h4>
              <h3 className="text-xl font-bold text-[#031B4E] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
