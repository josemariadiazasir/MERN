import express, { json } from "express";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";

const app = express();
app.use(cors());
app.disable("x-powered-by");
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hell o World!" });
});

app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
