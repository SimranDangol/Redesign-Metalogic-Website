import { useState } from "react";

import {
  Search,
  Book,
  Users,
  Lightbulb,
  Handshake,
  Target,
  Leaf,
  Award,
  Clock,
  BarChart2,
  GitFork,
  MessageSquare,
  Heart,
  Gift,
  Utensils,
  GraduationCap,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Badge } from "../../ui/badge";

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { type: "spring", stiffness: 300 },
};

export default function Career() {
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "MERN Stack Intern",
      type: "Full Time",
      location: "Kathmandu",
      status: "closed",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Kathmandu",
      status: "open",
    },
    {
      id: 3,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Kathmandu",
      status: "closed",
    },
    {
      id: 4,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Lalitpur",
      status: "closed",
    },
    {
      id: 5,
      title: "MERN Stack Intern",
      type: "Full Time",
      location: "Lalitpur",
      status: "closed",
    },
    {
      id: 6,
      title: "Backend Developer (Node.js)",
      type: "Full Time",
      location: "Remote",
      status: "open",
    },
    {
      id: 7,
      title: "DevOps Engineer",
      type: "Part Time",
      location: "Kathmandu",
      status: "open",
    },
    {
      id: 8,
      title: "Product Manager",
      type: "Full Time",
      location: "Kathmandu",
      status: "open",
    },
  ];

  const values = [
    {
      icon: <Book className="h-6 w-6 text-green-600" />,
      title: "Continuous Learning",
      description:
        "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Team Work",
      description:
        "We believe that best solutions comes from diverse perspective and collaborative efforts.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "Innovation",
      description:
        "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
    },
    {
      icon: <Handshake className="h-6 w-6 text-purple-600" />,
      title: "Mentorship",
      description:
        "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.",
    },
    {
      icon: <Target className="h-6 w-6 text-red-600" />,
      title: "Tangible Impact",
      description:
        "We're committed to delivering solutions that not only meet but exceed their expectations.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Adaptability",
      description:
        "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey.",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Flexibility at work",
      description:
        "Do your best work at a time and place that fits us and your work-life balance.",
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-600" />,
      title: "Take Ownership",
      description:
        "Take responsibility to solve customer challenges by acting as your own boss.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-green-600" />,
      title: "Unlimited Growth",
      description:
        "With no inner circle... absolutely everyone has the same opportunity to thrive.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "Make Yourself Heard",
      description:
        "We encourage diverse perspectives making it count in achieving our collective goals.",
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: "Team Spirit",
      description:
        "Come together, work as one - this is at the heart of how we work, achieve results and collaborate.",
    },
    {
      icon: <GitFork className="h-6 w-6 text-blue-600" />,
      title: "Inclusivity at Work",
      description:
        "We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-teal-600" />,
      title: "Transparent Environment",
      description:
        "Build confidence in a culture of trust and open communication - with each other and our clients.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Fuel Your Passion",
      description:
        "We encourage you to strive, push the limits and achieve your dreams by being best you can be.",
    },
  ];

  const perks = [
    {
      icon: <Gift className="h-6 w-6 text-purple-600" />,
      title: "Performance Bonus",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Health Benefits",
    },
    {
      icon: <Heart className="h-6 w-6 text-pink-600" />,
      title: "Paid Leave Policy",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Learning And Development",
    },
    {
      icon: <Utensils className="h-6 w-6 text-orange-600" />,
      title: "Food Credit",
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Team Activities",
    },
  ];

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      level === "" ||
      (level === "entry" && job.title.includes("Intern")) ||
      (level === "mid" &&
        !job.title.includes("Intern") &&
        !job.title.includes("Senior")) ||
      (level === "senior" && job.title.includes("Senior"));
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 sm:py-28"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-medium text-blue-200"
            >
              Careers at MetaLogic
            </motion.p>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-5xl font-extrabold text-white sm:text-6xl"
            >
              Build Your <span className="text-green-400">Future</span> With Us
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl text-blue-100"
            >
              We're continuously searching for the right talent. Check if you're
              a good match.
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a href="#opportunities">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-md"
                >
                  Explore Opportunities
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-base font-semibold tracking-wide text-red-500 uppercase"
            >
              Our Values
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              What We Stand For
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="max-w-2xl mt-6 mx-auto text-xl text-gray-500"
            >
              We believe in creating an environment where individuals can thrive
              and make a meaningful impact.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
              >
                <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={iconHover}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-6"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-base font-semibold tracking-wide text-blue-500 uppercase"
            >
              Work Culture
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              Life At MetaLogic
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="max-w-2xl mt-6 mx-auto text-xl text-gray-500"
            >
              We foster an environment where creativity meets productivity
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <motion.div
                    whileHover={iconHover}
                    className="mx-auto flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mb-6"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Cares Section */}
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              MetaLogic Cares For You
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-6 text-xl text-gray-600">
              We're less about valuing perks and more about valuing people. Our
              employee benefits are built around enhancing your wellbeing - at
              work and at home
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
              >
                <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 flex flex-col items-center">
                    <motion.div
                      whileHover={iconHover}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-6"
                    >
                      {perk.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {perk.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-base font-semibold tracking-wide text-blue-500 uppercase"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              What Our Employees Say
            </motion.h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mr-4 flex items-center justify-center text-blue-600 font-bold">
                      JD
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">John Doe</h4>
                      <p className="text-sm text-gray-500">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Working at MetaLogic has been an incredible journey. The
                    culture of continuous learning and the support from
                    leadership has helped me grow both professionally and
                    personally."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 mr-4 flex items-center justify-center text-purple-600 font-bold">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Jane Smith
                      </h4>
                      <p className="text-sm text-gray-500">UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The work-life balance here is amazing. I get to work on
                    challenging projects while still having time for my personal
                    life. The team is supportive and collaborative."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-200 mr-4 flex items-center justify-center text-green-600 font-bold">
                      RJ
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Robert Johnson
                      </h4>
                      <p className="text-sm text-gray-500">Backend Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "MetaLogic truly values its employees. The mentorship
                    program helped me transition from a junior to a senior role,
                    and I'm now leading my own team. The growth opportunities
                    are real."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vacancies Section */}
      <div id="opportunities" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-base font-semibold tracking-wide text-yellow-500 uppercase"
            >
              Opportunities
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            >
              Available Vacancies
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Job Title/Keyword/Location"
                className="flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <p className="text-lg font-medium mb-6 text-gray-700">
              {filteredJobs.length} Job{" "}
              {filteredJobs.length === 1 ? "Offer" : "Offers"} Available
            </p>
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-all duration-300">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {job.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div>
                        {job.status === "open" ? (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2"
                          >
                            <Button
                              variant="outline"
                              className="border-none px-0 py-0 bg-transparent shadow-none hover:bg-transparent focus:ring-0 focus:outline-none"
                            >
                              Apply Now
                            </Button>
                          </motion.button>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-gray-100 text-gray-500 border-gray-300 px-4 py-2"
                          >
                            Closed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center py-12 bg-white rounded-xl shadow-sm"
                >
                  <p className="text-gray-500">
                    No jobs found matching your criteria. Try adjusting your
                    search.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      setSearchTerm("");
                      setLevel("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-extrabold sm:text-5xl"
            >
              Ready to join our team?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
            >
              Even if you don't see the perfect role right now, we're always
              interested in meeting talented people.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all rounded-md"
              >
                Submit General Application
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
