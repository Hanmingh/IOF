import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  heading?: string;
  description?: string;
  cta?: {
    text: string;
    url: string;
  };
  backgroundImage?: string;
}

const Hero = ({
  heading = "Transforming Industry with Cutting-Edge Algorithmic Solutions",
  description = "Specializing in Machine Learning and Optimization for Finance, Logistics, Healthcare, and Beyond",
  cta = {
    text: "Learn more",
    url: "/about",
  },
  backgroundImage = "/Black_Sail_Ship.jpg",
}: HeroProps) => {
  return (
    <section className="relative isolate w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 overflow-hidden mt-[-56px] md:mt-[-64px] mb-[-2rem] md:mb-[-3rem] min-h-[calc(100svh+56px)] md:min-h-[calc(100svh+64px)]">
      <img
        src={`${import.meta.env.BASE_URL}${backgroundImage.replace(/^\//,'')}`}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#1b2a49]/50" />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="text-white/90 text-balance md:text-lg">
              {description}
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Button asChild size="lg" className="bg-white text-[#cc3525] hover:bg-white/90">
                <Link to={cta.url}>
                  <span className="mr-2">{cta.text}</span>
                  <ArrowRight className="inline-block size-5" />
                </Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};

export { Hero };