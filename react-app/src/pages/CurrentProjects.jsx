function CurrentProjects() {
  const projects = [
    {
      title: "Alternate Reality Initiative (ARI)",
      image: "/images/ari_cover.png",
      description: "As Vice President (formerly Web Director), I co-lead ARI operations—organizing workshops & hackathons, building industry and campus partnerships, and maintaining the club website.",
      focus: "Event logistics · Partnerships · Community building",
      links: [
        { text: "Club Website", url: "https://www.altrealityinitiative.com/", primary: true }
      ]
    },
    {
      title: "Creative 3D Art Projects",
      image: "/images/valentinemail.png",
      description: "I like making small, creative things for fun—building up my 3D modeling skills in Blender, learning Three.js (out of curiosity), and 3D-printing custom figurines as a tiny blindbox series and gifts for friends.",
      focus: "HTML/CSS/JS · Three.js · Blender (glTF)",
      links: []
    },
    {
      title: "Community ESL Teaching — Tzu Ching",
      image: "/images/tzuching.png",
      description: "Through Tzu Ching, I help plan and teach ESL for Chinese seniors in Ann Arbor, designing accessible materials and practical conversation practice for daily tasks.",
      focus: "Lesson planning · Accessible materials · Community service",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/tzuching_um/", primary: true }
      ]
    },
    {
      title: "Open‑Source Contributions",
      image: "/images/lingoncurve-scaled.png",
      description: "I'm getting comfortable with OSS workflows and joining open-source communities focused on education, HCI, and accessibility—causes I care deeply about. I'm practicing minimal reproducible issues, focused PRs (docs & small fixes), and writing better code reviews.",
      focus: "Issues · PRs · Code reviews · Project etiquette",
      links: []
    }
  ]

  const goals = [
    "Design and 3D print a series of custom figurines for my blindbox series",
    "Develop more 3D assets and Three.js artifact (with orbit controls & annotations) viewer for the ARI Website.",
    "Contribute my first open Source PR to an education/UX‑related project"
  ]

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Current Side Projects & Goals</h1>
        <p className="text-xl text-gray-300">
          Things I'm actively shaping outside formal coursework: student leadership, web & 3D experiments, service, and open‑source practice.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Focus:</strong> {project.focus}
              </p>
              {project.links.length > 0 && (
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
                        link.primary
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-white mb-6">Near‑Term Goals</h2>
        <ul className="space-y-3 mb-6">
          {goals.map((goal, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <span className="text-blue-400 mr-3">•</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 italic">Updated Fall 2025.</p>
      </div>
    </div>
  )
}

export default CurrentProjects