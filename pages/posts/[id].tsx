import { useEffect } from "react";
import { AboutAvatar, HomePageLink, PostHeader, PostBody } from '../../components'
const BASE_URL = process.env.REACT_APP_BLOG_API;

type Context = {
  params: {
    id: number;
  };
}

type PostDetailProps = {
  title: string,
  subtitle: string,
  body: string
};

export async function getStaticPaths() {
  const apiResponse = await fetch(`${BASE_URL}/posts/`);
  const postList = await apiResponse.json();
  const paths = postList.map((post: { id: { toString: () => any; }; }) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: Context) {
  const { id } = context.params;
  const apiResponse = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await apiResponse.json();

  return { props: { title, subtitle, body } };
}

export default function postDetail({ title, subtitle, body }: PostDetailProps) {
  const avatarImage = "/images/cropped-keysi.jpg";
  const avatarName = "Keysi Jones";
  const avatarUrl = "https://keysijones.vercel.app";

  useEffect(() => {
    window.hljs.highlightAll();
  }, []);

  return (
    <div className="mb-8">
      <PostHeader title={title} subtitle={subtitle} />
      <HomePageLink />
      <PostBody body={body} />
      <AboutAvatar
        avatarUrl={avatarUrl}
        avatarName={avatarName}
        avatarImage={avatarImage}
      />
    </div>
  );
}
