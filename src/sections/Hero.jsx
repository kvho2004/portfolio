import { info } from "../data/info";
import EffectScene from "../components/hero/EffectScene";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme, mode, toggle } = useTheme();

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-24 ${theme.bg.page}`}
    >
      {/* Toggle */}
      <div className="fixed bottom-5 right-6 z-50">
        <button
          onClick={toggle}
          className={`px-4 py-1.5 text-xs rounded-full border backdrop-blur-sm transition-all duration-300 ${theme.toggle}`}
        >
          {mode === "light" ? "◑ Dark" : "◐ Light"}
        </button>
      </div>

      {/* Main window card */}
      <div
        className={`w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border transition-all duration-500 ${theme.card.bg} ${theme.card.border}`}
      >
        {/* Browser chrome bar */}
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${theme.chrome.bg} ${theme.chrome.border}`}
        >
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 flex justify-center">
            <div
              className={`px-4 py-1 rounded-md text-xs font-mono ${theme.chrome.url}`}
            >
              portfolio.dev
            </div>
          </div>
        </div>

        {/* Split body */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          {/* Left: text */}
          <div
            className={`flex flex-col justify-center px-10 py-12 border-b md:border-b-0 md:border-r ${theme.card.divider}`}
          >
            <p
              className={`text-xs tracking-widest uppercase font-mono mb-3 ${theme.text.muted}`}
            >
              Hello, I'm
            </p>
            <h1
              className={`text-5xl font-light tracking-tight mb-5 ${theme.text.primary}`}
            >
              {info.shortName}
            </h1>
            <p
              className={`text-base mb-3 leading-relaxed ${theme.text.secondary}`}
            >
              {info.tagline}
            </p>
            <p className={`text-sm leading-relaxed mb-8 ${theme.text.muted}`}>
              {info.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={info.resume}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2 text-xs font-mono rounded-md transition-colors duration-200 ${theme.button.solid}`}
              >
                Resume
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2 text-xs font-mono rounded-md transition-colors duration-200 ${theme.button.outline}`}
              >
                GitHub
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2 text-xs font-mono rounded-md transition-colors duration-200 ${theme.button.outline}`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: terminal with 3D render */}
          <div
            className={`flex items-center justify-center p-6 ${theme.card.right}`}
          >
            <div className="w-full rounded-xl overflow-hidden shadow-xl">
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#363b4a]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[10px] text-[#6a7490] font-mono">
                  ascii_render.sh
                </span>
              </div>
              {/* Canvas */}
              <div
                className="bg-[#2b2f3a] h-72 md:h-80"
                style={{
                  "--ascii-fg": theme.ascii.fg,
                  "--ascii-bg": theme.ascii.bg,
                }}
              >
                <EffectScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

