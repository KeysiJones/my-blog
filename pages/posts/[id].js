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
  return (
    <div className="mb-8">
      <h1>{title}</h1>
      <h2 className="text-gray-400 text-left text-3xl mt-2 mb-4">{subtitle}</h2>
      <div
        id="post-body"
        dangerouslySetInnerHTML={{ __html: body }}
        className="mb-12"
      />
      <div className="flex flex-row items-center">
        <img
          src="/images/keysiredondo.jpeg"
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
