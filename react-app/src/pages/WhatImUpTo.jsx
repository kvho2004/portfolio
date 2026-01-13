function WhatImUpTo() {
  const projects = [
    {
      title: "Software Development & Research — GRIP Lab",
      meta: "Fall 2024 – Present",
      image: "/images/LabCover.webp",
      description:
        "Implementing and improving educational technology applications (Anotemos & Lesson Depict). I lead usability testing, full stack developing (both frontend/backend), and consider teacher interaction data to inform design decisions.",
      skills:
        "React · Javascript · Meteor API · Node.Js · Material UI · MongoDB · Git · Data Analysis",
      links: [
        {
          text: "Research Lab",
          url: "https://www.gripumich.org/",
          primary: true,
        },
        { text: "Software", url: "https://www.gripumich.org/software/" },
      ],
    },
    {
      title: "UI/UX Lead — ARI × Kelsey Museum Cohort",
      meta: "Spring 2025 – Present",
      image: "/images/augutus.png",
      description:
        "Directing interface and interaction design for a VR exhibit that makes ancient artifacts explorable in 3D. Collaborating with the Kelsey Museum of Archaeology and student developers to craft accessible, immersive experiences.",
      skills: "Unity · UI/UX Design · VR/XR Interfaces · Niantic Studio",
      links: [
        {
          text: "8th Wall Workshop",
          url: "https://www.altrealityinitiative.com/post/building-augmented-reality-experiences-with-niantic-8th-wall-2025",
          primary: true,
        },
      ],
    },
    {
      title: "Research Intern — Michigan Library Scholars",
      meta: "Summer 2025",
      image: "/images/MLSCover.jpg",
      description:
        "Led a research study on first‑generation international students' experiences with U‑M Library resources. Designed interviews, applied grounded‑theory coding, and presented recommendations adopted by library leadership.",
      skills:
        "Qualitative/Quantitative Research · Grounded Theory · Inclusive Design · UX Case Study · Data Analysis",
      links: [
        {
          text: "Blog Post",
          url: "https://blogs.lib.umich.edu/student-stories/reimagining-inclusion-reflection-my-michigan-library-scholars-internship",
          primary: true,
        },
        {
          text: "Slide Deck",
          url: "https://drive.google.com/file/d/1kcMP1T1QC1F4bfI64deYgoInapdm6WPF/view?usp=sharing",
        },
      ],
    },
  ];

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">What I'm Up To</h1>
        <p className="text-xl text-gray-300">
          A snapshot of the work I'm actively shaping now — across software
          development & research, inclusive design, and immersive media.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{project.meta}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Skills:</strong> {project.skills}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
                      link.primary
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-8">
        <p className="text-gray-400 italic">
          Updated Fall 2025. Projects rotate into{" "}
          <a href="/archive" className="text-blue-400 hover:text-blue-300">
            Past Projects
          </a>{" "}
          as new work ships.
        </p>
      </div>
    </div>
  );
}

export default WhatImUpTo;
