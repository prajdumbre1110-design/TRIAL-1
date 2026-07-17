export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Career Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="mt-2 text-gray-300">Years Experience</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">3</h3>
            <p className="mt-2 text-gray-300">Global Companies</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="mt-2 text-gray-300">Quality Focus</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">24×7</h3>
            <p className="mt-2 text-gray-300">Global Operations Support</p>
          </div>

        </div>
      </div>
    </section>
  );
}