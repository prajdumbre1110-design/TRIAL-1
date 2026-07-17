export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          Finance & Investment Operations Professional
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
          Prajakta
          <br />
          Dumbre
        </h1>

        <p className="mt-8 text-gray-600 text-lg max-w-3xl leading-8">
          Finance & Investment Operations Professional with 5+ years of
          experience supporting global financial institutions across Financial
          Reporting, Fund Accounting, Alternative Investments, Investment
          Operations, and Reconciliations. Experienced in delivering accurate
          financial reporting, maintaining operational excellence, and ensuring
          regulatory compliance.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">

          <a
            href="/Prajakta_Dumbre_Resume.pdf"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl transition"
          >
            Contact Me
          </a>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          <div>
            <h2 className="text-3xl font-bold text-blue-600">5+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">3</h2>
            <p className="text-gray-600">Leading Financial Organizations</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              Financial
            </h2>
            <p className="text-gray-600">Reporting</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              Alternative
            </h2>
            <p className="text-gray-600">Investments</p>
          </div>

        </div>

      </div>
    </section>
  );
}