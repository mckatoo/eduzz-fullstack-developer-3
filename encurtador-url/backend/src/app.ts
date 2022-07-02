import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import redirect from './routes/redirect';
import shortener from './routes/shortener';

if (!!process.env.NODE_ENV)
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/shorten", shortener);
app.get("/:hash", redirect);

app.use("/", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default app;
