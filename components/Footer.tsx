export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl font-bold">Prajakta Dumbre</h2>

        <p className="mt-2 text-blue-200">
          Finance & Investment Operations Professional
        </p>

        <p className="mt-6 text-sm text-blue-300">
          © {new Date().getFullYear()} Prajakta Dumbre. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}