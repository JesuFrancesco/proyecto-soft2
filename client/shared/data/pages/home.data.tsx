import {
  Linkedin,
  Twitter,
  Search,
  Clock,
  Download,
  ListCheck,
  Mail,
  MapPin,
  PhoneCall,
  MapPinCheckInside,
  Rocket,
} from "lucide-react";

import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from "../../types";
import nextJsLogo from "@/public/images/nextjs-logo.png";
import reactLogo from "@/public/images/react-logo.png";
import tailwindCssLogo from "@/public/images/tailwind-css-logo.png";
import typescriptLogo from "@/public/images/typescript-logo.png";

// import cameraFrontImg from "@/public/images/camera-front.jpg";
// import cameraBackImg from "@/public/images/camera-back.jpg";
// import gasImg from "@/public/images/gas.jpg";
// import heroImg from "@/public/images/hero.jpg";

export const heroHome: HeroProps = {
  title: <>Eduyacha</>,
  subtitle: (
    <>
      <span>
        <em>La educación a tus manos</em>.
      </span>{" "}
    </>
  ),

  // image: {
  //   src: heroImg,
  //   alt: "Hero TailNext",
  // },
  ytPromoVideoId: "xqKit53XaH0",
};

export const socialProofHome: SocialProofProps = {
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

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: "features-on-home",
  hasBackground: false,
  columns: 3,
  header: {
    title: <>La mejor opción para la educación complementaria de tus hijos</>,
    subtitle:
      "Descubre un mundo de aprendizaje divertido y enriquecedor para potenciar su talento.",
    tagline: "Features",
  },
  items: [
    {
      title: "Amplia variedad de materias para todos los intereses",
      description:
        "En Eduyacha, ofrecemos un repertorio diverso de materias que abarcan desde matemáticas y ciencias hasta arte y tecnología. Cada curso está diseñado para fomentar la curiosidad y el amor por el aprendizaje, permitiendo que tus hijos exploren nuevas áreas y descubran sus verdaderas pasiones. ¡Aquí hay algo para cada interesado!",
      icon: Search,
      callToAction: {
        text: "Ver lista de materias",
        href: "/",
      },
    },
    {
      title: "Profesores especializados",
      description:
        "En Eduyacha, contamos con un equipo de educadores altamente calificados y apasionados por su materia. Cada profesor tiene experiencia en su campo y utiliza métodos innovadores para hacer que el aprendizaje sea atractivo y efectivo. Con su guía, tus hijos recibirán atención personalizada y apoyo para alcanzar su máximo potencial.",
      icon: ListCheck,
      callToAction: {
        text: "Ver lista de profesores",
        href: "/",
      },
    },
    {
      title: "Agenda tu asesoría cuándo y donde quieras",
      description:
        "En Eduyacha, la flexibilidad es clave. Te ofrecemos la opción de programar asesorías en el horario y lugar que mejor se adapten a tus necesidades. Ya sea de forma presencial o virtual, nuestros educadores están listos para brindarte el apoyo que necesitas, garantizando que el aprendizaje se ajuste a tu ritmo y estilo de vida. ¡Tu comodidad es nuestra",
      icon: MapPinCheckInside,
      callToAction: {
        text: "Ver disponibilidad de horarios",
        href: "/",
      },
    },
  ],
};

// // Content data on Home page *******************
// export const contentHomeOne: ContentProps = {
//   id: "contentOne-on-home-one",
//   hasBackground: true,
//   header: {
//     title: "Aliquip definiebas ad est",
//     subtitle: "Quando cetero his ne, eum admodum sapientem ut",
//     tagline: "Content",
//   },
//   content:
//     "Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.",
//   items: [
//     {
//       title: "Per ei quaeque sensibus",
//       description:
//         "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
//     },
//     {
//       title: "Cu imperdiet posidonium sed",
//       description:
//         "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
//     },
//     {
//       title: "Nulla omittam sadipscing mel ne",
//       description:
//         "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
//     },
//   ],
//   image: {
//     src: cameraFrontImg,
//     alt: "Colorful Image",
//   },
//   isReversed: false,
//   isAfterContent: false,
// };

// // Content data on Home page *******************
// export const contentHomeTwo: ContentProps = {
//   id: "contentOne-on-home-two",
//   hasBackground: true,
//   content:
//     "Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.",
//   items: [
//     {
//       title: "Per ei quaeque sensibus",
//     },
//     {
//       title: "Cu imperdiet posidonium sed",
//     },
//     {
//       title: "Nulla omittam sadipscing mel ne",
//     },
//     {
//       title: "Per ei quaeque sensibus",
//     },
//     {
//       title: "Cu imperdiet posidonium sed",
//     },
//     {
//       title: "Nulla omittam sadipscing mel ne",
//     },
//   ],
//   image: {
//     src: cameraBackImg,
//     alt: "Colorful Image",
//   },
//   isReversed: true,
//   isAfterContent: true,
// };

// // Steps data on Home page *******************
// export const stepsHome: StepsProps = {
//   id: "steps-on-home",
//   hasBackground: false,
//   isReversed: false,
//   isImageDisplayed: true,
//   image: {
//     src: gasImg,
//     alt: "Steps image",
//   },
//   header: {
//     title: "Sed ac magna sit amet risus tristique interdum.",
//   },
//   items: [
//     {
//       title: "Step 1",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
//       icon: ArrowDown,
//     },
//     {
//       title: "Step 2",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
//       icon: ArrowDown,
//     },
//     {
//       title: "Step 3",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
//       icon: ArrowDown,
//     },
//     {
//       title: "Ready!",
//     },
//   ],
// };

// Testimonials data on Home page *******************

export const testimonialsHome: TestimonialsProps = {
  id: "testimonials-on-home",
  hasBackground: true,
  header: {
    title: "What our customers say about us",
    subtitle:
      "Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.",
  },
  testimonials: [
    {
      name: "Tayla Kirsten",
      job: "Marketing Manager",
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: "https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Tayla Kirsten",
      },
      href: "/",
    },
    {
      name: "Silver Jordan",
      job: "Senior Marketer",
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: "https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Silver Jordan",
      },
      href: "/",
    },
    {
      name: "Kelsey Arden",
      job: "Co-Founder & CEO",
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: "https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Kelsey Arden",
      },
      href: "/",
    },
    {
      name: "Sarah Johnson",
      job: "Business Owner",
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: "https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Sarah Johnson",
      },
      href: "/",
    },
    {
      name: "Keith Young",
      job: "Freelance Developer",
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: "https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Keith Young",
      },
      href: "/",
    },
    {
      name: "Lisa Gordon",
      job: "Project Manager",
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: "https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Lisa Gordon",
      },
      href: "/",
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: "faqsTwo-on-home",
  hasBackground: false,
  header: {
    title: "Frequently Asked Questions",
    subtitle:
      "Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.",
    tagline: "FAQS",
  },
  items: [
    {
      title: "What do I need to start?",
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: "How to install the NextJS + Tailwind CSS template?",
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: "What is something that you would really like to try again?",
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title:
        "If you could only ask one question to each person you meet, what would that question be?",
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: "pricing-on-home",
  hasBackground: true,
  header: {
    title: "Prices for each plan",
    subtitle:
      "Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.",
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: "basic",
      price: 29,
      period: "per month",
      items: [
        {
          description: "Etiam in libero, et volutpat",
        },
        {
          description: "Aenean ac nunc dolor tristique",
        },
        {
          description: "Cras scelerisque accumsan lib",
        },
        {
          description: "In hac habitasse",
        },
      ],
      callToAction: {
        targetBlank: true,
        text: "Free 7-day trial",
        href: "/",
      },
      hasRibbon: false,
    },
    {
      title: "standard",
      price: 69,
      period: "per month",
      items: [
        {
          description: "Proin vel laoreet",
        },
        {
          description: "Ut efficitur egestas",
        },
        {
          description: "Pellentesque ut nibh",
        },
        {
          description: "Donec fringilla sem",
        },
      ],
      callToAction: {
        targetBlank: true,
        text: "Free 15-day trial",
        href: "/",
      },
      hasRibbon: true,
      ribbonTitle: "Popular",
    },
    {
      title: "premium",
      price: 199,
      period: "per month",
      items: [
        {
          description: "Curabitur suscipit risus",
        },
        {
          description: "Aliquam blandit malesuada",
        },
        {
          description: "Suspendisse sit amet",
        },
        {
          description: "Suspendisse auctor dui",
        },
      ],
      callToAction: {
        targetBlank: true,
        text: "Free 30-day trial",
        href: "/",
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: "team-on-home",
  hasBackground: false,
  header: {
    title: "Team Members",
    subtitle:
      "Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.",
    // tagline: 'Team',
  },
  teams: [
    {
      name: "Cindy Belcher",
      occupation: "SEO Consultant",
      image: {
        src: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "Cindy Belcher",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: Twitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: Linkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: Mail,
          href: "#",
        },
      ],
    },
    {
      name: "Toby Foster",
      occupation: "Marketing Tech",
      image: {
        src: "https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80",
        alt: "Toby Foster",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: Twitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: Linkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: Mail,
          href: "#",
        },
      ],
    },
    {
      name: "Clark Bourne",
      occupation: "Content Manager",
      image: {
        src: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        alt: "Clark Bourne",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: Twitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: Linkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: Mail,
          href: "#",
        },
      ],
    },
    {
      name: "Bella Chase",
      occupation: "UX Designer",
      image: {
        src: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        alt: "Bella Chase",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: Twitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: Linkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: Mail,
          href: "#",
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: "Get in Touch",
    subtitle: "In hac habitasse platea dictumst",
    tagline: "Contact",
  },
  content:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.",
  items: [
    {
      title: "Our Address",
      description: ["1230 Maecenas Street Donec Road", "New York, EEUU"],
      icon: MapPin,
    },
    {
      title: "Contact",
      description: ["Mobile: +1 (123) 456-7890", "Mail: tailnext@gmail.com"],
      icon: PhoneCall,
    },
    {
      title: "Working hours",
      description: [
        "Monday - Friday: 08:00 - 17:00",
        "Saturday & Sunday: 08:00 - 12:00",
      ],
      icon: Clock,
    },
  ],
  form: {
    title: "Ready to Get Started?",
    inputs: [
      {
        type: "text",
        name: "name",
        autocomplete: "off",
        placeholder: "Your name",
      },
      {
        type: "email",
        name: "email",
        autocomplete: "on",
        placeholder: "Your email address",
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: "textarea",
      placeholder: "Write your message...",
    },
    btn: {
      title: "Send Message",
      type: "submit",
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: "Next.js + Tailwind CSS",
  subtitle:
    "Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.",
  callToAction: {
    text: "Get template",
    href: "https://github.com/onwidget/tailnext",
    icon: Download,
  },
  items: [
    {
      title: "Get template",
      description: "Aliquam sodales est lectus, quis.",
      href: "https://github.com/onwidget/tailnext",
    },
    {
      title: "Learn more",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia.",
      href: "/",
    },
    {
      title: "Subscribe",
      description: "Morbi orci nunc, euismod ac dui id, convallis.",
      form: {
        icon: Mail,
        input: {
          type: "email",
          name: "email",
          autocomplete: "email",
          placeholder: "Enter your email address",
        },
        btn: {
          title: "Subscribe",
          type: "submit",
        },
      },
    },
  ],
};
