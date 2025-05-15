import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/shared/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Removed bg-[#011B45] */}
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer/>
    </div>
  );
}