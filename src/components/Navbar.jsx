import { useState } from "react";
import { Link } from "react-router-dom";
import { info } from "../data/info";

const links = [
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-stone-100 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-stone-800 font-medium tracking-tight hover:text-stone-500 transition-colors"
        >
          {info.shortName}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stone-500 hover:text-stone-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
