import { Facebook, Github, Instagram, Twitter, LogIn } from "lucide-react";

import { FooterProps, HeaderProps } from "./types";

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
      href: "/login",
      targetBlank: true,
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
