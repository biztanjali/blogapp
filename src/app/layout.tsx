import type { Metadata } from "next";
import {Inter} from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "../styles/index.scss";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="width-100 height-100 flex flex-column padding-l-8 padding-r-8">
        <Navbar/>
        <div className={`${inter.className} main-container`}>
        {children}
        </div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
