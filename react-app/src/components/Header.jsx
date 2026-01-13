function Header({ onMenuClick }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">🌱</span>
            <span className="text-lg font-semibold">Home</span>
          </a>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
