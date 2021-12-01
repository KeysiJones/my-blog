import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="px-64 py-4 min-h-screen flex flex-col justify-between">
      {children}
      <Footer />
    </div>
  );
}
