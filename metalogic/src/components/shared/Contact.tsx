import { motion } from "framer-motion";
import { ArrowRight, Phone, Handshake, MessageCircle } from "lucide-react";
import React from "react";
import type { FC } from "react";

const Contact: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Kickstart Your Project
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to take the next step? Fill out the form to schedule a
            consultation with our experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Options */}
          <div className="space-y-6">
            {/* Customer Support Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Need technical assistance? Contact Support
                  </p>
                </div>
              </div>
              <button className="text-blue-600 font-medium flex items-center">
                Contact now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            {/* Partnerships Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Handshake className="text-purple-600 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Partnerships
                  </h3>
                  <p className="text-gray-600">
                    Want to offer Metalogic to your client?
                  </p>
                </div>
              </div>
              <button className="text-purple-600 font-medium flex items-center">
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            {/* WhatsApp Option */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageCircle className="text-green-600 h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  WhatsApp Chat
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Or you can directly send a message on WhatsApp
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center w-full transition-colors">
                WhatsApp 😊
              </button>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 lg:col-span-2"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Eg: Ram Bahadur Thapa"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg: ram@mail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact*
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Eg: 98xxxxxxxx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Eg: Metalogic Pvt Ltd"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Eg: Lalitpur, Nepal"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description*
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Anything particular we should know?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="marketing"
                    name="marketing"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="marketing" className="text-gray-700">
                    I agree to Metalogic sending me marketing communications, as
                    described in the Website and Cookie Policy.
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow transition-colors duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
