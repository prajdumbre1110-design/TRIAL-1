const skillCategories = [
  {
    title: "Finance & Investment",
    skills: [
      "Fund Accounting",
      "Financial Reporting",
      "Investment Operations",
      "Alternative Investments",
      "NAV Review",
      "Custodian Services",
    ],
  },
  {
    title: "Reconciliations",
    skills: [
      "Cash Reconciliation",
      "Position Reconciliation",
      "Transaction Reconciliation",
      "Corporate Actions",
      "Exception Management",
      "Break Investigation",
    ],
  },
  {
    title: "Applications & Tools",
    skills: [
      "MS Excel",
      "Advanced Excel",
      "Bloomberg",
      "Intellimatch",
      "PEGA",
      "Canoe",
      "JIRA",
      "Salesforce",
      "Power BI",
      "SQL",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Client Support",
      "Stakeholder Management",
      "Quality Assurance",
      "Process Improvement",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Core Skills
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600">
            Technical expertise developed through 5+ years in global financial
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}