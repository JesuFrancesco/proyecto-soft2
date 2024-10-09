import Image from "next/image";
import WidgetWrapper from "../common/WidgetWrapper";

import nextJsLogo from "@/public/images/nextjs-logo.png";
import reactLogo from "@/public/images/react-logo.png";
import tailwindCssLogo from "@/public/images/tailwind-css-logo.png";
import typescriptLogo from "@/public/images/typescript-logo.png";

const socialProofHome = {
  id: "socialProof-on-home",
  hasBackground: false,
  images: [
    {
      link: "https://nextjs.org/",
      src: nextJsLogo,
      alt: "NextJs Logo",
    },
    {
      link: "https://react.dev/",
      src: reactLogo,
      alt: "React Logo",
    },
    {
      link: "https://tailwindcss.com/",
      src: tailwindCssLogo,
      alt: "Tailwind CSS Logo",
    },
    {
      link: "https://www.typescriptlang.org/",
      src: typescriptLogo,
      alt: "Typescript Logo",
    },
  ],
};
const { images, id, hasBackground = false } = socialProofHome;

const FrameworksProof = () => (
  <WidgetWrapper
    id={id ? id : ""}
    hasBackground={hasBackground}
    containerClass="text-center"
  >
    Hecho con
    <div className="flex items-center justify-center gap-6 md:gap-9 pt-4">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div key={`item-social-proof-${index}`}>
            <a href={link} target="_blank" rel="noopener">
              <Image
                src={src}
                alt={alt}
                className="h-auto w-12 opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
                object-fit="contain"
                width={64}
                height={64}
              />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default FrameworksProof;
