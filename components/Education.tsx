export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">
              MBA - Finance
            </h3>

            <p className="text-blue-600 mt-2">
              Welingkar Institute of Management
            </p>

            <p className="text-gray-500 mt-2">
              2023
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">
              Bachelor of Commerce
            </h3>

            <p className="text-blue-600 mt-2">
              Savitribai Phule Pune University
            </p>

            <p className="text-gray-500 mt-2">
              2018
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}