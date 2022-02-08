import { memo, useContext } from 'react'

import { ThemeContext } from '../../Theme'

export type Post = {
  title: string
  description: string
}

export type TwitterProps = {
  posts: Post[]
  loading: boolean
}

const areEqual = (prevProps: TwitterProps, nextProps: TwitterProps) =>
  prevProps.loading === nextProps.loading

const Twitter = ({ posts, loading }: TwitterProps) => {
  const { theme, token } = useContext(ThemeContext)

  if (!token) return <h1>É preciso autenticação!!!</h1>

  return (
    <>
      {!!(loading && !!token) ? (
        <>Carregando posts...</>
      ) : (
        <div style={{ background: theme.background, color: theme.color }}>
          <ul>
            {posts.map((post) => (
              <li key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

const TwitterMemo = memo(Twitter, areEqual)

export { TwitterMemo as Twitter }
