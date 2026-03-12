import { info } from "../data/info"

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm text-stone-400 tracking-widest uppercase mb-2">Get In Touch</p>
      <h2 className="text-3xl font-light text-stone-800 mb-6">Contact</h2>
      <p className="text-stone-400 max-w-md leading-relaxed mb-10">
        I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
      </p>

      <div className="flex flex-col gap-4">
        <a href={`mailto:${info.email}`}
          className="group flex items-center gap-3 text-stone-500 hover:text-stone-800 transition-colors w-fit"
        >
          <span className="text-sm border-b border-stone-200 group-hover:border-stone-800 transition-colors pb-0.5">
            {info.email}
          </span>
        </a>
        <a href={info.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 text-stone-500 hover:text-stone-800 transition-colors w-fit"
        >
          <span className="text-sm border-b border-stone-200 group-hover:border-stone-800 transition-colors pb-0.5">
            GitHub
          </span>
        </a>
        
        <a href={info.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 text-stone-500 hover:text-stone-800 transition-colors w-fit"
        >
          <span className="text-sm border-b border-stone-200 group-hover:border-stone-800 transition-colors pb-0.5">
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  )
}