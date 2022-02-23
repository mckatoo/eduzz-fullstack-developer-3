import crypto from 'crypto'
import { Request, Response, Router } from 'express'

import { URL } from '../model/url'

const shortenerRoute = Router()

shortenerRoute.post('/', async (req: Request, res: Response) => {
  const { url } = req.body
  const urlExist = await URL.findOne({ url })

  if (urlExist) {
    return res.json(urlExist)
  }

  const hash = crypto.createHash('MD4').update(url).digest('hex').substring(0, 8)
  const shortUrl = `${req.protocol}://${req.get('host')}/${hash}`
  const newUrl = await URL.create({ url, hash, shortUrl })

  return res.json(newUrl)
})

export { shortenerRoute }