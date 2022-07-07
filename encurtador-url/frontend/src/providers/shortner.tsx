import React, { useCallback, useState } from 'react'

import api from '../services/api'
import ShortenerContext, { ShortenerContextProps } from './context'

type ShortenerProviderProps = {
  children: React.ReactNode
}

const ShortenerProvider = ({ children }: ShortenerProviderProps) => {
  const [shortener, setShortener] = useState({
    loading: false,
    url: '',
    shortUrl: '',
    error: '',
  })

  const shortenURL = async (url: string) => {
    try {
      const hash = (await api.post('/shorten', { url })).data.hash
      setShortener({
        loading: false,
        shortUrl: `${process.env.REACT_APP_API_URL}/${hash}`,
        error: '',
        url
      })
    } catch (e) {
      const error = (e as Error).message
      setShortener({
        loading: false,
        url,
        shortUrl: '',
        error
      })
    }
  }

  const contextValues: ShortenerContextProps = {
    ...shortener,
    shortenURL: useCallback((url: string) => shortenURL(url), []),
  }

  return (
    <ShortenerContext.Provider value={contextValues} >
      {children}
    </ShortenerContext.Provider>
  )
}

export default ShortenerProvider
