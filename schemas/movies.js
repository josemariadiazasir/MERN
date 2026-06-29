import z from "zod";

const moviesSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required",
  }),
  year: z.number().int().positive().min(1900).max(2026),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: "poster must be a valid URL",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Crime",
      "Drama",
      "Adventure",
      "Sci-Fi",
      "Romance",
      "Animation",
      "Biography",
    ]),
    {
      required_error: "genre must be one of the allowed values",
      invalid_type_error: "movie genre must be an array of enum Genre",
    },
  ),
});

export function validateMovie(object) {
  return moviesSchema.safeParse(object);
}

export function validatePartialMovie(object) {
  return moviesSchema.partial().safeParse(object);
}
