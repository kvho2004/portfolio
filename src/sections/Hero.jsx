import { info } from "../data/info";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm text-stone-400 tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-light text-stone-800 tracking-tight mb-6">
          {info.shortName}
        </h1>
        <p className="text-lg text-stone-500 mb-4 max-w-xl">{info.tagline}</p>
        <p className="text-stone-400 max-w-xl leading-relaxed mb-10">
          {info.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={info.resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-stone-800 text-white text-sm rounded-full hover:bg-stone-600 transition-colors"
          >
            View Resume
          </a>

          <a
            href={info.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 border border-stone-300 text-stone-600 text-sm rounded-full hover:border-stone-500 transition-colors"
          >
            GitHub
          </a>

          <a
            href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 border border-stone-300 text-stone-600 text-sm rounded-full hover:border-stone-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
