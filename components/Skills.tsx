export default function Skills() {
  const skills = [
    "Financial Reporting",
    "Fund Accounting",
    "Alternative Investments",
    "Investment Operations",
    "Cash Reconciliation",
    "Position Reconciliation",
    "Transaction Reconciliation",
    "Corporate Actions",
    "Client Reporting",
    "Financial Analysis",
    "Advanced Excel",
    "Power BI",
    "SQL",
    "Bloomberg",
    "Intellimatch",
    "PEGA",
    "JIRA",
    "Salesforce",
    "SEI",
    "Canoe",
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}