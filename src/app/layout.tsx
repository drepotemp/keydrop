"use client";
import "./globals.css";
import React from "react";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Keydrop</title>
        <meta
          name="description"
          content="KeyDrop has been a trusted part of the Counter-Strike community since 2018, offering players access to their favorite in-game items in a fast, fun, and secure way."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex justify-center items-center bg-[#17171C]">
        <section id="root" className="w-full h-full max-w-[2000px]">
          {children}
        </section>

      </body>
    </html>
  );
};

export default RootLayout;
