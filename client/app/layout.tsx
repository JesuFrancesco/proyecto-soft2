import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { SITE } from "@/config";

import Providers from "@/components/atoms/Providers";
import Header from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

import "./css/base.css";

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
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
