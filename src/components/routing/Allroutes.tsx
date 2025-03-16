import About from "@/pages/About";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

export default Allroutes;
