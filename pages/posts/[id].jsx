import { useRouter } from "next/router";
import { useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BLOG_API;

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/posts/`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await res.json();

  return { props: { title, subtitle, body } };
}

export default function postDetail({ title, subtitle, body }) {
  const router = useRouter();
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
      <a>
        <p
          onClick={() => router.push("/")}
          className="text-right hover:underline hover:cursor-pointer mb-4"
        >
          Voltar à tela inicial
        </p>
      </a>
      <div
        id="post-body"
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-12"
      />
      <div className="flex flex-row items-center">
        <img
          src="/images/cropped-keysi.jpg"
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
          <a>
            <p
              onClick={() => router.push("/")}
              className="text-right hover:underline hover:cursor-pointer mb-4"
            >
              Voltar à tela inicial
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
