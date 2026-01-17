"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import usaBmxImg from "@/assets/usa-bmx.webp";
import ohsImg from "@/assets/ohs.png";
import kgkImg from "@/assets/kgk.jpeg";
import fdjImg from "@/assets/fdj.png";

const projects = [
  {
    title: "KGK - Online Jewelry E-Commerce Platform",
    description:
      "A large-scale e-commerce platform for online jewelry sales, supporting both B2B and B2C users with multi-language and multi-currency capabilities.",
    role: "Full Stack Developer",
    tech: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Microservices",
      "RESTful APIs",
    ],
    responsibilities: [
      "Developed multi-language, multi-currency product listing API for jewelry, diamonds, and gemstones",
      "Integrated multi-language support and multi-currency conversion for products",
      "Implemented Product Design & Development (PDD), auction, and catalog modules for international markets",
      "Built microservices-based architecture ensuring scalability and high performance",
      "Integrated Elasticsearch for fast search results and efficient data retrieval",
      "Designed RESTful APIs using Node.js and NestJS with PostgreSQL and MongoDB integration",
    ],
    image: kgkImg.src,
    github: null,
    demo: "https://dev.kgk.magnetoinfotech.com/en",
  },
  {
    title: "FDJ Admin Panel Platform",
    description:
      "A comprehensive admin panel to manage and track third-party orders with advanced reporting and inventory management capabilities.",
    role: "Full Stack Developer",
    tech: [
      "MERN Stack",
      "Redis",
      "Bull Queue",
      "ShipStation API",
      "AWS EC2",
      "RBAC",
    ],
    responsibilities: [
      "Built comprehensive admin panel to manage and track third-party orders",
      "Implemented order processing stages, inventory checks, and shipment tracking",
      "Developed daily and monthly reporting systems with role-based access control (RBAC)",
      "Integrated currency conversion API for multi-currency transaction support",
      "Deployed scalable application on AWS EC2 ensuring high availability and reliability",
    ],
    image: fdjImg.src,
    github: null,
    demo: null,
  },
  {
    title: "USA BMX - BMX Racing Organization Platform",
    description:
      "A comprehensive platform for BMX racing enthusiasts, providing a hub for organized races, track facilities, and rider community management.",
    role: "Full Stack Developer",
    tech: ["Node.js", "NestJS", "PostgreSQL", "RESTful APIs"],
    responsibilities: [
      "Developed comprehensive platform for BMX racing enthusiasts",
      "Built backend infrastructure for organized races, track facilities, and rider community management",
      "Designed PostgreSQL database architecture for efficient data management",
      "Implemented RESTful APIs for race scheduling and rider registration",
    ],
    image: usaBmxImg.src,
    github: null,
    demo: "https://www.usabmx.com/",
  },
  {
    title: "One Home Solution (OHS) - Maintenance & Service Booking Platform",
    description:
      "A platform designed to streamline booking and managing home maintenance services with real-time availability and recurring service support.",
    role: "Full Stack Developer",
    tech: ["Node.js", "NestJS", "PostgreSQL", "RESTful APIs"],
    responsibilities: [
      "Implemented appointment booking system with real-time slot availability",
      "Developed support for recurring seasonal services including pool maintenance",
      "Built scalable backend architecture for home maintenance service management",
    ],
    image: ohsImg.src,
    github: null,
    demo: "https://onehomesolution.com/",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = projectsRef.current?.querySelectorAll(".project-card");

    if (projectCards) {
      gsap.fromTo(
        projectCards,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Mouse move tilt effect
      projectCards.forEach((card) => {
        const cardEl = card as HTMLElement;
        cardEl.addEventListener("mousemove", (e) => {
          const rect = cardEl.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          
          gsap.to(cardEl, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.02,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000
          });
        });
        
        cardEl.addEventListener("mouseleave", () => {
          gsap.to(cardEl, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
          });
        });
      });
    }
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="section py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Enterprise-level solutions delivering real business value
          </p>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card overflow-hidden border-2 border-border hover:border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary text-white px-4 py-1.5">
                        {project.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-6 pb-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                          <span className="w-1 h-5 bg-primary rounded-full"></span>
                          Technologies & Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                          <span className="w-1 h-5 bg-primary rounded-full"></span>
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5 font-bold">▸</span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/10 hover:border-primary"
                        disabled={!project.github}
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                      </Button>
                      <Button
                        variant="default"
                        size="lg"
                        className="flex-1 items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!project.demo}
                        onClick={() =>
                          project?.demo && window.open(project?.demo, "_blank")
                        }
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
