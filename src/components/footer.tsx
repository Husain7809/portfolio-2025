"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted/80 border-t-2 border-border py-8 md:py-10 mb-16 md:mb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-primary mb-1">
              Mohammad Husain
            </p>
            <p className="text-base text-muted-foreground font-medium">Software Engineer | Full-Stack Developer</p>
            <p className="text-sm text-muted-foreground mt-2">Building scalable solutions for modern businesses</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mohammad-husain-b23167206/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://github.com/husain7809"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:mh.varaliya@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>

        <div className="footer-content pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Husain. All rights reserved. | Crafted with attention to detail and professional excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
