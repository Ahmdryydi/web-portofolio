export default function About() {
  const skills = [
    "Laravel",
    "Node.js",
    "SQL (Manual Query)",
    "UI/UX Design",
    "Networking",
    "Mikrokontroler",
    "Graphic Design",
  ];

  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tentang Saya</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Saya adalah mahasiswa Teknik Informatika semester 4 dengan konsentrasi
          Jaringan. Selain mengeksplorasi arsitektur jaringan dan perangkat
          keras, saya memiliki minat yang kuat dalam pengembangan web dan
          perancangan basis data. Di luar hal teknis, saya aktif mengelola aspek
          visual, desain grafis, dan acara kemahasiswaan melalui peran di tim
          Publikasi, Dekorasi, dan Dokumentasi (PDD).
        </p>

        {/* Daftar Keahlian */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
