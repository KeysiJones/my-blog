import { useEffect } from "react";
import { AboutAvatar, HomePageLink, PostHeader, PostBody } from '../../components'
const BASE_URL = process.env.REACT_APP_BLOG_API;

export async function getStaticPaths() {
  const apiResponse = await fetch(`${BASE_URL}/posts/`);
  const postList = await apiResponse.json();
  const paths = postList.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const apiResponse = await fetch(`${BASE_URL}/posts/${id}`);

  const { title, subtitle, body } = await apiResponse.json();

  return { props: { title, subtitle, body } };
}

export default function postDetail({ title, subtitle, body }) {
  const avatarImage = "/images/cropped-keysi.jpg";
  const avatarName = "Keysi Jones";
  const avatarUrl = "https://keysijones.vercel.app";

  useEffect(() => {
    window.hljs.highlightAll();
  }, []);

  return (
    <div className="mb-8">
      <PostHeader title={title} subtitle={subtitle}/>
      <HomePageLink/>
      <PostBody body={body}/>
      <AboutAvatar
        avatarUrl={avatarUrl}
        avatarName={avatarName}
        avatarImage={avatarImage}
      />
    </div>
  );
}
