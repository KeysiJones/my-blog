import Head from "next/head";
import { Article } from "./components/Article";

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="flex flex-col justify-around min-h-screen">
      <div className="mb-8 border-b">
        <Head>
          <title>Keysi Jones Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="flex flex-col items-center p-8">
            <img
              src="/images/keysiredondo.jpeg"
              width="170"
              height="170"
              className="rounded-full mb-2"
            />
            <h1 className="text-6xl font-bold text-blue-400">Keysi Jones</h1>
          </div>
          <h2 className="text-3xl mb-8 text-blue-400">Artigos</h2>
          <div>
            {posts.map((post) => (
              <Article
                key={post.id}
                subtitle={post.subtitle}
                id={post.id}
                title={post.title}
              />
            ))}
          </div>
          <div id="div_editor1"></div>
        </main>
      </div>
    </div>
  );
}
