import { createContext } from 'react'

const themes = {
  primary: {
    background: '#333',
    color: '#f5f5f5',
  },
  secondary: {
    background: '#f5f5f5',
    color: '#333',
  },
}

const ThemeContext = createContext({theme: themes.primary, token: ''})

export { ThemeContext, themes }
