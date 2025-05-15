import { ArrowRight } from "lucide-react";

const ProjectQuoteCTA = () => {
  return (
    <section className="bg-[#E5E5E5] py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#031B4E] mb-4">
          Do you have a project in mind ?
        </h2>
        <p className="text-gray-600 mb-6">
          Reach out to us. Let&apos;s uncover how we can bring additional value
          to your business
        </p>
        <a
          href="/quote"
          className="inline-flex items-center bg-[#FF4A4A] hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md transition-all"
        >
          Get Your Quote <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default ProjectQuoteCTA;
