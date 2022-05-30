import { useEffect } from "react";
import { AboutAvatar, HomePageLink, PostHeader, PostBody } from '../../components'
const BASE_URL = process.env.REACT_APP_BLOG_API;
const GRAVATAR_HASH = process.env.GRAVATAR_HASH;

type Context = {
  params: {
    id: number;
  };
}

type Post = {
  id: number;
}

type PostDetailProps = {
  title: string,
  subtitle: string,
  body: string,
  avatarImage: string
};

export async function getStaticPaths() {
  const apiResponse = await fetch(`${BASE_URL}/posts/`);
  const postList = await apiResponse.json();
  const paths = postList.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));
  
  return {
    paths,
    fallback: false
  };

}

export async function getStaticProps(context: Context) {
  const { id } = context.params;
  const apiResponse = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await apiResponse.json();
  const avatarImage = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}?s=280`;

  return { props: { title, subtitle, body, avatarImage } };
}

export default function postDetail({ title, subtitle, body, avatarImage }: PostDetailProps) {
  const avatarName = "Keysi Jones";
  const avatarUrl = "https://keysijones.vercel.app";

  useEffect(() => {
    //@ts-ignore
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
