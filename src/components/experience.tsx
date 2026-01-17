"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "AeonX Digital",
    role: "Software Engineer - MERN Stack Developer",
    location: "Ahmedabad, Gujarat, India",
    period: "September 2025 - Present",
    description:
      "Developing comprehensive enterprise solutions with intelligent automation features using MERN stack",
    responsibilities: [
      "Developing comprehensive Procure-to-Pay solution with intelligent invoice automation using MERN stack",
      "Building scalable backend APIs using Node.js and Express.js for purchase order management and invoice processing",
      "Implementing React.js frontend components for supplier management, purchase requisitions, and approval workflows",
      "Integrating AI-powered invoice automation features to streamline accounts payable processes",
      "Designing MongoDB database schemas for vendor management, purchase orders, and invoice tracking",
      "Collaborating with SAP and AWS teams to ensure seamless integration with enterprise systems",
      "Implementing role-based access control (RBAC) for multi-level approval workflows",
      "Optimizing application performance and ensuring scalability for enterprise-level operations",
    ],
    skills: [
      "MERN Stack",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "AWS",
      "SAP Integration",
      "RBAC",
      "Invoice Automation",
      "API Development",
    ],
  },
  {
    company: "Bytes Technolab",
    role: "Software Engineer - Backend Developer",
    location: "Ahmedabad, Gujarat, India",
    period: "March 2023 - September 2025",
    description:
      "Led backend development for key projects across various industries, focusing on scalable, high-performance solutions",
    responsibilities: [
      "Developed and maintained RESTful APIs and GraphQL APIs using Node.js within NestJS and Express.js frameworks",
      "Designed and implemented React.js components, collaborating with frontend teams to build dynamic user interfaces",
      "Led development of key projects across various industries, focusing on scalable, high-performance backend solutions",
      "Collaborated with frontend and DevOps teams to ensure seamless integration of backend services",
      "Contributed to system efficiency enhancement by implementing asynchronous programming techniques",
      "Managed end-to-end API development lifecycle from conceptualization to implementation and maintenance",
    ],
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "React.js",
      "GraphQL",
      "RESTful APIs",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Microservices",
      "Redis",
      "Docker",
    ],
  },
];

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const experienceCards =
      experienceRef.current?.querySelectorAll(".experience-card");

    if (experienceCards) {
      gsap.fromTo(
        experienceCards,
        { 
          x: (i) => i % 2 === 0 ? -50 : 50,
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Timeline line animation
    gsap.fromTo(".timeline-line", 
      { scaleY: 0 },
      { 
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".experience-container",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      }
    );

    const listItems = experienceRef.current?.querySelectorAll(
      ".responsibility-item"
    );

    if (listItems) {
      gsap.fromTo(
        listItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Building enterprise solutions and driving technical excellence
          </p>

          <div className="experience-container relative space-y-12">
            <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-400 to-transparent origin-top hidden md:block"></div>
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <Card className="experience-card border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-emerald-500/5 border-b border-border">
                      <div className="flex flex-col gap-4">
                        <div>
                          <CardTitle className="text-2xl md:text-3xl mb-2">{exp.role}</CardTitle>
                          <CardDescription className="text-xl font-semibold text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-primary" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 space-y-6">
                      <p className="text-foreground leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-primary rounded-full"></span>
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 4).map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="responsibility-item flex items-start gap-3 text-sm"
                            >
                              <span className="text-primary font-bold">▸</span>
                              <span className="text-muted-foreground leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-primary/5 text-primary border-primary/10"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_0_4px_rgba(var(--primary),0.2)] z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
