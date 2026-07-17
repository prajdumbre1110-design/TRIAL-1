export default function Certifications() {
  const certs = [
    "Advanced Microsoft Excel",
    "Tally ERP",
    "Microsoft Office",
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certs.map((cert) => (
            <div
              key={cert}
              className="bg-gray-50 rounded-2xl p-8 shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">
                {cert}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}