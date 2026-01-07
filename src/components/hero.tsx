"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-name",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-description",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-button",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Continuous subtle animation for the arrow
    gsap.to(".scroll-arrow", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Software Engineer | Full-Stack Developer
          </span>
        </div>
        <h1 className="hero-name text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary text-transparent bg-clip-text leading-tight">
          MOHAMMAD HUSAIN
        </h1>
        <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          Building Scalable Solutions for Modern Businesses
        </h2>
        <p className="hero-description text-lg sm:text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experienced <strong>Software Engineer</strong> with{" "}
          <strong>2+ years</strong> of expertise in developing enterprise-level
          applications using <strong>MERN stack</strong>, microservices
          architecture, and cloud technologies. Passionate about creating
          efficient, scalable solutions that drive business growth.
        </p>
        <div className="hero-button flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1KHKFsstzrxXh0nXK0pnKyLY4nhy7AJlc/view?usp=sharing",
                "_blank"
              )
            }
            className="px-8 py-6 text-lg border-2 hover:bg-primary/10 transition-all duration-300"
          >
            View Resume
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-muted-foreground">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
}
