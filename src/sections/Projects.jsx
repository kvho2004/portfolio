import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";
import highlightText from "../utils/highlight";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`transition-colors duration-500 ${theme.bg.primary}`}>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <p
          className={`text-xs font-mono tracking-widest uppercase mb-2 ${theme.text.muted}`}
        >
          What I've Built
        </p>
        <h2 className={`text-3xl font-light mb-16 ${theme.text.primary}`}>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`border rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-300 ${theme.card.border} hover:border-opacity-80 ${theme.card.bg}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`font-medium mb-0.5 ${theme.text.primary}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${theme.text.muted}`}>
                    {project.subtitle}
                  </p>
                </div>
                {project.status === "In Progress" && (
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className={`text-xs ${theme.text.muted}`}>
                      In Progress
                    </span>
                  </div>
                )}
                {project.status === "Completed" && (
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className={`text-xs ${theme.text.muted}`}>
                      Completed
                    </span>
                  </div>
                )}
                {project.status === "In Testing" && (
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className={`text-xs ${theme.text.muted}`}>
                      In User Testing
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${theme.text.secondary}`}
                dangerouslySetInnerHTML={{ __html: highlightText(project.description, project.highlights) }}
              >
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded-full font-mono ${theme.text.muted} ${theme.bg.secondary}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 hover:opacity-100 opacity-60 ${theme.text.secondary}`}
                  >
                    View on GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 hover:opacity-100 opacity-60 ${theme.text.secondary}`}
                  >
                    View Demo →
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 hover:opacity-100 opacity-60 ${theme.text.secondary}`}
                  >
                    View Documentation →
                  </a>
                )}
                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 hover:opacity-100 opacity-60 ${theme.text.secondary}`}
                  >
                    View Client Website →
                  </a>
                )}
                {project.live && (
                  <a  
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 hover:opacity-100 opacity-60 ${theme.text.secondary}`}
                  >
                    View Live Site →
                  </a>
                )}  
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
