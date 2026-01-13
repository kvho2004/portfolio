import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import WhatImUpTo from "./pages/WhatImUpTo";
import CurrentProjects from "./pages/CurrentProjects";
import Archive from "./pages/Archive";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-im-up-to" element={<WhatImUpTo />} />
            <Route path="/current-projects" element={<CurrentProjects />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
