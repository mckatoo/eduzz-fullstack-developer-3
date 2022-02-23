import React, { useState } from 'react'

import api from '../services/api'
import ShortenerContext, { ShortenerContextProps } from './context'

type ShortenerProviderProps = {
  children: React.ReactNode
}

const ShortenerProvider = ({ children }: ShortenerProviderProps) => {
  const [shortener, setShortener] = useState({
    loading: false,
    shortenerState: {
      url: '',
      hash: '',
      shortURL: ''
    }
  })

  const getURL = async (hash: string) => {
    setShortener((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }))

    const { data } = await api.get(`/${hash}`)
    setShortener((prevState) => ({
      ...prevState,
      url: data.url,
      hash: data.hash,
      shortURL: data.shortURL,
      loading: !prevState.loading,
    }))
  }

  const shortenURL = async (url: string) => {
    const { data: { hash, shortURL, url: _url } } = await api.post('/shorten', { url })

    setShortener((prevState) => ({
      ...prevState,
      url: _url,
      hash,
      shortURL,
      loading: !prevState.loading
    }))
  }

  const { loading, shortenerState } = shortener

  const contextValues: ShortenerContextProps = {
    loading,
    shortenerState,
    shortenURL: (url: string) => shortenURL(url),
    getURL: (hash: string) => getURL(hash)
  }

  return (
    <ShortenerContext.Provider value={contextValues} >
      {children}
    </ShortenerContext.Provider>
  )
}

export default ShortenerProvider