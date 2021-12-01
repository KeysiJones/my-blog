import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Article({ id, title, subtitle }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/posts/${id}`);
  }, []);

  return (
    <div className="my-16">
      <a className="font-bold" style={{ color: "#343a40" }}>
        <button
          onClick={() => router.push(`/posts/${id}`)}
          className="hover:underline text-5xl text-left"
        >
          {title}
        </button>
      </a>
      <p className="text-gray-500 text-left text-3xl mt-2">{subtitle}</p>
      <p style={{ color: "#343a40" }} className="mt-4">
        Postado por{" "}
        <a
          className="italic underline"
          href="https://linkedin.com/in/keysijones"
        >
          Keysi Jones
        </a>
      </p>
    </div>
  );
}

export { Article };
