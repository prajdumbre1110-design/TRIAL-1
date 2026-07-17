export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          I'm currently open to opportunities in Financial Reporting, Fund
          Accounting, Investment Operations, Alternative Investments, and
          Reconciliations.
        </p>

        <div className="mt-12 space-y-6 text-lg">

          {/* Email */}
          <div>
            <span className="font-semibold">📧 Email:</span>{" "}
            <a
              href="mailto:prajaktadumbre712@gmail.com"
              className="text-blue-600 hover:underline"
            >
              prajaktadumbre712@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <span className="font-semibold">💼 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/prajakta-dumbre-421214195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              www.linkedin.com/in/prajakta-dumbre-421214195
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="font-semibold">📍 Location:</span> Pune,
            Maharashtra, India
          </div>

        </div>

      </div>
    </section>
  );
}