import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  LogIn,
  ChevronDown,
} from "lucide-react";

import { FooterProps, HeaderProps } from "./types";

export const headerData: HeaderProps = {
  links: [
    {
      label: "Cursos",
      icon: ChevronDown,
      links: [
        {
          label: "Todos los cursos",
          href: "/cursos",
        },
        {
          label: "Por horario",
          href: "/cursos-calendario",
        },
        {
          label: "Por preferencia",
          href: "/cursos-por-preferencia",
        },
      ],
    },
    {
      label: "Planes",
      href: "/planes",
    },
    {
      label: "Historia",
      href: "/sobre-nosotros",
    },
    {
      label: "Contáctanos",
      href: "/contacto",
    },
    {
      label: "Otro",
      icon: ChevronDown,
      links: [
        {
          label: "Profesores",
          href: "/profesores",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
      ],
    },
  ],
  actions: [
    {
      text: "Regístrate",
      href: "/signup",
      targetBlank: false,
    },
    {
      text: "Iniciar sesión",
      href: "/login",
      targetBlank: false,
      icon: LogIn,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "right",
};

export const footerData: FooterProps = {
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
