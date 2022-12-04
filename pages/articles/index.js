import Link from "next/link";
import Head from "next/head";

const Test = ({ posts }) => {
  return (
    <>
      <Head>
        <title>PF1 - Blog | Articles</title>
      </Head>
      <div className='flex flex-row flex-wrap justify-center'>
        {posts.map((post, key) =>
          <div key={key} className='flex flex-col rounded-md w-1/5 text-center m-10 border hover:text-primary-color hover:border-primary-color'>
            <Link href={`/articles/${post.id}`}>
              <img src='https://picsum.photos/300/200' alt='random img' className='rounded' />
              <div>
                <h1 className="m-3">{post.title}</h1>
              </div>
            </Link>
          </div>
        )}
      </div>

    </>

  )
}

export default Test;

export async function getStaticProps() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  return {
    props: {
      posts
    }
  }
}