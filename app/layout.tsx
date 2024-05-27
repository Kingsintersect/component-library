import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar, { MenuItem } from "./components/NavBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reuseable React Components",
  description: "A library for reuseable react components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={"inter.className"}>
        {children}
      </body>
    </html>
  );
}
