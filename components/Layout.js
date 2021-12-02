import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="main-layout">
      {children}
      <Footer />
    </div>
  );
}
