export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Mari Terhubung</h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Saya selalu terbuka untuk diskusi kolaborasi mengenai pengembangan web, riset keamanan informasi, eksplorasi teknologi jaringan, maupun proyek desain grafis. Atau mungkin sekadar mencari teman mabar Mobile Legends (saya cukup bisa diandalkan jika memakai Claude atau Gusion!). Jangan ragu untuk menyapa.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:riyadibalon01@gmail.com" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Kirim Email
          </a>
          <a 
            href="https://github.com/usernamekamu" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}