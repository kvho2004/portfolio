import { useState } from "react";
import { Link } from "react-router-dom";
import { info } from "../data/info";

const links = [
  { label: "ABOUT", to: "/" },
//   { label: "EXP", to: "/#experience" },
//   { label: "PROJECTS", to: "/#projects" },
//   { label: "CONTACT", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: "rgba(200, 197, 188, 0.85)",
        backdropFilter: "blur(8px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: "var(--color-amber)",
          }}
        >
          &gt; {info.shortName}_
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="text-xs hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: "var(--color-muted)",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-xs"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: "var(--color-muted)",
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-bg)",
          }}
        >
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-xs hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                color: "var(--color-muted)",
              }}
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
