import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <HashRouter>
      <div
        className={`min-h-screen font-sans transition-colors duration-500 ${theme.bg.primary}`}
      >
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
    </HashRouter>
  );
}
