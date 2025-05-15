import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Type definitions
type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

type TabType = "Banshwali" | "Digital Khata";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Banshwali");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces that delight users and drive conversions with pixel-perfect precision.",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="18" height="12" rx="2" strokeWidth="2" />
          <path d="M8 21h8" strokeWidth="2" />
          <path d="M12 17v4" strokeWidth="2" />
        </svg>
      ),
      color: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      title: "Mobile Development",
      description: "Building performant cross-platform apps that scale with your business needs.",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Creating fast, secure, and scalable web applications with modern technologies.",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M2 12h20" strokeWidth="2" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
        </svg>
      ),
      color: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      title: "Brand Strategy",
      description: "Developing cohesive brand identities that resonate with your target audience.",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" />
        </svg>
      ),
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 absolute z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.3)] via-transparent to-[rgba(0,0,0,0.3)] z-10" />
        </div>
        
        {/* Hero content */}
        <motion.div 
          className="container mx-auto px-4 z-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Transforming <span className="text-blue-300">Today</span> For<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Tomorrow
              </span>
            </motion.h1>

            <motion.p
              className="my-8 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We deliver cutting-edge software solutions that empower businesses to thrive in the digital landscape through innovation and technical excellence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="relative group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                The <span className="text-blue-600">MetaLogic</span> Process
              </h2>
            </motion.div>
            
            <div className="relative">
              {/* Vertical line - hidden on mobile */}
              <motion.div 
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-300 to-blue-600 h-full"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              
              {/* Process steps */}
              <div className="space-y-16 md:space-y-24">
                {[
                  {
                    step: 1,
                    title: "Discovery",
                    description: "We begin by deeply understanding your business goals, challenges, and technical requirements through collaborative workshops.",
                    icon: "🔍"
                  },
                  {
                    step: 2,
                    title: "Design",
                    description: "Our designers create intuitive user experiences and beautiful interfaces that align with your brand identity.",
                    icon: "🎨"
                  },
                  {
                    step: 3,
                    title: "Development",
                    description: "Our engineers build robust, scalable solutions using the latest technologies and best practices.",
                    icon: "💻"
                  },
                  {
                    step: 4,
                    title: "Deployment",
                    description: "We ensure smooth launches with thorough testing, documentation, and ongoing support.",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.step}
                    className="flex flex-col md:flex-row items-center"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Alternate sides for desktop */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-6 md:mb-0`}>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                      <div className="relative">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center text-white text-2xl font-bold z-10 relative shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-16 md:left-20 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 hidden md:block" />
                        <div className="mt-4 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:left-40 text-xl font-bold text-blue-600">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Text content */}
            <motion.div 
              className="lg:w-1/3"
              variants={itemVariants}
            >
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Comprehensive <span className="text-blue-600">Digital Solutions</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our full-service approach covers every aspect of digital transformation, from strategy to implementation and beyond.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            {/* Service cards */}
            <motion.div 
              className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-xl h-full"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`${service.color} rounded-2xl p-8 h-full flex flex-col items-start text-left relative z-10`}
                    animate={{
                      scale: hoveredCard === index ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/90 mb-6">{service.description}</p>
                    <button className="mt-auto text-white font-medium flex items-center gap-2 group">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 z-0"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row">
                {/* Tabs */}
                <div className="flex md:flex-col border-b md:border-b-0 md:border-r border-gray-200">
                  {["Banshwali", "Digital Khata"].map((tab) => (
                    <motion.button
                      key={tab}
                      className={`px-6 py-4 font-medium text-left ${activeTab === tab ? "bg-white text-blue-600 border-b-2 md:border-b-0 md:border-r-2 border-blue-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
                      onClick={() => setActiveTab(tab as TabType)}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>
                
                {/* Content */}
                <div className="flex flex-col md:flex-row w-full">
                  {/* Image placeholder */}
                  <motion.div 
                    className="w-full md:w-1/2 min-h-64 md:min-h-96 flex items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-cyan-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center text-white">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <p className="text-2xl font-bold mb-2">{activeTab} Platform</p>
                        <p className="text-lg mx-6">
                          {activeTab === "Banshwali" 
                            ? "Discover your family heritage with our digital genealogy solution." 
                            : "Streamline your financial records with our digital ledger system."}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Features list */}
                  <motion.div 
                    className="w-full md:w-1/2 p-8 md:p-12"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h3>
                    <p className="text-lg mb-8 text-gray-600">
                      {activeTab === "Banshwali" 
                        ? "Comprehensive family tree visualization and management" 
                        : "Complete financial tracking and reporting"}
                    </p>
                    
                    <ul className="space-y-6">
                      {(
                        activeTab === "Banshwali" 
                          ? [
                              "Interactive family tree with multi-generational view",
                              "Detailed ancestry records and documentation",
                              "Collaborative family event planning",
                              "Secure cloud storage for family artifacts"
                            ]
                          : [
                              "Real-time transaction tracking",
                              "Automated financial reports",
                              "Multi-user access with permission controls",
                              "Data export for accounting integration"
                            ]
                      ).map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{feature}</p>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="mt-12 flex justify-end">
                      <motion.button 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Learn more <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;