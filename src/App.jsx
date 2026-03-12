import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-50 min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
