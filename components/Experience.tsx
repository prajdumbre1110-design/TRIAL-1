export default function Experience() {
  const jobs = [
    {
      company: "Principal Global Services",
      role: "Process Specialist",
      period: "May 2024 – Present",
      points: [
        "Prepare and review financial reports for Alternative Investment Funds.",
        "Perform quality checks to ensure accuracy and compliance with reporting standards.",
        "Collaborate with global teams to deliver timely investor reporting.",
        "Support fund accounting processes and operational controls.",
      ],
    },
    {
      company: "FIS Global",
      role: "Associate II – Fund Accounting",
      period: "Jan 2023 – May 2024",
      points: [
        "Performed Cash & Position Reconciliations.",
        "Processed Corporate Actions and investment transactions.",
        "Supported NAV calculations and fund accounting activities.",
        "Investigated and resolved reconciliation breaks.",
      ],
    },
    {
      company: "Atos Syntel",
      role: "Associate",
      period: "Sep 2021 – Jan 2023",
      points: [
        "Prepared financial reports and operational deliverables.",
        "Supported investment operations and reconciliations.",
        "Worked closely with clients and internal stakeholders.",
        "Maintained high-quality standards and process accuracy.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Professional Experience
        </h2>

        <div className="space-y-10">

          {jobs.map((job) => (
            <div
              key={job.company}
              className="bg-white rounded-2xl shadow-lg p-8 border"
            >
              <div className="flex flex-col md:flex-row md:justify-between">

                <div>
                  <h3 className="text-2xl font-bold">
                    {job.company}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-1">
                    {job.role}
                  </p>
                </div>

                <p className="text-gray-500 mt-2 md:mt-0">
                  {job.period}
                </p>

              </div>

              <ul className="list-disc pl-5 mt-6 space-y-2 text-gray-700">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}