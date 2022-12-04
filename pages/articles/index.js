import Link from "next/link";

const Test = ({ posts }) => {
  return (
    <>
      <div className='flex flex-row'>
        {posts.map((post, key) =>
          <div key={key} className='flex flex-col rounded-md w-1/5 bg-gradient-to-r from-purple-500 to-pink-500 text-center	m-10'>
            <img src='https://i.picsum.photos/id/1047/536/354.jpg?hmac=Hqs-Rz08WiLc2elw4gHvY1P-wxDJfmiZ-CSay2BH-1U' alt='random img' className='rounded' />
            <Link href={`/articles/${post.id}`}>
              <div>
                <h1 className="">{post.title}</h1>
              </div>;
            </Link>
          </div>
        )}
      </div>

    </>

  )
}

export default Test;

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