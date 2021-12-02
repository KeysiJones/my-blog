import { useRouter } from "next/router";

export default function Article({ id, title, subtitle }) {
  const router = useRouter();

  return (
    <div className="mb-16">
      <a className="font-bold">
        <h1
          onClick={() => router.push(`/posts/${id}`)}
          className="hover:underline hover:cursor-pointer"
        >
          {title}
        </h1>
      </a>
      <p className="text-gray-500 text-left text-3xl mt-2">{subtitle}</p>
      <p className="mt-4">
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
