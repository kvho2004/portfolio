import { useState } from "react";
import { Link } from "react-router-dom";
import { info } from "../data/info";
import { useTheme } from "../context/ThemeContext";


const links = [
    { label: "ABOUT", to: "/" },
  //   { label: "EXP", to: "/#experience" },
  //   { label: "PROJECTS", to: "/#projects" },
  //   { label: "CONTACT", to: "/#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <nav
          className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${theme.chrome.bg} ${theme.chrome.border}`}
        >
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className={`text-xs hover:opacity-70 transition-opacity font-mono ${theme.text.muted}`}
            >
              &gt; {info.tempheading}_
            </Link>

            {/* Desktop */}
            <ul className="hidden md:flex gap-8">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className={`text-xs hover:opacity-70 transition-opacity font-mono ${theme.text.muted}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile */}
            <button
              className={`md:hidden text-xs font-mono ${theme.text.muted}`}
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "≡"}
            </button>
          </div>

          {open && (
            <div
              className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${theme.chrome.bg} ${theme.chrome.border}`}
            >
              {links.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`text-xs hover:opacity-70 transition-opacity font-mono ${theme.text.muted}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </nav>
    );
}
