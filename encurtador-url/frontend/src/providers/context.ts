import { createContext } from 'react'

export type ShortenerContextProps = {
  loading: boolean
  url: string
  shortUrl: string
  shortenURL: (url: string) => Promise<void>
}

const ShortenerContext = createContext<ShortenerContextProps>({
  loading: false,
  url: '',
  shortUrl: '',
  shortenURL: () => Promise.resolve()
})

export default ShortenerContext
