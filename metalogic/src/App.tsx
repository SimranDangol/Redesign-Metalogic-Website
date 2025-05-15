import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/shared/Home";
import Layout from "./layout";
import About from "./components/shared/About";
import Blog from "./components/shared/Blog";
import Career from "./components/shared/Career/Career";
import Services from "./components/shared/Services/Services";
import Contact from "./components/shared/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="career" element={<Career />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
