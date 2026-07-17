const certifications = [
  {
    title: "Advanced Microsoft Excel",
    issuer: "Professional Certification",
  },
  {
    title: "Microsoft Office",
    issuer: "Professional Certification",
  },
  {
    title: "Tally ERP",
    issuer: "Professional Certification",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Certifications
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600">
            Professional certifications supporting my finance and technical expertise.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-50 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">🏆</div>

              <h3 className="text-xl font-bold text-blue-700">
                {cert.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {cert.issuer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}