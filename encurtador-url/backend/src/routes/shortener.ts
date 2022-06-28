import crypto from "crypto";
import { Request, Response, Router } from "express";

import { URL } from "../model/url";

export default async (req: Request, res: Response) => {
  const { url } = req.body;

  const hash = crypto
    .createHash("MD4")
    .update(url)
    .digest("hex")
    .substring(0, 8);
  await URL.create({ url, hash });

  return res.json({ hash });
};
