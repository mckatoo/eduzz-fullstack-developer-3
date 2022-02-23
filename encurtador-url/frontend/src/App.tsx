import './App.css'

import { useState } from 'react'

import { Input } from './components/Input'
import { useShortener } from './hooks/shortener-hooks'

function App() {
  const { loading, shortUrl, url, shortenURL } = useShortener()
  const [newUrl, setNewUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await shortenURL(newUrl)
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value
    setNewUrl(newUrl)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a URL to shorten in the field below.
        </p>
        <form onSubmit={handleSubmit}>
          <Input onChange={inputChange} />
          <button type="submit">Shorten</button>
        </form>
        {!!shortUrl.length && (
          !loading
            ? <>Loading...</>
            : <>
              <a
                className="App-link"
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Short Link
              </a>
              <a
                className="App-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Original Link
              </a>
            </>
        )
        }
      </header>
    </div>
  );
}

export default App;
