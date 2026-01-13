function Hero() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
        {/* Text Content */}
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hi, I am{" "}
            <a
              href="https://www.linkedin.com/in/kvho/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Vivian O
            </a>
            .
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            I'm an undergraduate double-majoring in Computer Science and
            Cognitive Science at the University of Michigan–Ann Arbor. My work
            centers on designing inclusive technical solutions with meaningful
            social impact, particularly across civic engagement, education, and
            healthcare.
          </p>
          <p className="text-lg text-gray-300">
            Outside class, you'll find me learning new languages, trying out
            different recipes, and watching football.
          </p>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
            <img
              src="/images/profileportfolio.jpg"
              alt="Portrait of Vivian O"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <a
        href="/Technology_Resume_2025-2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
      >
        View My Resume
      </a>
    </section>
  );
}

export default Hero;
