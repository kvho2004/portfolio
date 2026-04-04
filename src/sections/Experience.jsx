import { useTheme } from "../context/ThemeContext";
import { experience } from "../data/experience";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section className={`${theme.bg.secondary} transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <p
          className={`text-xs font-mono tracking-widest uppercase mb-2 ${theme.text.muted}`}
        >
          Where I've Been
        </p>
        <h2 className={`text-3xl font-light mb-16 ${theme.text.primary}`}>
          Experience
        </h2>

        <div className="flex flex-col gap-12">
          {experience.map((job) => (
            <div key={job.company} className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <p className={`text-xs mt-1 font-mono ${theme.text.muted}`}>
                  {job.period}
                </p>
              </div>
              <div className="md:col-span-3">
                <h3 className={`font-medium mb-1 ${theme.text.primary}`}>
                  {job.role}
                </h3>
                <p className={`text-sm mb-3 ${theme.text.secondary}`}>
                  {job.company}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className={`text-sm leading-relaxed pl-3 border-l ${theme.text.muted} ${theme.card.divider}`}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
