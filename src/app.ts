import express, { Request, Response } from "express";
import { bootstrapLoader } from "./server";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

bootstrapLoader(); //starting the server

export default app;
