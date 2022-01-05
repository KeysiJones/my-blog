import { useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BLOG_API;

type Post = {
  id: number;
  title: string;
  subtitle: string;
};
export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/posts/`);
  const posts = await res.json();
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

type CONTEXT = { params: { id: string } };

export async function getStaticProps(context: CONTEXT) {
  const { id } = context.params;
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await res.json();

  return { props: { title, subtitle, body } };
}

type PROPS = {
  title: string;
  subtitle: string;
  body: string;
};

export default function postDetail({ title, subtitle, body }: PROPS) {
  useEffect(() => {
    window.hljs.highlightAll();
  }, []);
  return (
    <div className="mb-8">
      <h1 className="font-extrabold p-8 mb-6 text-white bg-green-400 rounded-lg">
        {title}
        <p className="text-gray-100 text-left text-xl italic mt-2">
          {subtitle}
        </p>
      </h1>
      <div
        id="post-body"
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-12"
      />
      <div className="flex flex-row items-center">
        <img
          src="/images/cropped-keysi.jpeg"
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
