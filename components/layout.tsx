import { Footer } from "./footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div id="main-layout">
      {children}
      <Footer />
    </div>
  );
}
