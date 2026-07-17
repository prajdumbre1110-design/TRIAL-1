const experiences = [
  {
    company: "Principal Global Services",
    role: "Process Specialist",
    period: "May 2024 – Present",
    points: [
      "Prepared and reviewed financial reports for alternative investment funds.",
      "Performed quality checks to ensure accuracy and compliance with reporting standards.",
      "Managed investment operations and collaborated with global stakeholders.",
      "Supported reconciliation, reporting and operational controls.",
    ],
  },
  {
    company: "FIS Global",
    role: "Associate II – Fund Accounting",
    period: "Jan 2023 – May 2024",
    points: [
      "Performed Cash & Position Reconciliations.",
      "Processed Corporate Actions and NAV activities.",
      "Investigated reconciliation breaks and resolved exceptions.",
      "Worked closely with custody teams and investment managers.",
    ],
  },
  {
    company: "Atos Syntel",
    role: "Associate – Fund Accounting",
    period: "Sep 2021 – Jan 2023",
    points: [
      "Supported daily fund accounting operations.",
      "Prepared financial reports and reconciliations.",
      "Validated transactions and maintained data accuracy.",
      "Ensured timely completion of operational deliverables.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Professional Experience
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600">
            Over 5 years of experience across Fund Accounting,
            Financial Reporting and Investment Operations.
          </p>
        </div>

        <div className="space-y-10">

          {experiences.map((job) => (
            <div
              key={job.company}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold text-blue-700">
                    {job.role}
                  </h3>

                  <p className="text-lg font-semibold mt-2">
                    {job.company}
                  </p>
                </div>

                <span className="mt-4 md:mt-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  {job.period}
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-gray-600">

                {job.points.map((point) => (
                  <li key={point}>
                    ✓ {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}