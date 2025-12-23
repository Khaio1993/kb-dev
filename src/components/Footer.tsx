import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold tracking-tighter">KB.</div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Khalil Ben Cherifa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


