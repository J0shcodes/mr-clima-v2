"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import HeaderComponents from "@/components/Header";
import Head from "next/head";

import getImageName from "@/helper/ImageName";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imageName, setImageName] = useState<string | null>("");

  useEffect(() => {
    const imageName = getImageName();
    console.log(imageName);
    setImageName(imageName);
  }, [setImageName]);

  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${imageName})`,
        }}
        className={`${inter.className} bg-center bg-cover bg-no-repeat lg:h-screen w-screen`}
      >
        <HeaderComponents />
        <div>{children}</div>
      </body>
    </html>
  );
}
