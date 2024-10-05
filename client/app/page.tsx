import type { Metadata } from "next";

import { SITE } from "@/config";

import Hero from "@/components/widgets/Hero";
import SocialProof from "@/components/widgets/SocialProof";
import Features from "@/components/widgets/Features";
// import Content from "@/components/widgets/Content";
// import Steps from "@/components/widgets/Steps";
// import Testimonials from "@/components/widgets/Testimonials";
// import FAQs2 from "@/components/widgets/FAQs2";
// import Pricing from "@/components/widgets/Pricing";
// import Team from "@/components/widgets/Team";
// import CallToAction2 from "@/components/widgets/CallToAction2";
// import Contact from "@/components/widgets/Contact";

import {
  callToAction2Home,
  contactHome,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  teamHome,
  // contentHomeOne,
  // contentHomeTwo,
  // stepsHome,
  // testimonialsHome,
} from "@/shared/data/pages/home.data";
export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <SocialProof {...socialProofHome} />
      {/* <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
