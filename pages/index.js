import { clearPreviewData } from 'next/dist/server/api-utils'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(n => n + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Mon sujet de porte-folio 1</title>
      </Head>
      <ul>
        {posts.map((post, key) => <li key={key}>{post.title}</li>)}
      </ul>
    </>

  )
}

export async function getStaticProps() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    .then(response => response.json())
  return {
    props: {
      posts
    }
  }
}
