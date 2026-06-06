export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nama */}
        <div className="text-xl font-bold tracking-tighter">PORTFOLIO.</div>

        {/* Menu Navigasi */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Tombol Mobile (Simple saja dulu) */}
        <div className="md:hidden">
          <button className="text-gray-600">Menu</button>
        </div>
      </div>
    </nav>
  );
}
