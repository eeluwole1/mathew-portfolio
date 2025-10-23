import { Link, NavLink } from "react-router-dom";

const base =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${base} bg-black text-white`
    : `${base} text-black hover:bg-gray-100`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="font-bold tracking-tight text-black hover:opacity-80 transition"
        >
          Mathew • Portfolio
        </Link>

        {/* Nav Links */}
        <div className="flex gap-1">
          <NavLink end to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={getLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
