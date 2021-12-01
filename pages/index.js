import Head from "next/head";
import { Article } from "../components/Article";

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    `https://keysi-next-blog-backend.herokuapp.com/posts`
  );
  const posts = await res.json();

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="flex flex-col">
      <div className="border-b">
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
            <h1 className="text-6xl font-bold" style={{ color: "#343a40" }}>
              Keysi Jones
            </h1>
          </div>
          <h2 className="text-4xl" style={{ color: "#343a40" }}>
            Artigos
          </h2>
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
        </main>
      </div>
    </div>
  );
}
