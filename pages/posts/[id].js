export async function getStaticPaths() {
  const res = await fetch(
    `https://keysi-next-blog-backend.herokuapp.com/posts/`
  );

  const posts = await res.json();

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://keysi-next-blog-backend.herokuapp.com/posts/${id}`
  );

  const { title, subtitle, body } = await res.json();

  return { props: { title, subtitle, body } };
}

export default function postDetail({ title, subtitle, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2 className="text-gray-400 text-left text-3xl mt-2 mb-4">{subtitle}</h2>
      <div id="post-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
