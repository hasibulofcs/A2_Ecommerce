import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/DBConnection";

const app: Application = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send({ message: "Path not found!", option: "/api" });
});

export default app;
