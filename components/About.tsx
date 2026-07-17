export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            I am a Finance & Investment Operations Professional with over
            <strong> 5 years of experience </strong>
            supporting global financial institutions in Fund Accounting,
            Financial Reporting, Alternative Investments,
            Reconciliations, Corporate Actions and Investment Operations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 rounded-xl p-8 shadow">

            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              Professional Summary
            </h3>

            <p className="text-gray-600 leading-8">
              Throughout my career I have worked with leading financial
              organizations delivering high-quality financial reporting,
              investment operations support, reconciliation activities,
              regulatory compliance and operational excellence.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              I enjoy solving operational challenges, improving processes,
              collaborating with global teams and ensuring accurate
              financial information for clients and stakeholders.
            </p>

          </div>

          <div className="bg-blue-700 text-white rounded-xl p-8 shadow">

            <h3 className="text-2xl font-bold mb-6">
              Highlights
            </h3>

            <ul className="space-y-4">

              <li>✔ 5+ Years in Investment Operations</li>

              <li>✔ Fund Accounting & Financial Reporting</li>

              <li>✔ Alternative Investment Operations</li>

              <li>✔ Cash & Position Reconciliations</li>

              <li>✔ Corporate Actions Processing</li>

              <li>✔ Client Reporting & Support</li>

              <li>✔ Advanced Excel & Investment Systems</li>

              <li>✔ Global Financial Services Experience</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}