import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm text-stone-400 tracking-widest uppercase mb-2">What I've Built</p>
      <h2 className="text-3xl font-light text-stone-800 mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-stone-200 rounded-2xl p-6 hover:border-stone-400 transition-colors flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-stone-800 font-medium">{project.title}</h3>
                <p className="text-sm text-stone-400">{project.subtitle}</p>
              </div>
              {project.status === "In Progress" && (
                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  In Progress
                </span>
              )}
            </div>

            <p className="text-sm text-stone-500 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-stone-400 bg-stone-100 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {project.github && (
              
               <a href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-stone-500 hover:text-stone-800 transition-colors mt-auto"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}