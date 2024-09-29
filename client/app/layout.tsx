import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config";

import Providers from "@/components/atoms/Providers";
import Header from "@/components/widgets/Header";
import Announcement from "@/components/widgets/Announcement";
import Footer2 from "@/components/widgets/Footer2";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${rubik.className} antialiased`}>
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
