import { useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BLOG_API;

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/posts/`);
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await res.json();

  return { props: { title, subtitle, body } };
}

export default function postDetail({ title, subtitle, body }) {
  useEffect(() => {
    window.hljs.highlightAll();
  }, []);
  return (
    <div className="mb-8">
      <h1 className="font-extrabold py-12 px-10 mb-6 text-white bg-green-400 rounded-lg">
        {title}
      </h1>
      <h2 className="text-gray-500 text-left text-2xl mt-2 mb-4">{subtitle}</h2>
      <div
        id="post-body"
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-12"
      />
      <div className="flex flex-row items-center">
        <img
          src="/images/cropped-temple-photo.jpg"
          width="100"
          height="100"
          className="rounded-full mr-4"
        />
        <div className="flex flex-col">
          <strong>Keysi Jones</strong>
          <p>
            <a href="https://keysijones.vercel.app" className="hover:underline">
              About the author
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
