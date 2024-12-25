import About from "@/pages/about";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import RoadMap from "@/pages/roadMap";
import Team from "@/pages/team";
import Token from "@/pages/token";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/roadMap" element={<RoadMap />} />
      <Route path="/token" element={<Token />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
