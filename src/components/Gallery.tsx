"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface GalleryProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery = ({
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
}: GalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setSnapCount(carouselApi.scrollSnapList().length);
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Autoplay every 5s; pause on hover/focus
  useEffect(() => {
    if (!carouselApi || isPaused) return;
    const id = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [carouselApi, isPaused]);
  const hasHeading = Boolean(heading && heading.trim().length > 0)
  return (
    <section className={`${hasHeading ? 'pt-16 pb-24' : 'pt-4 pb-16'}`}>
      <div className="container">
        {hasHeading && (
          <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-[#cc3525] md:mb-3 md:text-4xl lg:mb-4">
                {heading}
              </h2>
              <Link
                to={demoUrl}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-[#cc3525] md:text-base lg:text-lg"
              >
                Contact us
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="border-[#cc3525] text-[#cc3525] hover:bg-[#cc3525] hover:text-white disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="border-[#cc3525] text-[#cc3525] hover:bg-[#cc3525] hover:text-white disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <div
        className="w-full max-w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="ml-8 md:max-w-[452px]">
                <Link
                  to={item.url}
                  className="group flex flex-col justify-between rounded-xl border bg-background/60 shadow-sm transition hover:shadow-md"
                >
                  <div className="relative">
                    <div className="aspect-3/2 flex overflow-clip rounded-t-xl">
                      <div className="relative h-full w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[#cc3525]/10 transition group-hover:bg-[#cc3525]/20" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 p-4 md:p-5">
                    <div className="line-clamp-3 break-words text-lg font-semibold text-[#cc3525] md:text-xl lg:text-2xl">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground line-clamp-3 text-sm md:text-base">
                      {item.summary}
                    </div>
                    <div className="flex items-center pt-1 text-sm font-semibold text-[#cc3525]">
                      Learn more
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {snapCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === selectedIndex ? 'bg-[#cc3525] w-6' : 'bg-[#cc3525]/30 hover:bg-[#cc3525]/60'
              }`}
              onClick={() => carouselApi?.scrollTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export { Gallery };