import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-[#f9fbff] text-center px-6">
      <div>
        <h1 className="text-5xl font-extrabold text-[#4A90E2]">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist. Let’s get you back home.
        </p>

        <Link
          to="/"
          className="inline-flex items-center mt-6 px-5 py-2.5 rounded-lg text-sm font-semibold
                     bg-[#4A90E2] text-white hover:bg-[#357ABD] 
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]
                     shadow-[0_4px_14px_rgba(74,144,226,0.25)] transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
