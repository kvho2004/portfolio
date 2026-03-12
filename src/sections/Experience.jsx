import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm text-stone-400 tracking-widest uppercase mb-2">
        Where I've Been
      </p>
      <h2 className="text-3xl font-light text-stone-800 mb-16">Experience</h2>

      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <div key={job.company} className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <p className="text-xs text-stone-400 mt-1">{job.period}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-stone-800 font-medium">{job.role}</h3>
              <p className="text-sm text-stone-500 mb-3">{job.company}</p>
              <ul className="flex flex-col gap-1.5">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm text-stone-400 leading-relaxed pl-3 border-l border-stone-200"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
