import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import Layout from "../components/layout";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader";

config.autoAddCss = false;

library.add(fab);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => {
      setIsLoading(true);
    };

    const handleRouteEnd = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
  }, [isLoading, setIsLoading]);

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
