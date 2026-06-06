import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-4">
        {/* ... (kode hero section kamu biarkan sama) ... */}
        <h1 className="text-5xl font-bold mb-4 text-center mt-16">
          Hi, I'm <span className="text-blue-600">Ahmad Riyadi</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-lg">
          Mahasiswa Teknik Informatika | Web, Network, & UI/UX Enthusiast
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        >
          Mulai Jelajahi
        </a>
      </main>

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
