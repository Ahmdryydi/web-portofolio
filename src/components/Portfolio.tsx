export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Sistem Manajemen Perpustakaan",
      category: "Web Development",
      description:
        "Aplikasi CRUD komprehensif yang dibangun menggunakan framework Laravel 12 dengan struktur dan relasi database yang dirancang secara manual tanpa auto-migration.",
      image: "https://placehold.co/600x400/eeeeee/31343c?text=Laravel+Project", // Ini gambar sementara
    },
    {
      id: 2,
      title: "Desain Poster Badminton Sarkas",
      category: "Graphic Design / PDD",
      description:
        "Perancangan tata letak visual dan informasi khusus untuk acara turnamen olahraga, berfokus pada estetika dan kejelasan detail waktu acara.",
      image: "https://placehold.co/600x400/eeeeee/31343c?text=Desain+Poster",
    },
    {
      id: 3,
      title: "Logika LED & 7-Segment Arduino",
      category: "Mikrokontroler",
      description:
        "Pemrograman sistem perangkat keras menggunakan Arduino untuk mengatur puluhan pola variasi lampu LED dan tampilan jam digital.",
      image: "https://placehold.co/600x400/eeeeee/31343c?text=Arduino+Project",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Karya & Proyek</h2>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Bagian Gambar */}
              <div className="h-48 bg-gray-200 w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bagian Teks */}
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
