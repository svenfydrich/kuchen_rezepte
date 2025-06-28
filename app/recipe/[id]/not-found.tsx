import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-heading font-bold text-bakery-brown mb-6">
          Dat gibt&apos;s nich...
        </h1>
        <p className="text-xl text-gray-700 mb-10 font-body">
          Wie bist du hierhergekommen?
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-bakery-brown text-white px-8 py-4 rounded-lg hover:bg-bakery-brown transition-colors duration-200 font-body text-lg"
        >
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Zurück zu den Rezepten
        </Link>
      </div>
    </div>
  );
}
