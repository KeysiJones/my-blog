export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://keysi-next-blog-backend.herokuapp.com/posts/${id}`
  );
  console.log({ res });
  const post = await res.json();

  console.log(post);

  return { props: { post } };
}

export default function postDetail({ post }) {
  return (
    <div>
      <h1
        className="text-5xl mt-20 mb-4 text-left"
        style={{ color: "#343a40" }}
      >
        {post.title}
      </h1>
      <h2 className="text-gray-400 text-left text-3xl mt-2 mb-4">
        {post.subtitle}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}
