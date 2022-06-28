import React, { useCallback, useState } from 'react'

import api from '../services/api'
import ShortenerContext, { ShortenerContextProps } from './context'

type ShortenerProviderProps = {
  children: React.ReactNode
}

const ShortenerProvider = ({ children }: ShortenerProviderProps) => {
  const [shortener, setShortener] = useState({
    loading: false,
    shortUrl: '',
    url: ''
  })

  const shortenURL = async (url: string) => {
    const { data: { hash } } = await api.post('/shorten', { url })
    setShortener({
      loading: false,
      shortUrl: `${process.env.REACT_APP_API_URL}/${hash}`,
      url
    })
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
