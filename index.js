import express from "express";
import dotenv from "dotenv";
import connectToDatabse from "./database/index.js";
import animeRouter from "./router/anime.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectToDatabse();

app.get("/apiinfo", (req, res) => {
  res.json({
    getAll: " /api/anime -> get all anime |get|",
    getSingle: "/api/anime/:id -> get single anime |get|",
    create: "/api/anime/create -> create anime |post|",
    update: "/api/anime/update/:id -> update anime |put|",
    delete: " /api/anime/delete/:id -> remove anime |delete|",
  });
});

app.use("/api/anime", animeRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
