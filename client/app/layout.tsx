import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SITE } from "@/config";

import Providers from "@/components/atoms/Providers";
import HeaderClient from "@/components/widgets/HeaderClient";
import Footer from "@/components/widgets/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import "./css/base.css";
import HeaderServer from "@/components/widgets/HeaderServer";

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

      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <HeaderServer />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
