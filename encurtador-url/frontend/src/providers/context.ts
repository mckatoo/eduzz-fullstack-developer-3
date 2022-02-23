import { createContext } from 'react'

export type ShortenerContextProps = {
  loading: boolean
  shortenerState: {
    url: string
    hash: string
    shortURL: string
  }
  shortenURL: (url: string) => Promise<void>
  getURL: (url: string) => Promise<void>
}

const ShortenerContext = createContext<ShortenerContextProps>({
  loading: false,
  shortenerState: {
    url: '',
    hash: '',
    shortURL: ''
  },
  shortenURL: (url: string) => Promise.resolve(),
  getURL: (hash: string) => Promise.resolve()
})

export default ShortenerContext