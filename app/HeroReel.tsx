"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "./site-data";

const slides = [
  {
    title: "Crypto Hall of Fame",
    slug: "pantheon",
    image: "/work/pantheon-hero.jpg",
    year: "2026",
  },
  {
    title: "TIMREMONT",
    slug: "timremont",
    image: "/work/timremont-hero.jpg",
    year: "2026",
  },
  {
    title: "Home Pilates",
    slug: "home-pilates",
    image: "/work/pilates-hero.jpg",
    year: "2025–2026",
  },
  {
    title: "Goose",
    slug: "goose",
    image: "/work/goose-hero.jpg",
    year: "2026",
  },
  {
    title: "BIT+",
    slug: "bitplus",
    image: "/work/bitplus-hero.jpg",
    year: "2026",
  },
];

export default function HeroReel({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [currentLoaded, setCurrentLoaded] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => {
        setPrevious(current);
        setCurrentLoaded(false);
        return (current + 1) % slides.length;
      });
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!currentLoaded || previous === null) return;

    const timeout = window.setTimeout(() => {
      setPrevious(null);
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [currentLoaded, previous]);

  const currentSlide = slides[active];
  const prefix = locale === "ru" ? "/ru" : "";
  const projectLabel = locale === "ru" ? "ПРОЕКТ" : "PROJECT";
  const cta = locale === "ru" ? "Смотреть →" : "View →";

  return (
    <div className="hero-visual md:col-span-5">
      <div className="w-full md:ml-auto md:max-w-[560px]">
        <Link
          href={`${prefix}/work/${currentSlide.slug}`}
          className="group block cursor-pointer"
          aria-label={`${cta.replace(" →", "")}: ${currentSlide.title}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
            {previous !== null && previous !== active && (
              <Image
                src={slides[previous].image}
                alt=""
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                quality={82}
                aria-hidden="true"
                className="object-cover"
              />
            )}

            <Image
              key={currentSlide.slug}
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              quality={82}
              loading={active === 0 ? "eager" : "lazy"}
              fetchPriority={active === 0 ? "high" : "auto"}
              onLoad={() => setCurrentLoaded(true)}
              className={`object-cover transition-all duration-1000 ease-out ${
                currentLoaded
                  ? "scale-100 opacity-100 group-hover:scale-[1.02]"
                  : "scale-[1.02] opacity-0"
              }`}
            />

            <div className="absolute left-3 top-3 bg-[#f3f1eb]/90 px-2 py-1 text-[10px] uppercase tracking-[0.08em] backdrop-blur-sm">
              {projectLabel} {String(active + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="border-t border-black/20 pt-2">
            <div className="flex items-start justify-between gap-6 text-xs">
              <div>
                <p className="uppercase tracking-[0.08em] opacity-45">
                  {projectLabel} {String(active + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm tracking-[-0.02em] md:text-base">
                  {currentSlide.title}
                </p>
              </div>

              <div className="text-right">
                <p className="opacity-45">{currentSlide.year}</p>
                <p className="mt-1 transition-transform duration-300 group-hover:translate-x-1">
                  {cta}
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-1">
              {slides.map((slide, index) => (
                <span
                  key={slide.slug}
                  className={`h-px transition-opacity duration-500 ${
                    index === active
                      ? "bg-black opacity-100"
                      : "bg-black opacity-15"
                  }`}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
