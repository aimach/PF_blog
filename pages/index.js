import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Mon sujet de porte-folio 1</title>
      </Head>
      <div className='flex flex-col items-center my-8'>
        <img src='https://picsum.photos/600/200' alt='random img' />
        <h1 className='text-3xl font-bold my-8'>Homepage</h1>
        <p className='m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link href='/articles'>
          <button type='button' className='bg-primary-color hover:bg-[#C2753A] text-white py-2 px-4 rounded my-8'>See articles</button>
        </Link>
      </div>
    </>
  )
}
