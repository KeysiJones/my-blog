import Head from "next/head";
import { Article } from "../components/Article";

export async function getStaticProps() {
  const BASE_URL = process.env.REACT_APP_BLOG_API;
  const res = await fetch(`${BASE_URL}/posts`);
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
          <div id="avatar-title">
            <img
              src="/images/cropped-temple-photo.jpg"
              width="120"
              height="120"
              className="rounded-full mb-2"
            />
            <a
              className="text-4xl font-bold"
              href="https://linkedin.com/in/keysijones"
            >
              Keysi Jones
            </a>
          </div>
          <h2 className="mb-12 sm:mb-4">Artigos</h2>
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
