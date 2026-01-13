function Navigation({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-2xl font-bold mb-8 text-white">Menu</h2>

          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/what-im-up-to"
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                What I'm Up To
              </a>
            </li>
            <li>
              <a
                href="/current-projects"
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                Current Projects
              </a>
            </li>
            <li>
              <a
                href="/archive"
                className="block text-lg text-gray-300 hover:text-white transition-colors"
              >
                Archive
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
