import { YouTubeEmbed } from "@next/third-parties/google";

const Hero = () => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12">
          <div className="mx-auto max-w-4xl pb-3 text-center md:pb-6">
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Eduyacha
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                <span>
                  <em>La educación a tus manos</em>.
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="relative m-auto w-full">
            <YouTubeEmbed style="margin: auto;" videoid="xqKit53XaH0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
