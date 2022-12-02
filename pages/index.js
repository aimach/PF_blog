import { clearPreviewData } from 'next/dist/server/api-utils'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
        {posts.map((post, key) =>
          <Link href={`/blog/${post.id}`}>
            <li key={key}>
              <h1 className="text-3xl font-bold underline">{post.id} - {post.title}
              </h1></li>;
          </Link>
        )}
      </ul>
      <div className='flex flex-row rounded-md w-1/2 min-w-fit bg-gradient-to-r from-purple-500 to-pink-500'>
        <img src='https://i.picsum.photos/id/1047/536/354.jpg?hmac=Hqs-Rz08WiLc2elw4gHvY1P-wxDJfmiZ-CSay2BH-1U' alt='random img' className='w-1/2 rounded' />
        <form className='p-8'>
          <h1 className='text-xl'>Se connecter</h1>
          <div className='py-8'>
            <label for='username' className=''>Username</label><br />
            <input type='text' name='username' id='username' className='rounded bg-slate-100 border-black p-2' />
          </div>
          <div className='py-8'>
            <label for='username' className=''>Password</label><br />
            <input type='text' name='username' id='username' className='rounded bg-slate-100 border-black p-2' />
          </div>
          <button type="submit" className='bg-emerald-400	p-2 rounded text-white font-bold'>Se connecter</button>
        </form>
      </div>
    </>

  )
}

export async function getStaticProps() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    .then(response => response.json())
  // console.log(posts)
  return {
    props: {
      posts
    }
  }
}
