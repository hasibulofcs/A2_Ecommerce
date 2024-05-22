import express, { Request, Response } from "express";
import { bootstrapLoader } from "./server";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

bootstrapLoader(); //starting the server

export default app;
