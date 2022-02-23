import { Request, Response } from 'express'

import { URL } from '../model/url'

const redirect = async (req: Request, res: Response) => {
  const { hash } = req.params
  const urlExist = await URL.findOne({ hash })

  if (urlExist) {
    return res.redirect(urlExist.url)
  }

  return res.status(404).json({ error: 'Url not found' })
}

export { redirect }