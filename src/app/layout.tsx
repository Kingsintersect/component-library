import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/poppins.font.css"
import "./styles/globals.css";
import PagePreloader from "./components/preloaders/PagePreloader";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* <PagePreloader /> */}
        {children}
      </body>
    </html>
  );
}
