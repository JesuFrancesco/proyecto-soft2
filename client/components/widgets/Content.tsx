import Image from "next/image";
import { Check } from "lucide-react";

import Headline from "../common/Headline";
import WidgetWrapper from "../common/WidgetWrapper";
import ItemGrid from "../common/ItemGrid";

import eduyachaLogo from "@/public/logo.png";

const contentHomeOne = {
  id: "contentOne-on-home-one",
  hasBackground: true,
  header: {
    title: "Aliquip definiebas ad est",
    subtitle: "Quando cetero his ne, eum admodum sapientem ut",
    tagline: "Content",
  },
  content:
    "Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.",
  items: [
    {
      title: "Per ei quaeque sensibus",
      description:
        "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
    },
    {
      title: "Cu imperdiet posidonium sed",
      description:
        "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
    },
    {
      title: "Nulla omittam sadipscing mel ne",
      description:
        "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
    },
  ],
  image: {
    src: eduyachaLogo,
    alt: "Colorful Image",
  },
  isReversed: false,
  isAfterContent: false,
};

const {
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
} = contentHomeOne;
const Descripcion = () => (
  <WidgetWrapper
    id={id ? id : ""}
    hasBackground={hasBackground}
    containerClass={`${
      isAfterContent ? "py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20" : ""
    }`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div
        className={`md:flex ${
          isReversed ? "md:flex-row-reverse" : ""
        } md:gap-16`}
      >
        <div className="self-center md:basis-1/2">
          {content && (
            <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">
              {content}
            </div>
          )}
          <ItemGrid
            items={items}
            columns={1}
            defaultIcon={Check}
            containerClass="gap-4 md:gap-y-6"
            panelClass="flex max-w-full"
            titleClass="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2"
            descriptionClass="mt-1 text-gray-600 dark:text-slate-400"
            iconClass="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary-900 text-gray-50 mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
          />
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {image && (
            <div className="relative m-auto max-w-4xl">
              <Image
                className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Descripcion;
