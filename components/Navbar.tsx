export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="text-2xl font-bold text-blue-700">
          PRAJAKTA DUMBRE
        </a>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#education" className="hover:text-blue-600 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}