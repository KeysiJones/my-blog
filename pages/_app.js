import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import "../public/styles/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

config.autoAddCss = false;

library.add(fab);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
    };

    const handleRouteEnd = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
  }, [loading, setLoading]);
  return (
    <>
      {loading ? (
        <div className="m-auto h-screen text-center text-3xl flex flex-col items-center mt-60">
          <div className="border-8  border-b-gray-700 border-r-gray-700 p-2 rounded-full w-32 h-32 animate-spin"></div>
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
