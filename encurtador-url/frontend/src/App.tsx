import './App.css'

import { useState } from 'react'

import { Input } from './components/Input'
// import { useShortener } from './hooks/shortener-hooks';
import api from './services/api'

function App() {
  // const { shortenURL } = useShortener()

  const [shortener, setShortener] = useState({
    loading: false,
    shortURL: '',
    url: ''
  });

  const { loading } = shortener

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (shortener.url.length === 0) return

    const { data: { shortUrl, url } } = await api.post('/shorten', { url: shortener.url })
    console.log('shortURL', shortUrl)

    setShortener({
      loading: !loading,
      shortURL: shortUrl,
      url,
    })
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setShortener((prevState) => ({
      ...prevState,
      loading: !loading,
      url: newValue,
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a URL to shorten in the field below.
        </p>
        <form onSubmit={handleSubmit}>
          <Input onChange={onInputChange} />
          <button type="submit">Shorten</button>
        </form>
        {
          !!shortener.shortURL.length && <>{
            !!(loading)
              ? <>Loading...</>
              : (
                <>
                  <a
                    className="App-link"
                    href={shortener.shortURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Short Link
                  </a>
                  <a
                    className="App-link"
                    href={shortener.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Original Link
                  </a>
                </>
              )
          }</>
        }
      </header>
    </div>
  );
}

export default App;
