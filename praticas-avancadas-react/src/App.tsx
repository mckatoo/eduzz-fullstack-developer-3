import './App.css'

import { useEffect, useRef, useState } from 'react'

import { Post, Twitter } from './components/Twitter'
import { ThemeContext, themes } from './Theme'
import { Button } from './components/Twitter/Button'

const App = () => {
  const [actived, setActived] = useState(true)

  const [loading, setLoading] = useState(true)

  const [token, setToken] = useState('')

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setTimeout(() => {
      setToken('12345')
    }, 5000)
  }, [setToken])

  const carregarPosts = async () => {
    setPosts([
      {
        title: 'React',
        description: 'A JavaScript library for building user interfaces',
      },
      {
        title: 'foo',
        description: 'bar',
      },
    ])
  }

  useEffect(() => {
    posts.length > 0 && setLoading(false)
  }, [posts])

  const missaoRef = useRef<HTMLInputElement>(null)
  const carregarPostsRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Ação igual ao autoFocus do HTML
    carregarPostsRef.current?.focus()
  }, [])

  const erroInduzido = [
    {message: 'erro'}
  ]

  const [errar, setErrar] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme: themes.primary, token }}>
      <Button ref={carregarPostsRef} onClick={() => carregarPosts()}>
        Carregar posts
      </Button>
      <Button onClick={() => setActived(false)}>Remove component</Button>
      {!!actived && <Twitter posts={posts} loading={loading} />}
      <br />
      <br />
      <br />
      <input ref={missaoRef} type="text" defaultValue={'MISSÃO'} />
      <Button onClick={() => missaoRef.current?.focus()}>Foco na MISSÃO</Button>
      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          setErrar(true)
        }}
      >
        Induzir ao Erro!!!
      </Button>

      {errar && erroInduzido[100].message}
    </ThemeContext.Provider>
  )
}

export default App
