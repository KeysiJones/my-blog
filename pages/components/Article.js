import { useRouter } from "next/router";

function Article({ id, title, subtitle }) {
  const router = useRouter();

  return (
    <div className="my-4">
      <a className="font-bold text-2xl text-blue-400">
        <button
          onClick={() => router.push(`/posts/${id}`)}
          className="hover:underline"
        >
          {title}
        </button>
      </a>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}

export { Article };
