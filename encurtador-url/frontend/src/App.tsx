import './App.css';

import { useState } from 'react';
import ReactGA from 'react-ga';

import { CopyButton } from './components/CopyButton';
import { Input } from './components/Input';
import { useShortener } from './hooks/shortener-hooks';

const TRACKING_ID = `${process.env.REACT_APP_PUBLIC_GA_TRACKING}`
ReactGA.initialize(TRACKING_ID)

function App() {
  const { loading, shortUrl, url, shortenURL, error } = useShortener()
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
          <Input onChange={inputChange} className={!!error ? "Error" : ""} />
          {!!error &&
            <p className="Error">
              Please enter a valid URL
            </p>
          }
          <button type="submit">Shorten</button>

          {!!shortUrl.length && (
            !!loading
              ? <>Loading...</>
              : <>
                <div style={{
                  display: 'inlineFlex',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                  <a
                    className="App-link"
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Short Link
                  </a>
                  <CopyButton url={shortUrl} />
                </div>
                <a
                  className="App-link"
                  href={`http://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Original Link
                </a>
              </>
          )}
        </form>
      </header>
    </div >
  );
}

export default App;
