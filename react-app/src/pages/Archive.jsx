function Archive() {
  const projects = [
    {
      title: "Literature Review: Comic Books in Education",
      meta: "April 2023",
      image: "/images/comicspedagogy.jpg",
      description:
        "A paper that explores and synthesizes varying literature perspectives surrounding comic books in education. A comprehensive overview of the potential merits and limitations of comic books, as well as discover possible ways of effectively integrating this medium into curricula.",
      tags: "Comic Books • Education • Pedagogy • Accessibility • Critical media",
      links: [{ text: "Request", url: "mailto:kvho@umich.edu", primary: true }],
    },
    {
      title: "User Research: Campus Space Reservation System",
      meta: "Jan 2025",
      image: "/images/taskanalysis.jpg",
      description:
        "Conducted screening surveys and contextual‑inquiry interviews to surface accessibility and usability pain points in study‑space booking. Led task‑based usability tests, then applied qualitative coding to map navigation, decision‑making, and accessibility trends into actionable recommendations.",
      tags: "Surveys • Contextual inquiry • Usability testing • Thematic coding • Figma • Miro",
      links: [
        {
          text: "Diagrams",
          url: "https://drive.google.com/drive/folders/1Vd2MfvzUsa8F_y8GIgZUidBwMNP_oqCV?usp=sharing",
          primary: true,
        },
        {
          text: "User Persona Model",
          url: "https://drive.google.com/file/d/1xqRdZTXy4ngc9qEe53HCdt48EANDZw7K/view?usp=sharing",
        },
      ],
    },
    {
      title: "Duolingo Spaced‑Repetition Effectiveness (R)",
      meta: "Mar 2024",
      image: "/images/duo_graph.png",
      description:
        "Cleaned and standardized raw Duolingo datasets; ran EDA to explore engagement, progress, and retention patterns across learning strategies; and proposed data‑driven product optimizations. Presented the analysis in a reproducible Quarto notebook.",
      tags: "R • Quarto • EDA • Data cleaning",
      links: [
        {
          text: "Repo",
          url: "https://github.com/kvho2004/Data-Analysis-of-Duolingo-Learning-Data-ling343-/tree/main",
          primary: true,
        },
        {
          text: "Dataset",
          url: "https://www.kaggle.com/datasets/aravinii/duolingo-spaced-repetition-data?resource=download",
        },
      ],
    },
    {
      title: "Case Study: Mastodon Objectives & the Individual Experience",
      meta: "Sept 2023",
      image: "/images/mastodon.webp",
      description:
        "A critical look at Mastodon as a decentralized alternative to Twitter: how ideal frameworks around community, autonomy, and quality collide with onboarding complexity, UI friction, and the realities of scale—ultimately affecting user retention and experience.",
      tags: "HCI • Decentralization • UX critique • Social platforms",
      links: [
        { text: "Preview", url: "/files/OSMPreview.pdf", primary: true },
        { text: "References", url: "/files/OSMBib.pdf" },
      ],
    },
  ];

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Archive / Past Projects
        </h1>
        <p className="text-xl text-gray-300">
          Selected work from previous semesters and independent studies. Case
          studies and artifacts linked where available.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                <strong>Tags:</strong> {project.tags}
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
          More projects available on request. Older coursework and prototypes
          rotate in and out of this archive as I curate.
        </p>
      </div>
    </div>
  );
}

export default Archive;
