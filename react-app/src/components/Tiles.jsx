function Tiles() {
  const tiles = [
    {
      title: "What I'm Up to Right Now",
      subtitle: "(Academics, Research, Professional Development)",
      image: "/images/pic01.jpg",
      link: "/what-im-up-to",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Current Side Projects",
      subtitle: "(Extracurriculars, Experimenting, For Funsies)",
      image: "/images/pic02.jpg",
      link: "/current-projects",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Archive",
      subtitle: "(Past Projects, Completed Work, etc.)",
      image: "/images/pic03.jpg",
      link: "/archive",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tiles.map((tile, index) => (
        <a
          key={index}
          href={tile.link}
          className="group relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] block"
        >
          {/* Background Image */}
          <img
            src={tile.image}
            alt={tile.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-60 group-hover:opacity-80 transition-opacity`}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-4px]">
              {tile.title}
            </h2>
            <p className="text-sm text-gray-200 opacity-90">{tile.subtitle}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Tiles;
