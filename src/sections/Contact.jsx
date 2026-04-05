import { info } from "../data/info"
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <p
        className={`text-sm ${theme.text.muted} tracking-widest uppercase mb-2`}
      >
        Get In Touch
      </p>
      <h2 className={`text-3xl font-light ${theme.text.primary} mb-6`}>
        Contact
      </h2>
      <p
        className={`text-base ${theme.text.secondary} max-w-md leading-relaxed mb-10`}
      >
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, my inbox is always open.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${info.email}`}
          className={`group flex items-center gap-3 ${theme.text.muted} hover:${theme.text.primary} transition-colors w-fit`}
        >
          <span
            className={`text-sm border-b ${theme.text.muted} group-hover:${theme.text.primary} transition-colors pb-0.5`}
          >
            {info.email}
          </span>
        </a>
        <a
          href={info.github}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center gap-3 ${theme.text.muted} hover:${theme.text.primary} transition-colors w-fit`}
        >
          <span
            className={`text-sm border-b ${theme.text.muted} group-hover:${theme.text.primary} transition-colors pb-0.5`}
          >
            GitHub
          </span>
        </a>

        <a
          href={info.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center gap-3 ${theme.text.muted} hover:${theme.text.primary} transition-colors w-fit`}
        >
          <span
            className={`text-sm border-b ${theme.text.muted} group-hover:${theme.text.primary} transition-colors pb-0.5`}
          >
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  );
}