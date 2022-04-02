import Head from "next/head";
import { Article, Avatar } from "../components";

export async function getStaticProps() {
  const BASE_URL = process.env.REACT_APP_BLOG_API;
  const apiResponse = await fetch(`${BASE_URL}/posts`);
  const postList = await apiResponse.json();

  return { props: { postList } };
}

export default function Home({ postList }) {
  const avatarImagePath = "/images/cropped-keysi.jpg";
  const avatarLink = "https://linkedin.com/in/keysijones";
  return (
      <main className="flex flex-col border-b">
        <Head>
          <title>Keysi Jones Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Avatar image={avatarImagePath} link={avatarLink} />
          <h2 className="mb-12 sm:mb-4">Artigos</h2>
            {postList.map((post) => (
              <Article
                key={post.id}
                subtitle={post.subtitle}
                id={post.id}
                title={post.title}
              />
            ))}
        </div>
      </main>
  );
}
