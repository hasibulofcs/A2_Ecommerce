import express, { Application, Request, Response } from "express";
import { bootstrapLoader } from "./server";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

export default app;
