import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Newsletter from "./Newsletter";

// type for a blog post
type BlogPost = {
  id: number;
  title: string;
  image: string;
  date: string;
  readTime: string;
  views: number;
  category: string;
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = ["All", "Technology", "Business", "Marketing"];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title:
        "Revolutionizing Software Development: Exploring Innovative Uses of Blockchain",
      image:
        "https://img.freepik.com/premium-photo/big-data-flow-blockchain-data-fields-network-ai-generated-art-work_844516-149.jpg",
      date: "2024-01-07",
      readTime: "12 mins",
      views: 544,
      category: "Technology",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies for Tech Companies in 2024",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-05",
      readTime: "10 mins",
      views: 421,
      category: "Marketing",
    },
    {
      id: 5,
      title: "Building a Strong Business Model for Software Startups",
      image:
        "https://img.freepik.com/premium-photo/business-people-working-finance-accounting-analysis-graph_53876-133573.jpg",
      date: "2024-01-04",
      readTime: "15 mins",
      views: 387,
      category: "Business",
    },
  ];

  const filteredPosts: BlogPost[] =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog listing */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl uppercase tracking-wide mb-4">OUR BLOGS</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              All Blog Posts
            </h3>
            <p className="max-w-3xl mx-auto text-center text-gray-300">
              Here, creativity knows no bounds, and innovation takes center
              stage. Whether you're an industry expert, a curious learner, or an
              aspiring entrepreneur, this is the place where ideas come to life,
              insights are shared, and knowledge is transformed into action.
            </p>
          </div>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-600 bg-gray-800 text-white"
              />
              <Search
                className="absolute left-3 top-3.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-6">
                  <div>{post.date}</div>
                  <div>{post.readTime}</div>
                  <div>{post.views} views</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter subscription */}
      <Newsletter />
    </div>
  );
}
