import Link from "next/link";
import { movies } from "../utils";

export default function MoviesPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Link
              href={`/movies/${movie.id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
