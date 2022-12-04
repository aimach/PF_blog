import Link from "next/link"

export default function Post({ post }) {
  return <>
    <main className="flex flex-row  m-8">
      <img src='https://picsum.photos/200/300' alt='random img' />
      <div className="mx-8 flex flex-col">
        <h1 className='text-3xl font-bold mb-8'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </main>

  </>
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(response => response.json())
  // console.log(posts)
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  // console.log(posts)
  return {
    paths: posts.map(post => ({ params: { id: post.id.toString() } })),
    fallback: false,
  }
}