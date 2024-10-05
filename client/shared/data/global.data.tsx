import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  ChevronDown,
  Rss,
} from "lucide-react";

import { AnnouncementProps, FooterProps, HeaderProps } from "../types";

// Announcement data
export const announcementData: AnnouncementProps = {
  title: "NEW",
  callToAction: {
    text: "This template is made with Next.js 14 using the new App Router »",
    href: "https://nextjs.org/blog/next-14",
  },
  callToAction2: {
    text: "Follow @onWidget on Twitter",
    href: "https://twitter.com/intent/user?screen_name=onwidget",
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: "Cursos",
      href: "/cursos",
    },
    {
      label: "Planes",
      href: "/planes",
    },
    {
      label: "Sobre nosotros",
      href: "/sobre-nosotros",
    },
    {
      label: "Contáctanos",
      href: "/contacto",
    },
    {
      label: "Ayuda",
      href: "/faq",
    },
  ],
  actions: [
    {
      text: "Regístrate",
      href: "/signup",
      targetBlank: true,
    },
    {
      text: "Iniciar sesión",
      href: "/signin",
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "right",
};

// Footer data
export const footerData: FooterProps = {
  title: "TailNext",
  links: [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  columns: [
    {
      title: "Product",
      links: [
        {
          label: "Features",
          href: "/",
        },
        {
          label: "Security",
          href: "/",
        },
        {
          label: "Team",
          href: "/",
        },
        {
          label: "Enterprise",
          href: "/",
        },
        {
          label: "Customer stories",
          href: "/",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Resources",
          href: "/",
        },
      ],
    },
    {
      title: "Platform",
      links: [
        {
          label: "Developer API",
          href: "/",
        },
        {
          label: "Partners",
          href: "/",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Docs",
          href: "/",
        },
        {
          label: "Community Forum",
          href: "/",
        },
        {
          label: "Professional Services",
          href: "/",
        },
        {
          label: "Skills",
          href: "/",
        },
        {
          label: "Status",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About",
          href: "/",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Careers",
          href: "/",
        },
        {
          label: "Press",
          href: "/",
        },
        {
          label: "Inclusion",
          href: "/",
        },
        {
          label: "Social Impact",
          href: "/",
        },
        {
          label: "Shop",
          href: "/",
        },
      ],
    },
  ],
  socials: [
    { label: "Twitter", icon: Twitter, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "RSS", icon: Rss, href: "#" },
    {
      label: "Github",
      icon: Github,
      href: "https://github.com/onwidget/tailnext",
    },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{" "}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {" "}
          onWidget
        </a>{" "}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  // links: [
  //   {
  //     label: "Terms & Conditions",
  //     href: "/terms",
  //   },
  //   {
  //     label: "Privacy Policy",
  //     href: "/privacy",
  //   },
  // ],
  columns: [
    {
      title: "Dirección",
      texts: ["Enrique Segoviano"],
    },
    {
      title: "Correo",
      texts: ["Office: eduyacha@ulima.edu.pe", "Site: https://eduyacha.io"],
    },
    {
      title: "Celular",
      texts: ["Recepción: +51 923 168 123", "Oficina: +51 999 888 777"],
    },
  ],
  socials: [
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    {
      label: "Github",
      icon: Github,
      href: "https://github.com/jesufrancesco/proyecto-soft2",
    },
  ],
};
