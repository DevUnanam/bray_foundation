import { type ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CursorFollower } from "@/components/motion/cursor-follower";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <CursorFollower />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
