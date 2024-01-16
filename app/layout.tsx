import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fraunces, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Product Preview Card Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body className="flex h-screen w-screen items-center justify-center bg-cream">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
