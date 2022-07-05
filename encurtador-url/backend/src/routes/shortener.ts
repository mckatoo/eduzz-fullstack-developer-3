import { Request, Response } from "express";

import { URL } from "../model/url";
import crypto from "crypto";

export default async (req: Request, res: Response) => {
  const { url } = req.body;

  const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(!urlPattern.test(url)) return res.status(404).json({error: 'Invalid URL'})

  const hash = crypto
    .createHash("MD4")
    .update(url)
    .digest("hex")
    .substring(0, 8);

  await URL.create({ url, hash });

  return res.status(201).json({ hash });
};
