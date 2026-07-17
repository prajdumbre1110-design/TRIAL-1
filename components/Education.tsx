const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institute: "Prin. L. N. Welingkar Institute of Management",
    year: "2023",
    specialization: "Finance",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    institute: "Savitribai Phule Pune University",
    year: "2018",
    specialization: "Commerce",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Education
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600">
            Academic qualifications supporting my career in Finance and Investment Operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {item.degree}
              </h3>

              <p className="mt-3 font-semibold text-lg">
                {item.institute}
              </p>

              <p className="mt-2 text-gray-600">
                Specialization: {item.specialization}
              </p>

              <span className="inline-block mt-5 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {item.year}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}