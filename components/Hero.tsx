export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="uppercase tracking-[5px] text-blue-300 mb-3">
            Finance & Investment Operations Professional
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Prajakta
            <br />
            <span className="text-blue-300">Dumbre</span>
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-8">
            Finance professional with <strong>5+ years</strong> of experience in
            Fund Accounting, Financial Reporting, Investment Operations,
            Alternative Investments, Reconciliations, Corporate Actions, and
            Client Support.
          </p>

          <p className="mt-5 text-gray-300 leading-8">
            Experienced in delivering accurate financial reporting,
            maintaining operational controls, supporting global investment
            managers, and improving process efficiency across financial
            services organizations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/Prajakta_Dumbre_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-blue-900 px-7 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-300">5+</h2>
            <p className="mt-2 text-gray-200">
              Years Experience
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-300">3</h2>
            <p className="mt-2 text-gray-200">
              Global Organizations
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-300">100%</h2>
            <p className="mt-2 text-gray-200">
              Commitment to Accuracy
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-300">Finance</h2>
            <p className="mt-2 text-gray-200">
              Investment Operations
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}