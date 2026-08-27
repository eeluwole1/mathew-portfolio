export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Elusiyan Mathew Eluwole</span>
        <div className="flex gap-4">
          <a className="hover:underline" href="https://github.com/eeluwole1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/mathew-eluwole-59063721a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
