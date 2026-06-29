import { randomUUID } from "node:crypto";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const movies = require("../movies.json");

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLocaleLowerCase() === genre.toLowerCase()),
      );
    }
    return movies;
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id);
    return movie;
  }

  static async create({ input }) {
    const movie = {
      id: randomUUID(),
      ...input,
    };
    movies.push(movie);
    return movie;
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) return false;
    movies.splice(movieIndex, 1);
    return true;
  }

  static async update({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) return false;

    const updateMovie = {
      ...movies[movieIndex],
      ...input,
    };
    movies[movieIndex] = updateMovie;
    return movies[movieIndex];
  }
}
