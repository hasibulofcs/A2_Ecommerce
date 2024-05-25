import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/DBConnection";

const app: Application = express();

const connectionStat = connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({ ...connectionStat, message: "Hello World! Server has updated!" });
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send({ message: "Path not found!", option: "/api" });
});

export default app;
