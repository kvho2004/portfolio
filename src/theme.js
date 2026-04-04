export const THEMES = {
  light: {
    name: "light",
    bg: {
      page: "bg-gradient-to-br from-[#b8cfe8] via-[#a8c0dc] to-[#98b0d0]",
      primary: "bg-[#e8eaf0]",
      secondary: "bg-[#f2f3f7]",
    },
    card: {
      bg: "bg-white/80 backdrop-blur-xl",
      border: "border-white/90",
      divider: "border-[#d4dcea]",
      right: "bg-[#dce6f5]/40",
    },
    chrome: {
      bg: "bg-[#dce6f5]/90",
      border: "border-[#c4d0e4]/50",
      url: "bg-white/50 text-[#6a7490]",
    },
    toggle: "bg-white/60 border-white/80 text-[#2b2f3a]",
    text: {
      primary: "text-[#2b2f3a]",
      secondary: "text-[#5a5f72]",
      muted: "text-[#9096a8]",
    },
    button: {
      solid: "bg-[#2b2f3a] text-[#e8eaf0] hover:bg-[#5a5f72]",
      outline: "border border-[#c4c7d4] text-[#2b2f3a] hover:border-[#2b2f3a]",
    },
    ascii: {
      fg: "#ffffff",
      bg: "#2b2f3a",
    },
  },
  dark: {
    name: "dark",
    bg: {
      page: "bg-gradient-to-br from-[#1a1e2a] via-[#1e2330] to-[#161a24]",
      primary: "bg-[#2b2f3a]",
      secondary: "bg-[#363b4a]",
    },
    card: {
      bg: "bg-[#2b2f3a]/95 backdrop-blur-xl",
      border: "border-[#404558]/40",
      divider: "border-[#404558]/30",
      right: "bg-[#1e2230]/40",
    },
    chrome: {
      bg: "bg-[#363b4a]/95",
      border: "border-[#404558]/30",
      url: "bg-[#2b2f3a]/50 text-[#6a7490]",
    },
    toggle: "bg-[#2b2f3a]/80 border-[#505870]/40 text-[#e8eaf0]",
    text: {
      primary: "text-[#e8eaf0]",
      secondary: "text-[#9096a8]",
      muted: "text-[#5a5f72]",
    },
    button: {
      solid: "bg-[#4dbd8f] text-[#2b2f3a] hover:bg-[#3da878]",
      outline: "border border-[#4dbd8f] text-[#4dbd8f] hover:border-[#3da878]",
    },
    ascii: {
      fg: "#4dbd8f",
      bg: "#363b4a",
    },
  },
};