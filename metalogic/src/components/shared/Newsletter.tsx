import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to our News Letters
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay informed, inspired, and equipped with the latest trends and
          breakthroughs in your field.
        </p>

        <div className="flex flex-col md:flex-row max-w-lg mx-auto gap-4">
          <input
            type="email"
            placeholder="Please Enter Your Email"
            className="flex-grow p-3 border border-gray-300 rounded-lg"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 flex items-center justify-center">
            <Mail className="mr-2" size={20} />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
