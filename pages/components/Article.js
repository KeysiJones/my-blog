import { useRouter } from "next/router";

export default function Article({ id, title, subtitle }) {
  const router = useRouter();

  return (
    <div className="my-4">
      <a className="font-bold text-2xl text-blue-400">
        <button
          onClick={() => router.push(`/posts/${id}`)}
          className="hover:underline text-3xl"
        >
          {title}
        </button>
      </a>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
}

export { Article };
