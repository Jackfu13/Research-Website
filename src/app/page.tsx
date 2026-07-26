import Image from "next/image";

import { Button } from "@/components/Button";
import { FeaturedPublicationCarousel } from "@/components/FeaturedPublicationCarousel";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      {/* Hero with featured publication */}
      <section className="relative flex min-h-svh w-full items-center px-8 pt-28 pb-16 md:px-12 md:pt-32 md:pb-20">
        <Image
          src="/NEU-Bridge-Shot.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
          {/* Left: hero text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-80">
                At Northeastern University
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)", fontFamily: '"Times New Roman", Times, serif' }}>
                {site.name}
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white opacity-90 md:text-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              {site.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              <Button href="/about" label="About" variant="primary" large />
              <Button href="/join" label="Join" variant="primary" large />
            </div>
          </div>

          {/* Right: featured publication carousel */}
          <FeaturedPublicationCarousel publications={site.publications} />
        </div>
      </section>

    </div>
  );
}
